import { Star, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CustomerReview } from "@/data/tourData";

interface CustomerReviewsProps {
  reviews?: CustomerReview[];
  averageRating?: number;
  totalReviews?: number;
}

const defaultReviews: CustomerReview[] = [
  {
    name: "Priya Sharma",
    date: "2 days ago",
    rating: 5,
    comment: "Absolutely amazing experience! The tour was well-organized, and Maya Bay was stunning. Our guide was knowledgeable and friendly. The buffet lunch was delicious with plenty of options. Highly recommend!",
    helpful: 24,
  },
  {
    name: "Rahul Kumar",
    date: "1 week ago",
    rating: 5,
    comment: "Best day trip from Phuket! The boat was comfortable and spacious. Snorkeling was incredible - saw so many colorful fish. The crew was professional and made sure everyone was safe and having fun.",
    helpful: 18,
  },
  {
    name: "Anita Patel",
    date: "2 weeks ago",
    rating: 4,
    comment: "Great tour overall. The islands are breathtaking and worth visiting. The only downside was that Maya Bay was quite crowded, but that's expected during peak season. Would still recommend!",
    helpful: 12,
  },
  {
    name: "Vikram Singh",
    date: "3 weeks ago",
    rating: 5,
    comment: "Fantastic value for money! The pickup was on time, and the entire day was perfectly planned. The Viking Cave and Loh Samah Bay were highlights. Don't forget your underwater camera!",
    helpful: 15,
  },
];

const CustomerReviews = ({ reviews, averageRating = 4.8, totalReviews = 1247 }: CustomerReviewsProps) => {
  const displayReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;
  const displayAverageRating = averageRating;
  const displayTotalReviews = totalReviews;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Customer Reviews</CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(displayAverageRating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-lg">{displayAverageRating}</span>
            <span className="text-muted-foreground">({displayTotalReviews} reviews)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {displayReviews.map((review, index) => (
          <div key={index} className="border-b border-border pb-6 last:border-0">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground">{review.comment}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CustomerReviews;
