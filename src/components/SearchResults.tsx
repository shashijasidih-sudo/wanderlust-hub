import { SearchResult } from "@/lib/fuzzySearch";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

const SearchResults = ({ results, onClose }: SearchResultsProps) => {
  const navigate = useNavigate();

  const handleResultClick = (tourId: string) => {
    navigate(`/${tourId}`);
    onClose();
  };

  if (results.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 p-4">
        <p className="text-muted-foreground text-center">No results found. Try different keywords.</p>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 max-h-[500px] overflow-y-auto">
      <div className="p-2">
        <p className="text-sm text-muted-foreground px-3 py-2">
          Found {results.length} {results.length === 1 ? 'result' : 'results'}
        </p>
        {results.map((result, index) => (
          <Card 
            key={result.tour.id}
            className="mb-2 cursor-pointer hover:bg-accent transition-colors"
            onClick={() => handleResultClick(result.tour.id)}
          >
            <CardContent className="p-3">
              <div className="flex gap-3">
                {result.tour.heroImages?.[0] && (
                  <img 
                    src={result.tour.heroImages[0].src} 
                    alt={result.tour.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h3 
                    className="font-semibold text-sm mb-1 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: result.highlightedTitle }}
                  />
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <MapPin className="h-3 w-3" />
                    <span>{result.tour.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{result.tour.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{result.tour.duration}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      ₹{result.tour.basePrice.toLocaleString()}
                    </Badge>
                  </div>
                </div>
              </div>
              {result.matchedFields.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {result.matchedFields.slice(0, 3).map((field, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {field.replace(/-/g, ' ')}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
