import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fuzzySearchTours, getSearchSuggestions } from "@/lib/fuzzySearch";
import SearchResults from "./SearchResults";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

const SearchInput = ({ 
  placeholder = "Search destinations, cities, activities...", 
  className = "",
  autoFocus = false
}: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof fuzzySearchTours>>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const searchResults = fuzzySearchTours(searchQuery, 10);
      const searchSuggestions = getSearchSuggestions(searchQuery, 5);
      
      setResults(searchResults);
      setSuggestions(searchSuggestions);
      setIsOpen(true);
    } else {
      setResults([]);
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  // Close on click outside
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

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder={placeholder}
          className="pl-10 pr-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery.length >= 2 && setIsOpen(true)}
          autoFocus={autoFocus}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Suggestions */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50">
          <div className="p-2">
            <p className="text-xs text-muted-foreground px-3 py-1">Suggestions</p>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 hover:bg-accent rounded text-sm"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Search className="h-3 w-3 inline mr-2 text-muted-foreground" />
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {isOpen && results.length > 0 && suggestions.length === 0 && (
        <SearchResults results={results} onClose={() => setIsOpen(false)} />
      )}

      {/* No results */}
      {isOpen && searchQuery.length >= 2 && results.length === 0 && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 p-4">
          <p className="text-muted-foreground text-center text-sm">
            No results found for "{searchQuery}". Try different keywords like "Phi Phi", "Bangkok", "Island", etc.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
