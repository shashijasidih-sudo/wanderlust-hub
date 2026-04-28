import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogCityProps } from "@/data/blogCityLinks";
import heroImg from "@/assets/singapore-universal-studios.jpg";
import sentosaImg from "@/assets/singapore-adventure-cove.jpg";
import skyHelixImg from "@/assets/singapore-sky-helix.jpg";
import wingsImg from "@/assets/singapore-wings-time.jpg";

const BlogSentosaActivities = () => {
  return (
    <BlogArticleLayout
    {...getBlogCityProps("singapore")}
      title="Complete Guide to Sentosa Activities in Singapore"
      description="Discover the best Sentosa Island activities — from Universal Studios and SEA Aquarium to beaches and Sky Helix. Your complete guide to Singapore's playground."
      heroImage={heroImg}
      heroAlt="Universal Studios Singapore at Sentosa Island"
      author="Yellodae Island Expert"
      date="Feb 21, 2026"
      readTime="10 min read"
      category="Theme Parks & Activities"
      guidesLink="/singapore/destination-guides"
      guidesLabel="Singapore Guides"
      keywords={[
        "Sentosa activities Singapore",
        "Singapore Sentosa activities booking",
        "Universal Studios Singapore",
        "SEA Aquarium Singapore",
        "Adventure Cove Waterpark",
        "Sentosa Island things to do",
        "Sky Helix Sentosa",
        "Wings of Time Sentosa",
        "Singapore attractions",
        "Yellodae Sentosa booking",
      ]}
      relatedLinks={[
        { title: "Singapore Airport Transfer Guide", link: "/blog/airport-transfer-booking-singapore" },
        { title: "Universal Studios Weekday", link: "/singapore/universal-studios-singapore-weekday-tickets" },
        { title: "Sentosa Cable Car", link: "/singapore/sentosa-cable-car-tickets-and-transfers" },
        { title: "Sky Helix Sentosa", link: "/singapore/skyhelix-sentosa-tickets" },
      ]}
      sections={[
        {
          type: "paragraph",
          content: "If you're planning a trip to Singapore, one destination you simply cannot miss is Sentosa Island. Known as the ultimate playground of fun, adventure, beaches, and luxury, Sentosa offers something for every type of traveller — whether you're visiting with family, friends, or as a couple.",
        },
        {
          type: "heading",
          content: "Why Visit Sentosa Island?",
        },
        {
          type: "paragraph",
          content: "Sentosa is just 15 minutes from mainland Singapore, yet it feels like a complete holiday destination. From thrilling rides and water adventures to relaxing beaches and luxury resorts, it's a one-stop destination for fun and relaxation.",
        },
        {
          type: "heading",
          content: "Best Sentosa Activities in Singapore",
        },
        {
          type: "subheading",
          content: "🎢 1. Universal Studios Singapore",
        },
        {
          type: "paragraph",
          content: "Experience movie-themed rides, thrilling roller coasters, and live entertainment at Southeast Asia's only Universal Studios theme park. Perfect for families and adventure lovers with zones themed around Transformers, Jurassic Park, and more.",
        },
        {
          type: "subheading",
          content: "🦈 2. S.E.A. Aquarium",
        },
        {
          type: "paragraph",
          content: "One of the world's largest aquariums, home to more than 100,000 marine animals. A magical experience for kids and adults alike — walk through underwater tunnels surrounded by sharks, manta rays, and tropical fish.",
        },
        {
          type: "subheading",
          content: "🌊 3. Adventure Cove Waterpark",
        },
        {
          type: "paragraph",
          content: "Enjoy high-speed water slides, lazy rivers, and snorkelling with tropical fish. The perfect place to cool off and have fun with family and friends.",
        },
        {
          type: "image",
          src: sentosaImg,
          alt: "Adventure Cove Waterpark at Sentosa Island Singapore",
          caption: "Adventure Cove Waterpark — one of Sentosa's top attractions",
        },
        {
          type: "subheading",
          content: "🏖 4. Sentosa Beaches",
        },
        {
          type: "paragraph",
          content: "Relax at Siloso Beach, Palawan Beach, or Tanjong Beach. Whether you want beach parties or peaceful sunsets, Sentosa beaches have it all.",
        },
        {
          type: "subheading",
          content: "🌅 5. Skyline Luge & Skyride",
        },
        {
          type: "paragraph",
          content: "Ride down exciting tracks on a gravity-powered luge cart and enjoy panoramic island views from the Skyride chairlift — fun for all ages.",
        },
        {
          type: "subheading",
          content: "🌉 6. Sky Helix Sentosa",
        },
        {
          type: "paragraph",
          content: "Singapore's highest open-air panoramic ride offering breathtaking 360° views of Sentosa, the city skyline, and the sea.",
        },
        {
          type: "image",
          src: skyHelixImg,
          alt: "Sky Helix Sentosa — panoramic views of Singapore",
          caption: "Sky Helix offers stunning 360° views of Sentosa and beyond",
        },
        {
          type: "heading",
          content: "Must-Visit Places in Sentosa",
        },
        {
          type: "list",
          items: [
            "Madame Tussauds Singapore — get selfies with your favourite celebrities",
            "Wings of Time Night Show — a spectacular light and water show",
            "Fort Siloso — for history lovers and WWII enthusiasts",
            "Sentosa Merlion Area — iconic photo spot for every visitor",
          ],
        },
        {
          type: "image",
          src: wingsImg,
          alt: "Wings of Time night show at Sentosa Singapore",
          caption: "Wings of Time — Sentosa's spectacular evening show",
        },
        {
          type: "heading",
          content: "Why Book Sentosa Activities in Advance?",
        },
        {
          type: "list",
          items: [
            "Avoid long queues at ticket counters",
            "Get better combo deals and discounted packages",
            "Secure your preferred time slots during peak season",
            "Save money with early booking offers",
          ],
        },
        {
          type: "tip-box",
          content: "💡 Pro Tip: Start early to cover major attractions. Wear comfortable clothes and footwear, carry sunscreen, and plan beach time in the evening for beautiful sunset views.",
        },
        {
          type: "heading",
          content: "Why Choose Yellodae for Sentosa Bookings?",
        },
        {
          type: "list",
          items: [
            "Easy and quick booking process — book in minutes",
            "Best prices on activities and transfers",
            "Secure and instant confirmation",
            "Customizable tour options for your needs",
            "Airport transfers and attraction tickets in one place",
          ],
        },
        {
          type: "heading",
          content: "Final Thoughts",
        },
        {
          type: "paragraph",
          content: "Sentosa Island is truly the heart of entertainment in Singapore. From thrilling adventures to relaxing beaches and world-class attractions, it offers unforgettable experiences for everyone. Make your journey simple with trusted Sentosa activities booking and explore the best of Sentosa without stress.",
        },
        {
          type: "cta",
          content: "Ready to explore Sentosa? Plan smart, travel better, and create unforgettable memories!",
          link: "/singapore/sentosa-island",
          linkText: "🎢 Book Sentosa Activities Now",
        },
      ]}
    />
  );
};

export default BlogSentosaActivities;
