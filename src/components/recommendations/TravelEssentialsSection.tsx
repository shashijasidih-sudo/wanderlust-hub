import SafeImage from "@/components/SafeImage";
import RecoSection from "./RecoSection";
import { DestinationKey, pickExactly } from "./recoUtils";
import { DESTINATION_ESSENTIAL, GENERAL_ESSENTIALS, EssentialArticle } from "./recoData";

interface Props {
  destination: DestinationKey | null;
}

const TravelEssentialsSection = ({ destination }: Props) => {
  const destArticle = destination ? DESTINATION_ESSENTIAL[destination] : undefined;
  const picks = pickExactly<EssentialArticle>(
    [destArticle ? [destArticle] : [], GENERAL_ESSENTIALS],
    new Set<string>(),
    4
  );
  if (picks.length === 0) return null;

  return (
    <RecoSection heading="Travel Essentials" subtitle="Everything you'll need before your trip.">
      {picks.map((a) => (
        <article
          key={a.slug}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
        >
          <a
            href={a.slug}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block aspect-[4/3] overflow-hidden bg-muted"
          >
            <SafeImage
              src={a.image}
              alt={a.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </a>
          <div className="flex flex-1 flex-col gap-1.5 p-3">
            <h3 className="line-clamp-2 text-sm font-semibold leading-snug md:text-base">
              <a
                href={a.slug}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-primary"
              >
                {a.title}
              </a>
            </h3>
            <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{a.description}</p>
          </div>
        </article>
      ))}
    </RecoSection>
  );
};

export default TravelEssentialsSection;
