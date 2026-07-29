import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";
import { thailandGuides } from "@/data/thailandGuides";
import { singaporeGuides } from "@/data/singaporeGuides";
import { dubaiGuides } from "@/data/dubaiGuides";
import RecoSection from "./RecoSection";
import { DestinationKey, DESTINATION_LABELS, pickExactly } from "./recoUtils";

interface Props {
  destination: DestinationKey | null;
}

interface GuideCard {
  slug: string;
  title: string;
  image: string;
  description?: string;
}

const asCards = (list: any[]): GuideCard[] =>
  list.map((g) => ({ slug: g.slug, title: g.title, image: g.image, description: g.description }));

const TravelGuidesSection = ({ destination }: Props) => {
  const singapore = asCards(singaporeGuides as any[]);
  const thailand = asCards(thailandGuides as any[]);
  const dubai = asCards(dubaiGuides as any[]);

  const base =
    destination === "singapore" ? singapore : destination === "dubai" ? dubai : thailand;

  const label = destination ? DESTINATION_LABELS[destination] : "";
  const cityMatched = label
    ? base.filter((g) => `${g.title} ${g.description ?? ""}`.toLowerCase().includes(label.toLowerCase()))
    : [];

  const picks = pickExactly<GuideCard>(
    [cityMatched, base, thailand, singapore],
    new Set<string>(),
    4
  );
  if (picks.length === 0) return null;

  return (
    <RecoSection heading="Travel Guides" subtitle="Plan your journey like a local.">
      {picks.map((g) => (
        <article
          key={g.slug + g.title}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
        >
          <Link to={g.slug} className="block aspect-[16/10] overflow-hidden bg-muted">
            <SafeImage
              src={g.image}
              alt={g.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="line-clamp-2 text-sm font-semibold leading-snug md:text-base">
              <Link to={g.slug} className="hover:text-primary">
                {g.title}
              </Link>
            </h3>
            <div className="mt-auto pt-2">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link to={g.slug}>Read Guide</Link>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </RecoSection>
  );
};

export default TravelGuidesSection;
