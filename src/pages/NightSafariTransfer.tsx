import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";
import { toursData } from "@/data/tourData";
import { NightSafariTransferSEO } from "@/components/activity-detail/SingaporeActivitySEO";
import { nightSafariTransferFaqs } from "@/data/singaporeActivityFaqs";
import ns1 from "@/assets/singapore-doc/night-safari-1.jpg";
import ns2 from "@/assets/singapore-doc/night-safari-2.jpg";
import ns3 from "@/assets/singapore-doc/night-safari-3.jpg";

const base = toursData["night-safari-transfer"];

const NightSafariTransfer = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "night-safari-transfer",
      path: "/singapore/night-safari-transfer/",
      seoTitle: "Night Safari Singapore with Hotel Transfers | Book in INR",
      seoDescription:
        "Night Safari Singapore tickets with round-trip hotel transfers — tram safari, four walking trails and live shows. Instant confirmation and Indian WhatsApp support.",
      whatsappTopic: "Night Safari Singapore with hotel transfers",
      audience: "Best for Families & Seniors",
      area: "mandai",
      ctaHeadline: "Night Safari with Door-to-Door Hotel Transfers",
      ctaImage: ns2,
      companionIntro:
        "A stress-free Night Safari evening with round-trip hotel pickup — here's what Indian families should know about timings, vegetarian food at Mandai and making the most of the tram ride.",
      tables: [
        {
          heading: "What's Included",
          columns: ["Inclusion", "Details"],
          rows: [
            ["Hotel Pickup", "Air-conditioned vehicle from your city hotel"],
            ["Night Safari Entry", "Skip-the-counter e-ticket"],
            ["Tram Safari", "Guided 40-minute ride across all habitats"],
            ["Walking Trails", "Leopard, Fishing Cat, East Lodge & Wallaby"],
            ["Live Shows", "Creatures of the Night + Thumbuakar Fire Show"],
            ["Hotel Drop-off", "Return transfer after the safari"],
          ],
          minWidth: 420,
        },
        {
          heading: "Timings & Duration",
          columns: ["Stage", "Approx Time"],
          rows: [
            ["Hotel pickup", "6:00 – 6:30 PM"],
            ["Park entry & fire show", "7:15 PM"],
            ["Tram safari", "7:45 PM"],
            ["Trails & live show", "8:30 – 10:15 PM"],
            ["Hotel drop-off", "By 11:30 PM"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Be at the lobby 10 minutes before your pickup slot — it's a shared transfer.",
        "Ride the tram first, then walk the trails at your own pace.",
        "Ulu Ulu Safari Restaurant inside Mandai has vegetarian options.",
        "Carry a light jacket and repellent for the open-air tram.",
      ],
      tourOverrides: {
        heroImages: [
          { src: ns2, title: base.title, subtitle: "With round-trip hotel transfers" },
          { src: ns1, title: base.title, subtitle: "World's first nocturnal zoo" },
          { src: ns3, title: base.title, subtitle: "Live wildlife performances" },
          ...base.heroImages,
        ],
        faqs: nightSafariTransferFaqs,
      },
      extraContentBeforeReviews: <NightSafariTransferSEO />,
    }}
  />
);

export default NightSafariTransfer;
