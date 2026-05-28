import { Play } from "lucide-react";

const videos = [
  {
    name: "Koh Samui",
    url: "https://youtu.be/J5p0uyyoEjw",
    embed: "https://www.youtube.com/embed/J5p0uyyoEjw?rel=0&modestbranding=1",
  },
  {
    name: "Bangkok",
    url: "https://youtu.be/ajcdbZHNmeM",
    embed: "https://www.youtube.com/embed/ajcdbZHNmeM?rel=0&modestbranding=1",
  },
  {
    name: "Dubai",
    url: "https://youtube.com/shorts/_bdnHy5-p-U?feature=share",
    embed: "https://www.youtube.com/embed/_bdnHy5-p-U?rel=0&modestbranding=1",
  },
];

const HomeYouTubeSection = () => {
  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <Play className="h-4 w-4 fill-primary" /> Watch on YouTube
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Travel Stories from Our Destinations
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Real glimpses of Koh Samui, Bangkok and Dubai — straight from our travellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {videos.map((v) => (
            <div key={v.name} className="flex flex-col">
              <div
                className="relative w-full overflow-hidden rounded-2xl shadow-card bg-black"
                style={{ paddingBottom: "177.78%" }}
              >
                <iframe
                  src={v.embed}
                  title={`${v.name} — Watch on YouTube`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="text-center mt-3">
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  {v.name}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeYouTubeSection;
