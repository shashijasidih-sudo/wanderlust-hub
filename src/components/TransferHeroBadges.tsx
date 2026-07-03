import { Check } from "lucide-react";

interface TransferHeroBadgesProps {
  cityLabel?: string;
}

const TransferHeroBadges = ({ cityLabel = "Hotel" }: TransferHeroBadgesProps) => {
  const items = [
    "Private Transfer",
    "Instant Confirmation",
    "English-speaking Driver",
    `Pickup from Any ${cityLabel}`,
    "Book at least 48 hours before departure",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90 text-sm md:text-base">
      {items.map((item, index) => (
        <div
          key={item}
          className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg ${
            index === 4 ? "sm:col-span-2" : ""
          }`}
        >
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TransferHeroBadges;
