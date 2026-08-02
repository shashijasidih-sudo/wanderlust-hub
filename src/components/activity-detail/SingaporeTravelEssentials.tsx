import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";

interface Essential {
  title: string;
  desc: string;
  url: string;
  img: string;
}

const ESSENTIALS: Essential[] = [
  {
    title: "Singapore Travel Kit",
    desc: "Everything to pack for hot, humid Singapore days — from light layers to sun protection.",
    url: "https://barnip.com/packing-lists/by-destination/dubai/dubai-summer-essentials",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop",
  },
  {
    title: "Best Anti-Theft Backpacks",
    desc: "Secure, slash-resistant daypacks ideal for crowded attractions and MRT rides.",
    url: "https://barnip.com/travel-bags/backpacks/anti-theft-backpacks",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&sat=-30",
  },
  {
    title: "Safety Essentials",
    desc: "Practical safety picks for women travellers exploring a new city solo or with family.",
    url: "https://barnip.com/packing-lists/by-traveler/women-travelers/women-travel-safety-essentials",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
  },
  {
    title: "Best Packing Cubes",
    desc: "Keep outfits, chargers and documents organised across a multi-city trip.",
    img: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=800&auto=format&fit=crop",
    url: "https://barnip.com/travel-bags/organizers/packing-cubes",
  },
];

const SingaporeTravelEssentials = () => (
  <section className="container mx-auto px-4 py-10">
    <header className="mb-6 max-w-3xl">
      <h2 className="text-2xl font-bold md:text-3xl">Singapore Travel Essentials</h2>
      <p className="mt-2 text-muted-foreground">
        Handy gear and packing guides to get your Singapore trip sorted before you fly.
      </p>
    </header>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ESSENTIALS.map((e) => (
        <article
          key={e.url}
          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
        >
          <a
            href={e.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block aspect-[4/3] overflow-hidden bg-muted"
          >
            <SafeImage
              src={e.img}
              alt={e.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </a>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug">
              <a href={e.url} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary">
                {e.title}
              </a>
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{e.desc}</p>
            <div className="mt-auto pt-2">
              <Button asChild size="sm" variant="outline" className="w-full">
                <a href={e.url} target="_blank" rel="noopener noreferrer nofollow">
                  Read Guide <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SingaporeTravelEssentials;
