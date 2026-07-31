import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";
import { toursData } from "@/data/tourData";
import { SentosaCableCarSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { sentosaCableCarFaqs } from "@/data/singaporeActivityFaqs";
import cable1 from "@/assets/singapore-doc/cable-car-1.jpg";

const base = toursData["sentosa-cable-car"];

const SentosaCableCar = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "sentosa-cable-car",
      path: "/singapore/sentosa-cable-car-tickets-and-transfers/",
      seoTitle: "Sentosa Cable Car Tickets & Transfers | Mount Faber Line | Yellodae",
      seoDescription:
        "Book Singapore Cable Car round-trip tickets on the Mount Faber Line with optional hotel transfers. Panoramic harbour views, instant confirmation, INR pricing.",
      whatsappTopic: "Sentosa Cable Car tickets & transfers",
      audience: "Loved by Couples & Families",
      area: "sentosa",
      ctaHeadline: "Glide Over Keppel Harbour on the Sentosa Cable Car",
      ctaImage: cable1,
      companionIntro:
        "A 15-minute glass-cabin ride with the best aerial views in Singapore — here's how Indian travellers should time it, where to board and what to pair it with.",
      tables: [
        {
          heading: "Stations & Route",
          columns: ["Station", "Line", "Why Board Here", "Segment Time"],
          rows: [
            ["Mount Faber", "Mount Faber Line", "Longest, most scenic segment", "~15 min"],
            ["HarbourFront Tower 2", "Mount Faber Line", "Closest to VivoCity & MRT", "~10 min"],
            ["Sentosa (Imbiah)", "Mount Faber Line", "Return leg to the mainland", "~15 min"],
          ],
        },
        {
          heading: "Timings & Duration",
          columns: ["Option", "Timings", "Duration"],
          rows: [
            ["Round-trip tickets only", "8:45 AM – 10:00 PM daily", "45–60 min"],
            ["Tickets + hotel transfers", "Pickup as per selected slot", "~3 hrs door to door"],
          ],
        },
      ],
      tips: [
        "Board at Mount Faber Station for the longest and most scenic ride.",
        "Sunset (6:30–7:15 PM) gives the best golden-hour photographs.",
        "Cabins are air-conditioned and stroller friendly.",
        "Combine with Wings of Time or SkyHelix for a full Sentosa evening.",
      ],
      tourOverrides: {
        heroImages: [
          { src: cable1, title: base.title, subtitle: "Mount Faber Line panoramic ride" },
          ...base.heroImages,
        ],
        faqs: sentosaCableCarFaqs,
      },
      extraContentBeforeReviews: <SentosaCableCarSEO />,
    }}
  />
);

export default SentosaCableCar;
