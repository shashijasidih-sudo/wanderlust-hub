import { Check } from "lucide-react";

interface TransferHeroBadgesProps {
  cityLabel?: string;
  variant?: "dark" | "light";
}

const TransferHeroBadges = ({ cityLabel = "Hotel", variant = "dark" }: TransferHeroBadgesProps) => {
  const items = [
    "Private Transfer",
    "Instant Confirmation",
    "English-speaking Driver",
    `Pickup from Any ${cityLabel}`,
    "Book at least 48 hours before departure",
  ];

  const isLight = variant === "light";
  const textClass = isLight ? "text-foreground" : "text-white/90";
  const chipClass = isLight
    ? "bg-primary/5 border border-primary/15"
    : "bg-white/10 backdrop-blur-sm";

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 text-sm md:text-base ${textClass}`}>
      {items.map((item, index) => (
        <div
          key={item}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${chipClass} ${
            index === 4 ? "w-full flex-none" : "flex-1 basis-[calc(50%-0.375rem)] sm:basis-[calc(50%-0.75rem)] min-w-0"
          }`}
        >
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span className="leading-tight">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TransferHeroBadges;
