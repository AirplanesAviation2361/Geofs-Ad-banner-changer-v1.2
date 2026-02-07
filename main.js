// Prevent double-running
if (window.__geofsBannerRunning) return;
window.__geofsBannerRunning = true;

// ===============================
// GeoFS Ad Banner Changer v1.2
// ===============================

// Rotation speed
const ROTATION_TIME = 5000;

// Rotating banners
const banners = [
  "✈️ Fly Hong Kong — HKG → LHR",
  "🛫 Fly Pakistan — ISB → DXB",
  "🛬 Air Odisha — LHR → IGI"
];

// Theme classes corresponding to banners
const bannerThemes = ["fly-hk", "fly-pk", "air-odisha"];

let index = 0;

// Inject CSS
(function injectCSS() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://raw.githubusercontent.com/AirplanesAviation2361/Geofs-Ad-banner-changer/main/styles.css";
  document.head.appendChild(link);
})();

// Wait for GeoFS banner to appear, then start rotation
const wait = setInterval(() => {
  const banner = document.querySelector(".ad-banner");
  if (!banner) return;

  clearInterval(wait);

  banner.classList.add("geofs-custom-banner");

  setInterval(() => {
    banner.style.opacity = 0;

    setTimeout(() => {
      banner.innerText = banners[index];

      // Remove previous theme classes
      banner.classList.remove(...bannerThemes);

      // Add new theme class for current banner
      banner.classList.add(bannerThemes[index]);

      banner.style.opacity = 1;

      // Next banner
      index = (index + 1) % banners.length;
    }, 250);

  }, ROTATION_TIME);

}, 500);
