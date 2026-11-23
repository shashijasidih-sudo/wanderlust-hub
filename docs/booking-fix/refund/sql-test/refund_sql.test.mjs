// Offline SQL test of 001_item_refunds.sql using PGlite (in-memory Postgres). Never touches production.
// Run: NODE_PATH=/tmp/pgl/node_modules node docs/booking-fix/refund/sql-test/refund_sql.test.mjs
import { PGlite } from "@electric-sql/pglite";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const dir = new URL("..", import.meta.url);
const migration = readFileSync(new URL("001_item_refunds.sql", dir), "utf8");
const rollback = readFileSync(new URL("rollback.sql", dir), "utf8");

const BASE = `
CREATE ROLE anon; CREATE ROLE authenticated; CREATE ROLE service_role;
CREATE SCHEMA auth; CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT NULL::uuid $$;
CREATE TABLE public.profiles (id uuid PRIMARY KEY, role text NOT NULL DEFAULT 'user');
CREATE TABLE public.bookings (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), total_price numeric NOT NULL, currency text NOT NULL DEFAULT 'INR',
  status text NOT NULL DEFAULT 'confirmed', item_details jsonb NOT NULL DEFAULT '{}', updated_at timestamptz DEFAULT now());
CREATE TABLE public.booking_items (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), booking_id uuid NOT NULL REFERENCES public.bookings(id),
  price numeric NOT NULL, status text NOT NULL DEFAULT 'confirmed', updated_at timestamptz DEFAULT now());
CREATE FUNCTION public.is_admin(_user_id uuid) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER AS
  $$ SELECT EXISTS (SELECT 1 FROM public.profiles WHERE id=_user_id AND role IN ('admin','super_admin')) $$;
CREATE FUNCTION public.set_updated_at() RETURNS trigger LANGUAGE plpgsql AS $$ BEGIN NEW.updated_at=now(); RETURN NEW; END $$;
`;
const ADMIN = "11111111-1111-1111-1111-111111111111", USER = "22222222-2222-2222-2222-222222222222";
let passed = 0;
async function test(name, fn) { try { await fn(); passed++; console.log("ok -", name); } catch (e) { console.error("FAIL -", name, e.message); process.exitCode = 1; } }

