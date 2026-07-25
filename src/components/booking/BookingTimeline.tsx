import { Check, Circle } from "lucide-react";

interface Props {
  status: string;
  hasVoucher?: boolean;
  travelDate?: string | null;
}

const BookingTimeline = ({ status, hasVoucher, travelDate }: Props) => {
  const now = new Date();
  const travel = travelDate ? new Date(travelDate) : null;
  const isCancelled = status === "cancelled";
  const isCompleted = status === "completed" || (travel && travel < now && !isCancelled);
  const isUpcoming = !!(travel && travel > now && !isCancelled);

  const steps = [
    { key: "confirmed", label: "Confirmed", done: !isCancelled },
    { key: "voucher", label: "Voucher Sent", done: !!hasVoucher || !isCancelled },
    { key: "upcoming", label: "Upcoming", done: isUpcoming || isCompleted },
    { key: "completed", label: "Completed", done: isCompleted },
  ];

  return (
    <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2">
      {steps.map((s, i) => (
        <div key={s.key} className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className={`h-6 w-6 rounded-full flex items-center justify-center border ${s.done ? "bg-primary border-primary text-primary-foreground" : "bg-muted border-muted-foreground/20 text-muted-foreground"}`}>
            {s.done ? <Check className="h-3.5 w-3.5" /> : <Circle className="h-2 w-2" />}
          </div>
          <span className={`text-xs ${s.done ? "font-medium" : "text-muted-foreground"}`}>{s.label}</span>
          {i < steps.length - 1 && <div className={`h-px w-6 sm:w-10 ${s.done ? "bg-primary" : "bg-muted"}`} />}
        </div>
      ))}
    </div>
  );
};

export default BookingTimeline;
