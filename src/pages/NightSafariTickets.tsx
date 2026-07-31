import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";
import { toursData } from "@/data/tourData";
import { NightSafariTicketsSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { nightSafariTicketsFaqs } from "@/data/singaporeActivityFaqs";
import ns1 from "@/assets/singapore-doc/night-safari-1.jpg";
import ns2 from "@/assets/singapore-doc/night-safari-2.jpg";
import ns3 from "@/assets/singapore-doc/night-safari-3.jpg";

const base = toursData["night-safari-tickets"];

const NightSafariTickets = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "night-safari-tickets",
      path: "/singapore/night-safari-singapore-tickets-and-transfers/",
      seoTitle: "Night Safari Singapore Tickets & Transfers | Instant Confirmation",
      seoDescription:
        "Book Night Safari Singapore tickets with optional hotel transfers — tram ride, walking trails and Creatures of the Night show. INR pricing, Indian WhatsApp support.",
      whatsappTopic: "Night Safari Singapore tickets",
      audience: "Perfect for Families & Kids",
      area: "mandai",
      ctaHeadline: "Ready for a Wild Night at Singapore's Night Safari?",
      ctaImage: ns1,
      companionIntro:
        "Everything Indian families need for a smooth Night Safari evening — vegetarian dining inside Mandai, the best tram timings, what to wear after dark and how to reach the park from the city.",
      tables: [
        {
          heading: "What to Expect",
          columns: ["Zone", "Highlight", "Best For", "Duration"],
          rows: [
            ["Tram Safari", "Open-concept ride across 7 habitats", "Everyone — do this first", "40 min"],
            ["Leopard Trail", "Leopards, flying squirrels, porcupines", "Wildlife lovers", "20 min"],
            ["Fishing Cat Trail", "Otters, fishing cats, binturong", "Kids", "15 min"],
            ["East Lodge Trail", "Lions, hyenas, Malayan tigers", "Big-cat fans", "20 min"],
            ["Creatures of the Night", "Live nocturnal animal presentation", "Families", "20 min"],
            ["Thumbuakar Fire Show", "Tribal fire performance at entrance", "Everyone", "15 min"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Option", "Timings", "Duration"],
          rows: [
            ["Tickets Only", "Park open 7:15 PM – 12:00 AM", "3–4 hrs recommended"],
            ["Tickets + Hotel Transfers", "Pickup ~6:00 PM · Drop by 11:30 PM", "~5 hrs door to door"],
          ],
        },
      ],
      tips: [
        "Take the tram ride first, then explore the walking trails on foot.",
        "Flash photography is strictly prohibited — use night mode instead.",
        "Carry mosquito repellent; the trails run through dense greenery.",
        "Reach via MRT to Khatib Station and the Mandai Khatib Shuttle if you skip transfers.",
      ],
      tourOverrides: {
        heroImages: [
          { src: ns1, title: base.title, subtitle: "World's first nocturnal zoo" },
          { src: ns2, title: base.title, subtitle: "Mandai Wildlife Reserve entrance" },
          { src: ns3, title: base.title, subtitle: "Live wildlife performances" },
          ...base.heroImages,
        ],
        faqs: nightSafariTicketsFaqs,
      },
      extraContentBeforeReviews: <NightSafariTicketsSEO />,
    }}
  />
);

export default NightSafariTickets;
