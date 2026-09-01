const header = document.querySelector("[data-header]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13 }
);

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

if (!reduceMotion.matches) {
  const depthElements = [...document.querySelectorAll("[data-depth]")];
  let scheduled = false;

  const updateDepth = () => {
    depthElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const centerDelta = rect.top + rect.height / 2 - window.innerHeight / 2;
      const amount = Math.max(-22, Math.min(22, centerDelta * (index ? -0.035 : -0.02)));
      element.style.setProperty("--depth-y", `${amount}px`);
    });
    scheduled = false;
  };

  window.addEventListener("scroll", () => {
    if (!scheduled) {
      requestAnimationFrame(updateDepth);
      scheduled = true;
    }
  }, { passive: true });

  updateDepth();
}

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});