async function fresh() {
  const db = new PGlite();
  await db.exec(BASE);
  await db.exec(migration);
  await db.query(`INSERT INTO profiles VALUES ($1,'admin'),($2,'user')`, [ADMIN, USER]);
  // ₹3,303.75 booking: activity 2,500.00 + transfer 803.75
  const b = (await db.query(`INSERT INTO bookings (total_price, item_details) VALUES (3303.75, '{"payment_id":"pay_T1","order_id":"order_T1"}') RETURNING id`)).rows[0].id;
  const act = (await db.query(`INSERT INTO booking_items (booking_id, price) VALUES ($1, 2500) RETURNING id`, [b])).rows[0].id;
  const tr = (await db.query(`INSERT INTO booking_items (booking_id, price) VALUES ($1, 803.75) RETURNING id`, [b])).rows[0].id;
  return { db, b, act, tr };
}
const begin = (db, b, item, scope, refunded = 0, o = {}) => db.query(
  `SELECT * FROM refund_begin($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
  [b, item, scope, o.pay ?? "pay_T1", o.status ?? "captured", o.captured ?? 330375, refunded, o.cur ?? "INR", o.order ?? "order_T1", o.by ?? ADMIN]).then(r => r.rows[0]);
const finish = (db, r, o = {}) => db.query(`SELECT * FROM refund_finish($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
  [r.id, o.outcome ?? "created", o.rid ?? "rfnd_" + r.id.slice(0, 8), o.pay ?? r.razorpay_payment_id, o.amount ?? Number(r.amount_minor),
   o.receipt ?? r.razorpay_receipt, o.rstatus ?? "processed", o.reason ?? null, 330375]).then(x => x.rows[0]);
const rejects = async (p, code) => { await assert.rejects(p, (e) => { assert.match(e.message, new RegExp(code)); return true; }); };

await test("item refund: amount from saved item price (₹2,500 -> 250000), body stored verbatim", async () => {
  const { db, b, act } = await fresh();
  const r = await begin(db, b, act, "item");
  assert.equal(Number(r.amount_minor), 250000);
  assert.equal(r.razorpay_receipt, "yl-i-" + act.replaceAll("-", ""));
  assert.ok(r.razorpay_receipt.length <= 40);
  const body = JSON.parse(r.razorpay_request_body);
  assert.deepEqual(body, { amount: 250000, speed: "normal", receipt: r.razorpay_receipt, notes: { booking_id: b, item_id: act, attempt_id: r.id } });
});
await test("refunding one item never changes the other item", async () => {
  const { db, b, act, tr } = await fresh();
  const r = await finish(db, await begin(db, b, act, "item"));
  assert.equal(r.status, "processed");
  const items = (await db.query(`SELECT id, refund_status, status FROM booking_items`)).rows;
  assert.equal(items.find(i => i.id === act).refund_status, "refunded");
  assert.equal(items.find(i => i.id === tr).refund_status, "none");
  assert.equal(items.find(i => i.id === tr).status, "confirmed");
  const bk = (await db.query(`SELECT status, refund_status FROM bookings`)).rows[0];
  assert.deepEqual(bk, { status: "confirmed", refund_status: "partial" });
});
await test("full refund after an item refund refunds only the remainder (80375) and marks booking refunded", async () => {
  const { db, b, act } = await fresh();
  await finish(db, await begin(db, b, act, "item"));
  const f = await begin(db, b, null, "full", 250000);
  assert.equal(Number(f.amount_minor), 80375);
  await finish(db, f);
  assert.deepEqual((await db.query(`SELECT status, refund_status FROM bookings`)).rows[0], { status: "refunded", refund_status: "full" });
});
await test("full refund of ₹3,303.75 = 330375 paise", async () => {
  const { db, b } = await fresh();
  assert.equal(Number((await begin(db, b, null, "full")).amount_minor), 330375);
});
await test("while any refund is pending, item and full refunds are refused", async () => {
  const { db, b, act, tr } = await fresh();
  await begin(db, b, act, "item");
  await rejects(begin(db, b, tr, "item"), "refund_in_progress");
  await rejects(begin(db, b, null, "full"), "refund_in_progress");
});
await test("item refund refused after full refund processed; same item twice refused", async () => {
  const a = await fresh();
  await finish(a.db, await begin(a.db, a.b, null, "full"));
  await rejects(begin(a.db, a.b, a.act, "item", 330375), "already_fully_refunded");
  const c = await fresh();
  await finish(c.db, await begin(c.db, c.b, c.act, "item"));
  await rejects(begin(c.db, c.b, c.act, "item", 250000), "item_already_refunded");
});
await test("payment, order, currency, captured status and amount checks", async () => {
  const { db, b, act } = await fresh();
  await rejects(begin(db, b, act, "item", 0, { pay: "pay_OTHER" }), "payment_mismatch");
  await rejects(begin(db, b, act, "item", 0, { order: "order_X" }), "order_mismatch");
  await rejects(begin(db, b, act, "item", 0, { cur: "USD" }), "currency_mismatch");
  await rejects(begin(db, b, act, "item", 0, { status: "authorized" }), "payment_not_captured");
  await rejects(begin(db, b, act, "item", 0, { captured: 330000 }), "total_vs_captured_mismatch");
  await rejects(begin(db, b, act, "item", 5000), "gateway_ledger_mismatch");
});
await test("item prices not adding up to the captured amount block item refunds only", async () => {
  const { db, b, act } = await fresh();
  await db.query(`UPDATE booking_items SET price = 2400 WHERE id = $1`, [act]);
  await rejects(begin(db, b, act, "item"), "items_vs_captured_mismatch");
  assert.equal(Number((await begin(db, b, null, "full")).amount_minor), 330375);
});
await test("item from another booking is refused", async () => {
  const { db, b } = await fresh();
  const b2 = (await db.query(`INSERT INTO bookings (total_price, item_details) VALUES (100,'{"payment_id":"pay_T2"}') RETURNING id`)).rows[0].id;
  const other = (await db.query(`INSERT INTO booking_items (booking_id, price) VALUES ($1,100) RETURNING id`, [b2])).rows[0].id;
  await rejects(begin(db, b, other, "item"), "item_not_in_booking");
});
await test("legacy top-level payment_id column is used first when present", async () => {
  const db = new PGlite(); await db.exec(BASE);
  await db.exec(`ALTER TABLE public.bookings ADD COLUMN payment_id text`); await db.exec(migration);
  await db.query(`INSERT INTO profiles VALUES ($1,'admin')`, [ADMIN]);
  const b = (await db.query(`INSERT INTO bookings (total_price, payment_id, item_details) VALUES (10,'pay_TOP','{"payment_id":"pay_NESTED"}') RETURNING id`)).rows[0].id;
  const r = await begin(db, b, null, "full", 0, { pay: "pay_TOP", captured: 1000, order: null });
  assert.equal(r.razorpay_payment_id, "pay_TOP");
  await rejects(begin(db, b, null, "full", 0, { pay: "pay_NESTED", captured: 1000 }), "payment_mismatch|refund_in_progress");
});
await test("requested_by must be an admin", async () => {
  const { db, b, act } = await fresh();
  await rejects(begin(db, b, act, "item", 0, { by: USER }), "requester_not_admin");
});
await test("finish: Razorpay response not matching the stored request goes to review, ledger untouched", async () => {
  const { db, b, act } = await fresh();
  const r = await begin(db, b, act, "item");
  const f = await finish(db, r, { amount: 1 });
  assert.equal(f.status, "review");
  assert.equal((await db.query(`SELECT refund_status FROM bookings`)).rows[0].refund_status, "none");
  await rejects(begin(db, b, null, "full"), "refund_in_progress");
});
await test("finish is idempotent; rejected attempt allows retry with -r2 receipt", async () => {
  const { db, b, act } = await fresh();
  const r = await begin(db, b, act, "item");
  const f1 = await finish(db, r, { outcome: "rejected", reason: "BAD_REQUEST" });
  assert.equal(f1.status, "failed");
  assert.equal((await finish(db, r)).status, "failed");
  const r2 = await begin(db, b, act, "item");
  assert.equal(r2.razorpay_receipt, "yl-i-" + act.replaceAll("-", "") + "-r2");
  assert.equal(r2.attempt_no, 2);
  assert.ok(r2.razorpay_receipt.length <= 40);
});
await test("stored request body, amount and receipt cannot be altered", async () => {
  const { db, b, act } = await fresh();
  const r = await begin(db, b, act, "item");
  await rejects(db.query(`UPDATE booking_refunds SET razorpay_request_body='{}' WHERE id=$1`, [r.id]), "refund_request_immutable");
  await rejects(db.query(`UPDATE booking_refunds SET amount_minor=1 WHERE id=$1`, [r.id]), "refund_request_immutable");
  const h = (await db.query(`SELECT encode(sha256(convert_to(razorpay_request_body,'UTF8')),'hex') = razorpay_request_sha256 AS ok FROM booking_refunds`)).rows[0].ok;
  assert.equal(h, true);
});
await test("email tracking: claim once, failure allows retry, sent blocks resend", async () => {
  const { db, b, act } = await fresh();
  const r = await finish(db, await begin(db, b, act, "item"));
  const claim = () => db.query(`SELECT * FROM refund_email_claim($1,$2)`, [r.id, b]).then(x => x.rows[0]);
  const mark = (ok, err) => db.query(`SELECT * FROM refund_email_mark($1,$2,$3)`, [r.id, ok, err]).then(x => x.rows[0]);
  assert.equal((await claim()).email_status, "sending");
  assert.equal((await claim()).id, null);                       // in flight: second sender refused
  assert.equal((await mark(false, "SMTP 421")).email_status, "failed");
  const c2 = await claim(); assert.equal(c2.email_status, "sending"); assert.equal(c2.email_attempts, 2);
  const m = await mark(true, null); assert.equal(m.email_status, "sent"); assert.ok(m.refund_email_sent_at);
  assert.equal((await claim()).id, null);                       // already sent
  assert.equal((await db.query(`SELECT * FROM refund_email_claim($1,$2)`, [r.id, act])).rows[0].id, null); // wrong booking
});
await test("email cannot be claimed for a pending or failed refund", async () => {
  const { db, b, act } = await fresh();
  const r = await begin(db, b, act, "item");
  assert.equal((await db.query(`SELECT * FROM refund_email_claim($1,$2)`, [r.id, b])).rows[0].id, null);
});
await test("stale 'sending' claim (>10 min) can be re-claimed", async () => {
  const { db, b, act } = await fresh();
  const r = await finish(db, await begin(db, b, act, "item"));
  await db.query(`SELECT refund_email_claim($1,$2)`, [r.id, b]);
  await db.query(`ALTER TABLE booking_refunds DISABLE TRIGGER trg_booking_refunds_immutable`);
  await db.query(`UPDATE booking_refunds SET email_claimed_at = now() - interval '11 minutes'`);
  assert.equal((await db.query(`SELECT * FROM refund_email_claim($1,$2)`, [r.id, b])).rows[0].email_status, "sending");
});
await test("anon and authenticated cannot execute refund functions or write the ledger", async () => {
  const { db } = await fresh();
  const rows = (await db.query(`SELECT r.rolname, p.proname, has_function_privilege(r.rolname, p.oid, 'EXECUTE') AS x
    FROM pg_proc p CROSS JOIN (VALUES ('anon'),('authenticated'),('service_role')) r(rolname)
    WHERE p.pronamespace='public'::regnamespace AND p.proname LIKE 'refund_%'`)).rows;
  assert.equal(rows.length, 18);
  for (const row of rows) assert.equal(row.x, row.rolname === "service_role", `${row.rolname} ${row.proname}`);
  const t = (await db.query(`SELECT has_table_privilege('authenticated','public.booking_refunds','INSERT') i,
    has_table_privilege('authenticated','public.booking_refunds','UPDATE') u, has_table_privilege('anon','public.booking_refunds','SELECT') a`)).rows[0];
  assert.deepEqual(t, { i: false, u: false, a: false });
  await db.exec(`SET ROLE authenticated`);
  await rejects(db.query(`SELECT refund_begin(NULL,NULL,'full','x','captured',1,0,'INR',NULL,NULL)`), "permission denied");
});
await test("rollback removes everything and leaves bookings intact", async () => {
  const { db } = await fresh();
  await db.exec(rollback);
  assert.equal((await db.query(`SELECT to_regclass('public.booking_refunds') t`)).rows[0].t, null);
  assert.equal((await db.query(`SELECT count(*)::int n FROM bookings`)).rows[0].n, 1);
  assert.equal((await db.query(`SELECT count(*)::int n FROM information_schema.columns WHERE column_name='refund_status'`)).rows[0].n, 0);
});
console.log(`\n${passed} SQL tests passed${process.exitCode ? " (with failures)" : ""}`);
