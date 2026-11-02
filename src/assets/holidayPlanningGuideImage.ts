import imageAsset from "./thailand-holiday-packages-guide.png.asset.json";

// Use the verified asset-serving origin so custom-domain article thumbnails work.
export const holidayPlanningGuideImage = new URL(
  imageAsset.url,
  "https://id-preview--72e37307-dbb0-4c5e-9a42-c8633824894d.lovable.app",
).href;
