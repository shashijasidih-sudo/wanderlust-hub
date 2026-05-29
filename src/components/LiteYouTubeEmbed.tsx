import { useState } from "react";
import { Play } from "lucide-react";

interface LiteYouTubeEmbedProps {
  id: string;
  title: string;
  /** aspect ratio padding-bottom in % (default 56.25 = 16:9). Use 177.78 for vertical Shorts. */
  aspect?: number;
  className?: string;
}

/**
 * Thumbnail-first YouTube embed.
 * Renders only an image + play button until clicked, then mounts the real iframe.
 * Saves ~500KB of YouTube JS on initial page load.
 */
const LiteYouTubeEmbed = ({ id, title, aspect = 56.25, className = "" }: LiteYouTubeEmbedProps) => {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl shadow-lg bg-black ${className}`}
      style={{ paddingBottom: `${aspect}%` }}
    >
      {active ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
          className="absolute inset-0 w-full h-full group cursor-pointer"
        >
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 shadow-xl transition-transform group-hover:scale-110">
              <Play className="h-7 w-7 text-white fill-white ml-1" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export default LiteYouTubeEmbed;
