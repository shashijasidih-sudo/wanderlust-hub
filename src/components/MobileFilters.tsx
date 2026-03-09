import { useState } from "react";
import { SlidersHorizontal, Tag } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileFiltersProps {
  priceRange: number[];
  onPriceRangeChange: (value: number[]) => void;
  minPrice: number;
  maxPrice: number;
  categories: string[];
  selectedCategories?: string[];
  onCategoryChange?: (category: string) => void;
}

const MobileFilters = ({
  priceRange,
  onPriceRangeChange,
  minPrice,
  maxPrice,
  categories,
  selectedCategories = [],
  onCategoryChange,
}: MobileFiltersProps) => {
  const [priceOpen, setPriceOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <div className="flex gap-2 lg:hidden mb-4">
      <Sheet open={priceOpen} onOpenChange={setPriceOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Price Filter
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="bg-card border-t">
          <SheetHeader>
            <SheetTitle>Price Filter</SheetTitle>
          </SheetHeader>
          <div className="py-6 px-2">
            <Slider
              value={priceRange}
              onValueChange={onPriceRangeChange}
              min={minPrice}
              max={maxPrice}
              step={100}
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground text-center">
              {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
            </p>
            <Button 
              className="w-full mt-4" 
              onClick={() => setPriceOpen(false)}
            >
              Apply Filter
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={categoryOpen} onOpenChange={setCategoryOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Categories
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="bg-card border-t max-h-[70vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Tour Category</SheetTitle>
          </SheetHeader>
          <div className="py-4 space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox 
                  id={`mobile-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryChange?.(category)}
                />
                <label htmlFor={`mobile-${category}`} className="text-sm cursor-pointer">
                  {category}
                </label>
              </div>
            ))}
            <Button 
              className="w-full mt-4" 
              onClick={() => setCategoryOpen(false)}
            >
              Apply Filter
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilters;
