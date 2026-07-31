import SingaporeActivityTemplate from "@/components/activity-detail/SingaporeActivityTemplate";

const NightSafariDinner = () => (
  <SingaporeActivityTemplate
    config={{
      tourKey: "night-safari-dinner",
      path: "/singapore/night-safari-dinner/",
      seoTitle: "Night Safari Singapore with Indian Dinner & Transfers | Yellodae",
      seoDescription:
        "Night Safari Singapore with Indian dinner and round-trip hotel transfers. Tram safari, walking trails, live shows plus a vegetarian-friendly Indian meal. Book in INR.",
      whatsappTopic: "Night Safari Singapore with Indian dinner",
      audience: "Ideal for Indian Families",
      area: "mandai",
      ctaHeadline: "Night Safari + Indian Dinner, All Sorted",
      companionIntro:
        "The easiest Night Safari plan for Indian families — hotel pickup, a hot vegetarian-friendly Indian dinner and the full nocturnal safari, all in one booking.",
      tables: [
        {
          heading: "What's Included",
          columns: ["Inclusion", "Details"],
          rows: [
            ["Hotel Pickup & Drop", "Air-conditioned round-trip transfers"],
            ["Indian Dinner", "Vegetarian & non-vegetarian Indian set meal"],
            ["Night Safari Entry", "Skip-the-counter e-ticket"],
            ["Tram Safari", "Guided ride across all wildlife zones"],
            ["Walking Trails", "Four nocturnal trails"],
            ["Live Shows", "Creatures of the Night + Fire Show"],
          ],
          minWidth: 420,
        },
        {
          heading: "Evening Flow",
          columns: ["Stage", "Approx Time"],
          rows: [
            ["Hotel pickup", "5:30 – 6:00 PM"],
            ["Indian dinner", "6:15 – 7:00 PM"],
            ["Park entry & fire show", "7:15 PM"],
            ["Tram safari & trails", "7:45 – 10:15 PM"],
            ["Hotel drop-off", "By 11:30 PM"],
          ],
          minWidth: 360,
        },
      ],
      tips: [
        "Mention Jain or no-onion-no-garlic preferences at the time of booking.",
        "Eat before entering the park — food options inside are limited late at night.",
        "Carry repellent and a light jacket for the open tram.",
        "Weekdays are far less crowded than weekends.",
      ],
    }}
  />
);

export default NightSafariDinner;
