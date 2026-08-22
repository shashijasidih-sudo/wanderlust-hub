/**
 * Renders the "Tour Itinerary" block for Pattaya activity pages,
 * driven by the verbatim content in src/data/pattayaSheetContent.ts.
 */
import { pattayaSheetContent } from "@/data/pattayaSheetContent";

interface Props {
  tourKey: string;
}

const PattayaTourItinerary = ({ tourKey }: Props) => {
  const content = pattayaSheetContent[tourKey];
  if (!content?.itinerary?.length) return null;

  return (
    <div className="min-w-0">
      <h3 className="text-sm md:text-base font-semibold mb-2 text-foreground">Tour Itinerary</h3>
      <ol className="space-y-2">
        {content.itinerary.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="text-sm md:text-base text-muted-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PattayaTourItinerary;
