import { toursData, TourData } from "@/data/tourData";

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}

// Calculate similarity score (0-1, where 1 is perfect match)
function similarityScore(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
}

export interface SearchResult {
  tour: TourData;
  score: number;
  matchedFields: string[];
  highlightedTitle: string;
}

// Extract searchable text from tour
function getSearchableFields(tour: TourData): { [key: string]: string } {
  return {
    title: tour.title,
    shortDescription: tour.shortDescription,
    location: tour.location,
    city: tour.city,
    highlights: tour.highlights.join(' '),
    overview: tour.description.overview,
    whatToExpect: tour.description.whatToExpect,
  };
}

// Create search keywords/tags for tour
function createSearchKeywords(tour: TourData): string[] {
  const keywords: string[] = [];
  
  // Add city
  keywords.push(tour.city);
  
  // Extract keywords from title
  const titleWords = tour.title.toLowerCase().split(/[\s,]+/);
  keywords.push(...titleWords);
  
  // Extract location keywords
  const locationWords = tour.location.toLowerCase().split(/[\s,]+/);
  keywords.push(...locationWords);
  
  // Add special keywords based on content
  const content = (tour.title + ' ' + tour.shortDescription + ' ' + tour.highlights.join(' ')).toLowerCase();
  
  if (content.includes('island')) keywords.push('island', 'islands');
  if (content.includes('phi phi')) keywords.push('phi-phi', 'phiphi', 'phi', 'pp');
  if (content.includes('james bond')) keywords.push('james-bond', 'jamesbond', 'bond');
  if (content.includes('temple')) keywords.push('temple', 'wat', 'temples');
  if (content.includes('buddha')) keywords.push('buddha', 'buddhist');
  if (content.includes('palace')) keywords.push('palace', 'royal');
  if (content.includes('market')) keywords.push('market', 'bazaar');
  if (content.includes('massage')) keywords.push('massage', 'spa', 'relax');
  if (content.includes('elephant')) keywords.push('elephant', 'elephants');
  if (content.includes('tiger')) keywords.push('tiger', 'tigers');
  if (content.includes('cruise')) keywords.push('cruise', 'boat', 'river');
  if (content.includes('beach')) keywords.push('beach', 'beaches', 'sand');
  if (content.includes('snorkel')) keywords.push('snorkel', 'snorkeling', 'diving');
  if (content.includes('speedboat')) keywords.push('speedboat', 'boat', 'fast-boat');
  if (content.includes('longtail')) keywords.push('longtail', 'long-tail', 'traditional-boat');
  if (content.includes('safari')) keywords.push('safari', 'adventure');
  if (content.includes('show')) keywords.push('show', 'performance', 'entertainment');
  if (content.includes('food')) keywords.push('food', 'dining', 'cuisine');
  if (content.includes('night')) keywords.push('night', 'evening', 'nightlife');
  if (content.includes('skywalk')) keywords.push('skywalk', 'sky-walk', 'rooftop', 'observation');
  
  return [...new Set(keywords)]; // Remove duplicates
}

// Highlight matching text
export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  
  const words = query.toLowerCase().split(/\s+/);
  let highlighted = text;
  
  words.forEach(word => {
    if (word.length < 2) return;
    
    const regex = new RegExp(`(${word})`, 'gi');
    highlighted = highlighted.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
  });
  
  return highlighted;
}

// Main search function
export function fuzzySearchTours(query: string, limit: number = 20, cityFilter?: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/[\s-]+/);
  
  const results: SearchResult[] = [];
  
  // Filter tours by city if cityFilter is provided
  const toursToSearch = cityFilter 
    ? Object.values(toursData).filter(tour => tour.city.toLowerCase() === cityFilter.toLowerCase())
    : Object.values(toursData);
  
  toursToSearch.forEach(tour => {
    let totalScore = 0;
    const matchedFields: string[] = [];
    const searchableFields = getSearchableFields(tour);
    const keywords = createSearchKeywords(tour);
    
    // Check exact matches in keywords (highest priority)
    keywords.forEach(keyword => {
      if (keyword === normalizedQuery) {
        totalScore += 100;
        matchedFields.push('keyword-exact');
      } else if (keyword.includes(normalizedQuery) || normalizedQuery.includes(keyword)) {
        totalScore += 50;
        matchedFields.push('keyword-partial');
      }
    });
    
    // Check fuzzy matches in keywords
    queryWords.forEach(queryWord => {
      if (queryWord.length < 2) return;
      
      keywords.forEach(keyword => {
        const similarity = similarityScore(queryWord, keyword);
        if (similarity > 0.7) { // 70% similarity threshold
          totalScore += similarity * 30;
          matchedFields.push('keyword-fuzzy');
        }
      });
    });
    
    // Search in all fields
    Object.entries(searchableFields).forEach(([field, text]) => {
      const normalizedText = text.toLowerCase();
      
      // Exact phrase match
      if (normalizedText.includes(normalizedQuery)) {
        totalScore += 80;
        matchedFields.push(field);
        return;
      }
      
      // Word-by-word matching
      queryWords.forEach(queryWord => {
        if (queryWord.length < 2) return;
        
        // Exact word match
        const wordRegex = new RegExp(`\\b${queryWord}\\b`, 'i');
        if (wordRegex.test(text)) {
          totalScore += 40;
          if (!matchedFields.includes(field)) matchedFields.push(field);
        }
        
        // Partial match
        if (normalizedText.includes(queryWord)) {
          totalScore += 20;
          if (!matchedFields.includes(field)) matchedFields.push(field);
        }
        
        // Fuzzy match for typos
        const words = normalizedText.split(/[\s,.-]+/);
        words.forEach(word => {
          if (word.length < 3) return;
          
          const similarity = similarityScore(queryWord, word);
          if (similarity > 0.75) { // 75% similarity for field text
            totalScore += similarity * 15;
            if (!matchedFields.includes(field)) matchedFields.push(field);
          }
        });
      });
    });
    
    // Boost score for city matches
    if (tour.city.toLowerCase() === normalizedQuery) {
      totalScore += 60;
    }
    
    // Only include results with meaningful scores
    if (totalScore > 10) {
      results.push({
        tour,
        score: totalScore,
        matchedFields: [...new Set(matchedFields)],
        highlightedTitle: highlightText(tour.title, query)
      });
    }
  });
  
  // Sort by score (highest first) and limit results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// Get search suggestions
export function getSearchSuggestions(query: string, limit: number = 5): string[] {
  if (!query.trim() || query.length < 2) return [];
  
  const suggestions = new Set<string>();
  const normalizedQuery = query.toLowerCase();
  
  Object.values(toursData).forEach(tour => {
    const keywords = createSearchKeywords(tour);
    
    keywords.forEach(keyword => {
      if (keyword.startsWith(normalizedQuery) && keyword !== normalizedQuery) {
        suggestions.add(keyword);
      }
    });
    
    // Add city names
    if (tour.city.toLowerCase().startsWith(normalizedQuery)) {
      suggestions.add(tour.city);
    }
    
    // Add title words
    const titleWords = tour.title.toLowerCase().split(/[\s,]+/);
    titleWords.forEach(word => {
      if (word.startsWith(normalizedQuery) && word.length > 3) {
        suggestions.add(word);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, limit);
}
