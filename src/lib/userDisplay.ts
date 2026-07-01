import type { AppUser } from "./auth";

export function getDisplayName(user: Pick<AppUser, "email" | "full_name"> | null | undefined): string {
  if (!user) return "";
  const name = user.full_name?.trim();
  if (name) return name;
  const email = user.email || "";
  const prefix = email.split("@")[0] || "";
  if (!prefix) return "My Account";
  // Prettify: replace separators, title case
  return prefix
    .replace(/[._-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}
