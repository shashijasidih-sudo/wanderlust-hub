import { Star, ExternalLink } from "lucide-react";

interface Props {
  className?: string;
  compact?: boolean;
}

const GoogleReviewsBadge = ({ className = "", compact = false }: Props) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href="https://www.google.com/search?q=Yellodae+Trails&kgmid=/g/11ynkbpnw2#lrd=0x0:0x0,1,,,"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See Yellodae Trails Google Reviews"
        className={`group flex items-center gap-3 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border ${
          compact ? "px-4 py-2.5" : "px-6 md:px-8 py-4 md:py-5 gap-4"
        }`}
      >
        <svg viewBox="0 0 24 24" className={compact ? "h-7 w-7 shrink-0" : "h-9 w-9 md:h-10 md:w-10 shrink-0"}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div className="flex flex-col">
          <span className={compact ? "text-xs font-semibold text-foreground" : "text-sm font-semibold text-foreground"}>
            Google Reviews
          </span>
          <div className="flex items-center gap-1.5">
            <span className={compact ? "text-lg font-bold text-foreground" : "text-2xl font-bold text-foreground"}>5.0</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={compact ? "h-3 w-3 fill-accent text-accent" : "h-4 w-4 fill-accent text-accent"} />
              ))}
            </div>
          </div>
          {!compact && <span className="text-xs text-muted-foreground">Based on Google Reviews</span>}
        </div>
        <div className={`flex items-center gap-1 text-primary group-hover:underline ${compact ? "ml-2 text-xs" : "ml-3 text-sm"}`}>
          See reviews
          <ExternalLink className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
        </div>
      </a>
    </div>
  );
};

export default GoogleReviewsBadge;
