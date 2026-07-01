import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";
import { toursData } from "@/data/tourData";
import { TOUR_ROUTES } from "@/data/tourRoutes";
import { getCityTransfers } from "@/data/cityTransfersData";
import RelatedArticles from "@/components/RelatedArticles";
import { ArrowRight, MapPin, Star } from "lucide-react";

interface Props {
  city?: string;
  excludeSlug?: string;
}

const BookingRecommendations = ({ city, excludeSlug }: Props) => {
  const { formatPrice } = useCurrency();
  const cityKey = (city || "").toLowerCase().trim();

  // Related Activities — same city, exclude booked
  const activities = Object.values(toursData)
    .filter((t) => {
      if (!t) return false;
      if ((t.city || "").toLowerCase().trim() !== cityKey) return false;
      const route = TOUR_ROUTES[t.id];
      if (!route) return false;
      if (excludeSlug && (route === `/${excludeSlug}` || route.endsWith(`/${excludeSlug}`))) return false;
      if (t.pricePerVehicle) return false; // skip transfers
      return true;
    })
    .slice(0, 4);

  // Related Transfers
  const transferData = getCityTransfers(cityKey);
  const transfers = transferData?.transfers.slice(0, 4) || [];

  if (activities.length === 0 && transfers.length === 0) {
    // Still render blogs
    return (
      <section className="container mx-auto px-4 md:px-6 py-8">
        <RelatedArticles city={cityKey} count={4} title="Destination Blogs" />
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 md:px-6 py-8 space-y-14">
      {/* Related Activities */}
      {activities.length > 0 && (
        <div>
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              You may also like
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Related Activities in {transferData?.city || city}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((t) => {
              const route = TOUR_ROUTES[t.id];
              const img = t.heroImages?.[0]?.src;
              return (
                <Link
                  key={t.id}
                  to={route}
                  className="group block"
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden bg-muted">
                      {img && (
                        <img
                          src={img}
                          alt={t.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{t.location}</span>
                      </div>
                      <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {t.title}
                      </h3>
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">from</p>
                          <p className="text-lg font-bold text-primary">
                            {formatPrice(t.basePrice)}
                          </p>
                        </div>
                        {t.rating && (
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{t.rating}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Transfers */}
      {transfers.length > 0 && (
        <div>
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              Getting around
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Related Transfers in {transferData?.city || city}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {transfers.map((t) => (
              <Link key={t.slug} to={t.slug} className="group block">
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={t.img}
                      alt={t.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{t.desc}</p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-lg font-bold text-primary">{formatPrice(t.price)}</p>
                      <Button size="sm" variant="outline">
                        Book <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Destination Blogs — reuse RelatedArticles with count=4 */}
      <RelatedArticles city={cityKey} count={4} title="Destination Blogs" />
    </section>
  );
};

export default BookingRecommendations;
