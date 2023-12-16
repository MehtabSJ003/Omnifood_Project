const worksBtn = document.querySelector(".working");
const workingSection = document.querySelector(".section-how");
worksBtn.addEventListener("click", function () {
  workingSection.scrollIntoView({ behavior: "smooth" });
});
