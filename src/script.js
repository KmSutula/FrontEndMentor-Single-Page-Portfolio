const portrait = document.getElementById("portrait");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    portrait.src = "./assets/images/image-profile-desktop.webp";
  } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
    portrait.src = "./assets/images/image-profile-tablet.webp";
  } else {
    portrait.src = "./assets/images/image-profile-mobile.webp";
  }
});
