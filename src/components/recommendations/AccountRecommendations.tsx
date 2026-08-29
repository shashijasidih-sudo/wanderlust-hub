import { Link } from "react-router-dom";
import SafeImage from "@/components/SafeImage";
import RecoSection from "./RecoSection";
import TravelEssentialsSection from "./TravelEssentialsSection";
import { krabiBlogs } from "@/data/krabiDestinationGuides";
import { singaporeBlogs } from "@/data/singaporeDestinationGuides";
import { dubaiGuides } from "@/data/dubaiGuides";
import { japanBlogs } from "@/data/japanDestinationGuides";

import singaporeImg from "@/assets/singapore-city-tour.jpg";
import dubaiImg from "@/assets/dubai-skyline-night-1.jpg";
import thailandImg from "@/assets/city-krabi.jpg";
import kohSamuiImg from "@/assets/city-kohsamui.jpg";

interface GuideCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

/** 4 destination guide articles — one per destination. */
const MUST_SEE: GuideCard[] = [
  {
    title: krabiBlogs[0].title,
    description: krabiBlogs[0].description,
    image: krabiBlogs[0].image,
    link: krabiBlogs[0].link,
  },
  {
    title: singaporeBlogs[1].title,
    description: singaporeBlogs[1].description,
    image: singaporeBlogs[1].image,
    link: singaporeBlogs[1].link,
  },
  {
    title: dubaiGuides[0].title,
    description: dubaiGuides[0].description,
    image: dubaiGuides[0].image,
    link: dubaiGuides[0].slug,
  },
  {
    title: japanBlogs[0].title,
    description: japanBlogs[0].description,
    image: japanBlogs[0].image,
    link: japanBlogs[0].link,
  },
];

interface ExploreCard {
  title: string;
  description: string;
  image: string;
  link: string;
  badge: string;
}

const ACTIVITIES_TRANSFERS: ExploreCard[] = [
  {
    title: "Singapore Activities & Transfers",
    description: "Universal Studios, Gardens by the Bay, Night Safari and Changi airport pickups.",
    image: singaporeImg,
    link: "/singapore/things-to-do/",
    badge: "Singapore",
  },
  {
    title: "Dubai Activities & Transfers",
    description: "Desert safaris, Burj Khalifa, dhow cruises and DXB airport transfers by zone.",
    image: dubaiImg,
    link: "/dubai/",
    badge: "Dubai",
  },
  {
    title: "Thailand Activities & Transfers",
    description: "Island tours, city sightseeing and airport transfers across Bangkok, Phuket, Krabi and more.",
    image: thailandImg,
    link: "/thailand/",
    badge: "Thailand",
  },
  {
    title: "Koh Samui Activities & Transfers",
    description: "Full Moon Party, island hopping, Ang Thong marine park and Samui transfers.",
    image: kohSamuiImg,
    link: "/thailand/koh-samui/",
    badge: "Koh Samui",
  },
];

const InternalCard = ({ item }: { item: GuideCard }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
    <Link to={item.link} className="block aspect-[4/3] overflow-hidden bg-muted">
      <SafeImage
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition group-hover:scale-105"
      />
    </Link>
    <div className="flex flex-1 flex-col gap-1.5 p-3">
      <h3 className="line-clamp-2 text-sm font-semibold leading-snug md:text-base">
        <Link to={item.link} className="hover:text-primary">
          {item.title}
        </Link>
      </h3>
      <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{item.description}</p>
    </div>
  </article>
);

const AccountRecommendations = () => {
  return (
    <div className="bg-muted/30">
      {/* 1. Destination guide articles */}
      <RecoSection
        heading="You Should Not Miss These"
        subtitle="Handpicked travel guides from our most-loved destinations."
      >
        {MUST_SEE.map((g) => (
          <InternalCard key={g.link} item={g} />
        ))}
      </RecoSection>

      {/* 2. Travel essentials — same picks as blog pages */}
      <TravelEssentialsSection destination={null} />

      {/* 3. Activities & transfers by destination */}
      <RecoSection
        heading="Activities & Transfers"
        subtitle="Top experiences and transfers across Singapore, Dubai, Thailand and Koh Samui."
      >
        {ACTIVITIES_TRANSFERS.map((c) => (
          <article
            key={c.link}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
          >
            <Link to={c.link} className="relative block aspect-[4/3] overflow-hidden bg-muted">
              <SafeImage
                src={c.image}
                alt={c.title}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-background/90 px-2.5 py-0.5 text-[10px] font-semibold text-foreground md:text-xs">
                {c.badge}
              </span>
            </Link>
            <div className="flex flex-1 flex-col gap-1.5 p-3">
              <h3 className="line-clamp-2 text-sm font-semibold leading-snug md:text-base">
                <Link to={c.link} className="hover:text-primary">
                  {c.title}
                </Link>
              </h3>
              <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{c.description}</p>
            </div>
          </article>
        ))}
      </RecoSection>
    </div>
  );
};

export default AccountRecommendations;
