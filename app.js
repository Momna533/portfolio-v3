const header = document.querySelector(".header");

let lastScrollY = window.scrollY;
const threshold = 100;

const headerHeight = header.offsetHeight;
const headerDistanceFromTop =
  header.getBoundingClientRect().top + window.scrollY;
const headerBottomPosition = headerDistanceFromTop + headerHeight;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > threshold) {
    if (currentScrollY > lastScrollY) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = currentScrollY;
});

const animatedTextContainer = document.getElementById("animatedText");
const text = "Transforming Ideas into Seamless Digital Experiences";
const words = text.split(" ");

words.forEach((word, i) => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  span.style.margin = "0 1rem 0 0";
  if (i > 3) span.classList.add("accent");
  animatedTextContainer.appendChild(span);
});

const spans = document.querySelectorAll("span");
spans.forEach((span, i) => {
  setTimeout(() => {
    span.style.opacity = "1";
    span.style.transform = "translateY(0)";
  }, i * 200);
});
