const header = document.querySelector(".header");
let lastScrollY = window.scrollY;
const threshold = 100;

const headerHeight = header.offsetHeight;
const headerDistanceFromTop =
  header.getBoundingClientRect().top + window.scrollY;
const headerBottomPosition = headerDistanceFromTop + headerHeight;
console.log("Header bottom position:", headerBottomPosition);

console.log("Header height:", headerHeight);
console.log("Header distance from top:", headerDistanceFromTop);

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > threshold) {
    if (currentScrollY > lastScrollY) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    console.log("Scrolled more than 100px");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = currentScrollY;
});
