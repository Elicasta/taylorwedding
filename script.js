const QUOTE_LINK = "QUOTE_LINK_HERE";

const quoteLinks = document.querySelectorAll(".quote-link");
quoteLinks.forEach((link) => {
  if (QUOTE_LINK && QUOTE_LINK !== "QUOTE_LINK_HERE") {
    link.href = QUOTE_LINK;
    link.target = "_blank";
    link.rel = "noopener";
  } else if (link.getAttribute("href") === "QUOTE_LINK_HERE") {
    link.href = "#investment";
    link.removeAttribute("target");
  }
});

const progressBar = document.getElementById("progressBar");
const updateProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
