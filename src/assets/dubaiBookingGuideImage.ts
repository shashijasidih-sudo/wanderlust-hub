import imageAsset from "./dubai-activities-booking-guide-attached.jpg.asset.json";

// The external custom-domain host serves HTML for relative Lovable asset paths.
// Keep the uploaded asset on its verified image-serving origin.
export const dubaiBookingGuideImage = new URL(
  imageAsset.url,
  "https://id-preview--72e37307-dbb0-4c5e-9a42-c8633824894d.lovable.app",
).href;