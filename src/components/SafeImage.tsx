import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";


const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
       <defs>
         <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
           <stop offset='0%' stop-color='#e6f0ea'/>
           <stop offset='100%' stop-color='#c7dcd0'/>
         </linearGradient>
       </defs>
       <rect width='400' height='300' fill='url(#g)'/>
       <text x='50%' y='50%' text-anchor='middle' dy='.35em'
             font-family='system-ui,sans-serif' font-size='16' fill='#5a7d6a'>
         Yellodae
       </text>
     </svg>`
  );

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
  /** Mark above-the-fold / LCP candidate images: eager + fetchpriority=high */
  priority?: boolean;
};

/**
 * Ask remote image CDNs for modern formats (AVIF/WebP) via content negotiation.
 * Purely a URL-parameter optimization — the rendered image is unchanged.
 */
const optimizeSrc = (src?: string) => {
  if (!src || typeof src !== "string") return src;
  if (src.startsWith("data:") || src.startsWith("blob:")) return src;
  if (src.includes("images.unsplash.com")) {
    const [base, query = ""] = src.split("?");
    const params = new URLSearchParams(query);
    if (!params.has("auto")) params.set("auto", "format");
    if (!params.has("fm")) params.set("fm", "webp");
    if (!params.has("q")) params.set("q", "72");
    return `${base}?${params.toString()}`;
  }
  return src;
};

/**
 * Image component with:
 * - lazy loading & async decoding by default
 * - skeleton shimmer placeholder until the image is decoded
 * - smooth fade-in once loaded
 * - graceful fallback if src fails to load (broken links, 404s, offline images)
 * - preserves aspect ratio when width/height are supplied
 */
const SafeImage = ({
  src,
  alt = "",
  loading,
  decoding = "async",
  priority = false,
  fallback = FALLBACK,
  onError,
  onLoad,
  className,
  ...rest
}: Props) => {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      {...rest}
      src={errored || !src ? fallback : optimizeSrc(src)}
      alt={alt}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : rest.fetchPriority}
      decoding={decoding}
      className={cn(
        "max-w-full transition-[opacity,filter] duration-500 ease-out",
        loaded ? "opacity-100 blur-0" : "bg-muted animate-pulse opacity-70 blur-[2px]",
        className
      )}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={(e) => {
        if (!errored) setErrored(true);
        setLoaded(true);
        onError?.(e);
      }}
    />
  );
};


export default SafeImage;
