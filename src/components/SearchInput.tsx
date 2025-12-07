import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fuzzySearchTours } from "@/lib/fuzzySearch";
import type { SearchResult } from "@/lib/fuzzySearch";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  cityFilter?: string;
}

const SearchInput = ({ placeholder = "Search...", className = "", autoFocus = false, cityFilter }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length >= 1) {
      const searchResults = fuzzySearchTours(searchQuery, 20, cityFilter);
      setResults(searchResults);
      setIsOpen(searchResults.length > 0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [searchQuery, cityFilter]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative w-full ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder={placeholder}
          className="pl-10 pr-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery.length >= 1 && setIsOpen(true)}
          autoFocus={autoFocus}
        />
        {searchQuery && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 rounded-full hover:bg-accent flex items-center justify-center"
            onClick={handleClear}
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Activity names suggestions dropdown */}
      {isOpen && searchQuery.length >= 1 && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto">
          <div className="p-2">
            <p className="text-xs text-muted-foreground px-3 py-1 mb-1">
              {results.length} {results.length === 1 ? 'activity' : 'activities'} found
            </p>
            {results.map((result, index) => (
              <div
                key={index}
                className="px-3 py-2.5 hover:bg-accent cursor-pointer rounded transition-colors border-b border-border/30 last:border-0"
                onClick={() => {
                  navigate(`/${result.tour.id}`);
                  setIsOpen(false);
                }}
              >
                <p 
                  className="text-sm font-medium"
                  dangerouslySetInnerHTML={{ __html: result.highlightedTitle }}
                />
                <p className="text-xs text-muted-foreground mt-0.5">{result.tour.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {isOpen && searchQuery.length >= 1 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 p-4">
          <p className="text-muted-foreground text-center text-sm">No activities found. Try different keywords.</p>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
