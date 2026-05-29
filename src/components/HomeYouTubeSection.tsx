import { Play } from "lucide-react";
import LiteYouTubeEmbed from "./LiteYouTubeEmbed";

const videos = [
  { name: "Koh Samui", id: "J5p0uyyoEjw", url: "https://youtu.be/J5p0uyyoEjw" },
  { name: "Bangkok", id: "ajcdbZHNmeM", url: "https://youtu.be/ajcdbZHNmeM" },
  { name: "Dubai", id: "_bdnHy5-p-U", url: "https://youtube.com/shorts/_bdnHy5-p-U?feature=share" },
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
              <LiteYouTubeEmbed id={v.id} title={`${v.name} — Watch on YouTube`} aspect={177.78} />
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
