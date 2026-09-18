const QUOTE_LINK = "QUOTE_LINK_HERE";

document.querySelectorAll(".quote-link").forEach((link) => {
  if (QUOTE_LINK && QUOTE_LINK !== "QUOTE_LINK_HERE") {
    link.href = QUOTE_LINK;
    link.target = "_blank";
    link.rel = "noopener";
  } else if (link.getAttribute("href") === "QUOTE_LINK_HERE") {
    link.href = "#investment";
  }
});

const header = document.getElementById("siteHeader");
const setHeader = () => header.classList.toggle("is-solid", window.scrollY > 24);
setHeader();
window.addEventListener("scroll", setHeader, { passive: true });

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
