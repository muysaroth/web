// Navbar Javascript
function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
// Scroll Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: true,
});
sr.reveal(".home-text", {});
