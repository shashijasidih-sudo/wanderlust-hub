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
    <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base ${textClass}`}>
      {items.map((item, index) => (
        <div
          key={item}
          className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg ${chipClass} ${
            index === 4 ? "w-full flex-none" : "flex-1 basis-[calc(50%-0.25rem)] sm:basis-[calc(50%-0.75rem)] min-w-0"
          }`}
        >
          <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </div>
          <span className="leading-tight">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TransferHeroBadges;
