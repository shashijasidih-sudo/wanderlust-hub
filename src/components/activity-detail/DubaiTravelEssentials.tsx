import SafeImage from "@/components/SafeImage";

interface Essential {
  title: string;
  desc: string;
  url: string;
  img: string;
}

const ESSENTIALS: Essential[] = [
  {
    title: "Dubai Summer Essentials",
    desc: "Beat the desert heat — breathable layers, sun protection and hydration picks for Dubai days.",
    url: "https://barnip.com/packing-lists/by-destination/dubai/dubai-summer-essentials",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=70",
  },
  {
    title: "Best Anti-Theft Backpacks",
    desc: "Slash-resistant daypacks that work well in Dubai Mall, souks and metro crowds.",
    url: "https://barnip.com/travel-bags/backpacks/anti-theft-backpacks",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=70",
  },
  {
    title: "Safety Essentials",
    desc: "Practical safety picks for women travellers exploring Dubai solo or with family.",
    url: "https://barnip.com/packing-lists/by-traveler/women-travelers/women-travel-safety-essentials",
    img: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=800&auto=format&fit=crop&q=70",
  },
  {
    title: "Best Packing Cubes",
    desc: "Keep outfits, chargers and documents organised across a Dubai–Abu Dhabi itinerary.",
    url: "https://barnip.com/travel-bags/organizers/packing-cubes",
    img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&auto=format&fit=crop&q=70",
  },
];

const DubaiTravelEssentials = () => (
  <section className="container mx-auto px-4 py-10">
    <header className="mb-6 max-w-3xl">
      <h2 className="text-2xl font-bold md:text-3xl">
        Dubai Travel Essentials <span className="text-primary">(10% OFF)</span>
      </h2>
      <p className="mt-2 text-muted-foreground">
        Handy gear and packing guides to get your Dubai trip sorted before you fly.
      </p>
    </header>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ESSENTIALS.map((e) => (
        <a
          key={e.url}
          href={e.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
        >
          <div className="block aspect-[4/3] overflow-hidden bg-muted">
            <SafeImage
              src={e.img}
              alt={e.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug group-hover:text-primary">
              {e.title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{e.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default DubaiTravelEssentials;
