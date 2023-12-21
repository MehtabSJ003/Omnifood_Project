// Class Selectors
const header = document.querySelector(".header");

// Links
const allLinks = document.querySelectorAll("header a:link");
console.log(allLinks);

// NavBar
const worksNav = document.querySelector(".working-nav-link");
const mealNav = document.querySelector(".meal-nav-link");
const testimonialNav = document.querySelector(".testimonial-nav-link");
const pricingNav = document.querySelector(".pricing-nav-link");
const signupNav = document.querySelector(".signup-nav-link-btn");

const heroSection = document.querySelector(".section-hero");

// Sections
const workingSection = document.querySelector(".section-how");
const mealSection = document.querySelector(".section-meals");
const testimonialSection = document.querySelector(".section-testimonial");
const pricingSection = document.querySelector(".section-pricing");
const signupSection = document.querySelector(".section-cta");

// Buttons
const btnNav = document.querySelector(".btn-mobile-nav");

// Smooth Scrolling functionality for NavBar
const smoothScroll = function (section) {
  return function (e) {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  };
};
worksNav.addEventListener("click", smoothScroll(workingSection));
mealNav.addEventListener("click", smoothScroll(mealSection));
testimonialNav.addEventListener("click", smoothScroll(testimonialSection));
pricingNav.addEventListener("click", smoothScroll(pricingSection));
signupNav.addEventListener("click", smoothScroll(signupSection));

// Creating sticky navigation
// const navHeight = header.getBoundingClientRect().height;
function fixNav() {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        // console.log(ent);
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
          // Changing background color of header
          header.style.backgroundColor = "#fff";
        } else {
          document.body.classList.remove("sticky");
          header.style.backgroundColor = "#fdf2e9";
        }
      },
      // Add root, threshold and rootMargin
      {
        root: null,
        threshold: 0,
        rootMargin: `-80px`,
      }
    );
    observer.observe(heroSection);
  }
}
window.addEventListener("scroll", fixNav);

// Implementing mobile navigation
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Close mobile navigation
allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});
