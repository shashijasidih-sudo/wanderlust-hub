import { toursData } from "@/data/tourData";

export interface Activity {
  title: string;
  price: number;
  image: string;
  slug: string;
}

export interface SearchResult {
  type: 'city' | 'activity' | 'destination';
  title: string;
  path: string;
  city?: string;
}

// Define all cities and their activities
const cityActivities: Record<string, Activity[]> = {
  bangkok: [
    { title: "Bangkok's Iconic Three Temple Tour with Grand Palace and Canal Tour", price: 10020, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/three-temples-tour" },
    { title: "Bangkok's Famous Three Temple Wat Arun, Wat Pho, and Wat Traimit Private City and Cultural Tour", price: 10020, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/wat-arun-pho-traimit" },
    { title: "Bangkok City Tour by Boat from Meeting Point", price: 3700, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/city-boat-tour" },
    { title: "Bangkok City and Temple Tours with Gems Gallery", price: 1800, image: "https://images.unsplash.com/photo-1563492065567-7a0b2e7d1a3e?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/city-gems-gallery" },
    { title: "Double World Heritage Bangkok City Tour: Sunset at Wat Arun and Chinatown Street Food Experience (Join-In)", price: 5900, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/wat-arun-chinatown" },
    { title: "Bangkok City and Temple Tour with Golden Buddha, Marble Temple, Mini Reclining Buddha, and Gems Gallery", price: 2000, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/golden-marble-buddha" },
    { title: "The Best of Bangkok: Royal Grand Palace, Emerald Buddha and Reclining Buddha", price: 2300, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/grand-palace-emerald" },
    { title: "All Day Buffet at Baiyoke Floating Market on 75th floor", price: 2200, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/baiyoke-buffet" },
    { title: "Bangkok Mahanakhon Sky Walk Admission Ticket", price: 4500, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop", slug: "/thailand/bangkok/skywalk" },
  ],
  pattaya: [
    { title: "Discovery Pattaya City Tours with Floating Market and Lunch", price: 1800, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/pattaya/floating-market-tour" },
    { title: "Pattaya City Tour: Big Buddha Hill, Gems Museum and Gallery with Round Trip Transfer", price: 1200, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop", slug: "/thailand/pattaya/big-buddha-gems" },
    { title: "Coral Island Join Tour with Indian Lunch", price: 650, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop", slug: "/thailand/pattaya/coral-island" },
    { title: "Nong Nooch Admission Fees with Show, Lunch and Round Trip Transfer from Pattaya", price: 3000, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/pattaya/nong-nooch-garden" },
    { title: "Pattaya Dolphinarium Admission Ticket with Transfer", price: 3100, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop", slug: "/thailand/pattaya/dolphinarium" },
    { title: "Alcazar Show Pattaya Ticket with Transfer", price: 1500, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop", slug: "/thailand/pattaya/alcazar-show" },
  ],
  phuket: [
    { title: "Full Day Tour from Phuket to Phi Phi Island, Maya Bay and Khai Island by Speedboat with National Park Fee", price: 4000, image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", slug: "/thailand/phuket/phi-phi-island-tour" },
    { title: "Dolphin Bay Phuket Admission Ticket with Transfer", price: 3300, image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", slug: "/thailand/phuket/dolphin-bay" },
    { title: "Phang Nga Bay (James Bond Island) Sea Canoe Tour by Long tail Boat", price: 3600, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/phuket/james-bond-island-tour" },
    { title: "Phuket City Tour and Tiger Experience: Tiger Only", price: 3000, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/phuket/selfie-with-tigers" },
    { title: "Phuket Simon Cabaret Show Ticket with Join Roundtrip Transfer", price: 2000, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/phuket/simon-cabaret" },
  ],
  krabi: [
    { title: "Phi Phi Island by Speedboat with Transfer from Krabi", price: 3800, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/phuket/phi-phi-island-tour" },
    { title: "James Bond Island Sightseeing Tour by Long-Tailed Boat", price: 4000, image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop", slug: "/thailand/phuket/james-bond-island-tour" },
    { title: "Hong Islands by Longtail Boat", price: 2600, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/krabi/hong-islands-longtail" },
    { title: "4 Islands by Longtail Boat (With National Park Fee)", price: 2000, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/krabi/four-islands-longtail" },
    { title: "Half Day Emerald Pool + Hot Springs with Lunch", price: 2800, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop", slug: "/thailand/phuket/hot-spring-emerald-pool" },
  ],
};

// Activity keywords mapping
const activityKeywords: Record<string, string[]> = {
  "temple": ["wat", "buddha", "palace", "shrine", "grand palace", "emerald", "reclining", "golden"],
  "island": ["phi phi", "james bond", "coral", "hong", "khai", "maya bay", "speedboat", "longtail"],
  "boat": ["cruise", "canal", "river", "ferry", "yacht", "sailing"],
  "adventure": ["elephant", "tiger", "safari", "atv", "rafting", "zip line", "flying fox"],
  "show": ["cabaret", "alcazar", "dolphin", "carnival", "performance", "entertainment"],
  "food": ["buffet", "lunch", "dinner", "street food", "floating market", "food tour"],
  "city tour": ["sightseeing", "guided tour", "walking tour", "tuk tuk"],
  "water": ["swimming", "snorkeling", "diving", "beach", "sea"],
  "spa": ["massage", "wellness", "relaxation", "hot spring"],
  "night": ["sunset", "nightlife", "evening", "after dark"],
};

/**
 * Search through all activities, destinations, and cities
 */
export function searchAll(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search cities
  Object.keys(cityActivities).forEach((city) => {
    if (city.toLowerCase().includes(searchTerm)) {
      results.push({
        type: 'city',
        title: city.charAt(0).toUpperCase() + city.slice(1),
        path: `/${city}`,
      });
    }
  });

  // Search activities across all cities
  Object.entries(cityActivities).forEach(([city, activities]) => {
    activities.forEach((activity) => {
      const titleLower = activity.title.toLowerCase();
      
      // Check if search term matches title directly
      if (titleLower.includes(searchTerm)) {
        results.push({
          type: 'activity',
          title: activity.title,
          path: activity.slug,
          city: city,
        });
      } else {
        // Check if search term matches any keywords
        const searchWords = searchTerm.split(' ');
        const matchesKeyword = searchWords.some(word => {
          return Object.entries(activityKeywords).some(([category, keywords]) => {
            return keywords.some(keyword => 
              (titleLower.includes(keyword) && word === category) ||
              (keyword.includes(word) && titleLower.includes(keyword))
            );
          });
        });

        if (matchesKeyword) {
          results.push({
            type: 'activity',
            title: activity.title,
            path: activity.slug,
            city: city,
          });
        }
      }
    });
  });

  // Search popular destinations
  const destinations = [
    { name: "Phi Phi Island", path: "/thailand/phuket/phi-phi-island-tour" },
    { name: "James Bond Island", path: "/thailand/phuket/james-bond-island-tour" },
    { name: "Grand Palace", path: "/thailand/bangkok/grand-palace-emerald" },
    { name: "Wat Arun", path: "/thailand/bangkok/wat-arun-pho-traimit" },
    { name: "Coral Island", path: "/thailand/pattaya/coral-island" },
  ];

  destinations.forEach((dest) => {
    if (dest.name.toLowerCase().includes(searchTerm)) {
      results.push({
        type: 'destination',
        title: dest.name,
        path: dest.path,
      });
    }
  });

  // Remove duplicates
  const uniqueResults = results.filter((result, index, self) =>
    index === self.findIndex((r) => r.path === result.path)
  );

  return uniqueResults;
}

/**
 * Filter activities by search query
 */
export function filterActivities(activities: Activity[], searchQuery: string): Activity[] {
  if (!searchQuery || searchQuery.trim().length === 0) {
    return activities;
  }

  const searchTerm = searchQuery.toLowerCase().trim();

  return activities.filter((activity) => {
    const titleLower = activity.title.toLowerCase();
    
    // Direct title match
    if (titleLower.includes(searchTerm)) {
      return true;
    }

    // Keyword match
    const searchWords = searchTerm.split(' ');
    return searchWords.some(word => {
      return Object.entries(activityKeywords).some(([category, keywords]) => {
        return keywords.some(keyword => 
          (titleLower.includes(keyword) && (word === category || keyword.includes(word))) ||
          (keyword.includes(word) && titleLower.includes(keyword))
        );
      });
    });
  });
}

/**
 * Get city from search query
 */
export function getCityFromSearch(query: string): string | null {
  const searchTerm = query.toLowerCase().trim();
  
  const cities = ['bangkok', 'pattaya', 'phuket', 'krabi', 'dubai', 'thailand'];
  
  for (const city of cities) {
    if (searchTerm.includes(city)) {
      return city;
    }
  }
  
  return null;
}
