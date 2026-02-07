if (window.__geofsBannerRunning) return;
window.__geofsBannerRunning = true;
// ===============================
// GeoFS Ad Banner Changer v1.0
// ===============================

// Rotation speed
const ROTATION_TIME = 5000;

// Your rotating banners
const banners = [
  "✈️ Fly Hong Kong — HKG → LHR",
  "🛫 Fly Pakistan — ISB → DXB",
  "🛬 Air Odisha — LHR → IGI"
];

let index = 0;

// Inject CSS
(function injectCSS() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://raw.githubusercontent.com/AirplanesAviation2361/Geofs-Ad-banner-changer/main/styles.css";
  document.head.appendChild(link);
})();

const bannerClasses = ["fly-hk", "fly-pk", "air-odisha"];

const wait = setInterval(() => {
  const banner = document.querySelector(".ad-banner");
  if (!banner) return;

  clearInterval(wait);

  banner.classList.add("geofs-custom-banner");

  setInterval(() => {
    // Remove previous airline classes
    banner.classList.remove(...bannerClasses);

    // Add the current airline class
    banner.classList.add(bannerClasses[index]);

    // Fade animation
    banner.style.opacity = 0;
    setTimeout(() => {
      banner.innerText = banners[index];
      banner.style.opacity = 1;
      index = (index + 1) % banners.length;
    }, 250);

  }, ROTATION_TIME);

}, 500);
  
  
