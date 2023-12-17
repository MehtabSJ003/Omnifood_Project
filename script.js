// NavBar
const worksNav = document.querySelector(".working-nav-link");
const mealNav = document.querySelector(".meal-nav-link");
const testimonialNav = document.querySelector(".testimonial-nav-link");
const pricingNav = document.querySelector(".pricing-nav-link");
const signupNav = document.querySelector(".signup-nav-link-btn");

// Sections
const workingSection = document.querySelector(".section-how");
const mealSection = document.querySelector(".section-meals");
const testimonialSection = document.querySelector(".section-testimonial");
const pricingSection = document.querySelector(".section-pricing");
const signupSection = document.querySelector(".section-cta");

// Smooth Scrolling functionality for NavBar
worksNav.addEventListener("click", function () {
  workingSection.scrollIntoView({ behavior: "smooth" });
});

mealNav.addEventListener("click", function () {
  mealSection.scrollIntoView({ behavior: "smooth" });
});

testimonialNav.addEventListener("click", function () {
  testimonialSection.scrollIntoView({ behavior: "smooth" });
});

pricingNav.addEventListener("click", function () {
  pricingSection.scrollIntoView({ behavior: "smooth" });
});

signupNav.addEventListener("click", function () {
  signupSection.scrollIntoView({ behavior: "smooth" });
});
