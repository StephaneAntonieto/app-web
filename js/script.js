// DOM elements
const btnNavEl = document.querySelector(".btn-mob-nav");
const headerEl = document.querySelector(".header");
const allLinkEl = document.querySelectorAll("a:link");
const sectionHeroEl = document.querySelector(".section-hero");

// Action of the menu and close menu buttons in the navigation bar
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Event to close the menu screen after clicking on some link
allLinkEl.forEach(function (link) {
  link.addEventListener("click", () => {
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Observation event for sticky bar appearing and disappearing when joining hero session
const obs = new IntersectionObserver(
  function (e) {
    const ent = e[0];
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
