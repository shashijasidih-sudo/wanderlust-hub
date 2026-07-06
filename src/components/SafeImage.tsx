import { useState, ImgHTMLAttributes } from "react";

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
};

/**
 * Image component with:
 * - lazy loading & async decoding by default
 * - graceful fallback if src fails to load (broken links, 404s, offline images)
 * - preserves aspect ratio when width/height are supplied
 */
const SafeImage = ({
  src,
  alt = "",
  loading = "lazy",
  decoding = "async",
  fallback = FALLBACK,
  onError,
  ...rest
}: Props) => {
  const [errored, setErrored] = useState(false);
  return (
    <img
      {...rest}
      src={errored || !src ? fallback : src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={(e) => {
        if (!errored) setErrored(true);
        onError?.(e);
      }}
    />
  );
};

export default SafeImage;
