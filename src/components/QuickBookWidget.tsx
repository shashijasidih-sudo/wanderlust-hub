import { useNavigate } from "react-router-dom";
import { Star, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickBookItem {
  title: string;
  price: number;
  image: string;
  slug: string;
  rating: number;
  badge?: string;
}

interface QuickBookWidgetProps {
  title: string;
  items: QuickBookItem[];
}

const QuickBookWidget = ({ title, items }: QuickBookWidgetProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="h-5 w-5 text-accent" />
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex-shrink-0 w-52 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all cursor-pointer group overflow-hidden border border-border"
            onClick={() => navigate(item.slug.startsWith("/") ? item.slug : `/${item.slug}`)}
          >
            <div className="relative h-28 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {item.badge && (
                <span className="absolute top-1.5 left-1.5 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-xs font-semibold text-foreground line-clamp-2 mb-1.5 leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <span className="text-xs font-medium text-foreground">{item.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-primary">₹{item.price.toLocaleString("en-IN")}</span>
                <Button
                  size="sm"
                  className="h-7 px-2 text-[10px] bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.slug.startsWith("/") ? item.slug : `/${item.slug}`);
                  }}
                >
                  Book <ArrowRight className="h-3 w-3 ml-0.5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickBookWidget;
