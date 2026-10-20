import { useEffect, useRef, useState, ImgHTMLAttributes } from "react";
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
 * - no visible skeleton, shimmer, or blur while images load
 * - smooth fade-in once loaded
 * - graceful fallback if src fails to load (broken links, 404s, offline images)
 * - preserves aspect ratio when width/height are supplied
 */
const ImageWithLoadingState = ({
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
  const imageRef = useRef<HTMLImageElement>(null);
  const imageSrc = errored || !src ? fallback : optimizeSrc(src);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    let active = true;
    const reveal = async () => {
      try { await image.decode(); } catch { /* onError handles unavailable sources. */ }
      if (active && image.complete && image.naturalWidth > 0) setLoaded(true);
    };
    image.addEventListener("load", reveal);
    if (image.complete && image.naturalWidth > 0) void reveal();
    return () => {
      active = false;
      image.removeEventListener("load", reveal);
    };
  }, [imageSrc, rest.srcSet]);

  return (
    <img
      {...rest}
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : rest.fetchPriority}
      decoding={decoding}
      className={cn(
        "max-w-full transition-opacity duration-300 ease-out motion-reduce:transition-none",
        loaded || priority || loading === "eager" ? "opacity-100" : "opacity-0",
        className
      )}
      onLoad={(e) => {
        onLoad?.(e);
      }}
      onError={(e) => {
        if (!errored) {
          setLoaded(false);
          setErrored(true);
        }
        onError?.(e);
      }}
    />
  );
};

// A changed source starts a fresh decode cycle instead of flashing the old image.
const SafeImage = (props: Props) => (
  <ImageWithLoadingState key={`${props.src}|${props.srcSet}|${props.fallback}`} {...props} />
);

export default SafeImage;
