const QUOTE_LINK = "https://ECCreativeStudio.pixieset.com/quote/qo_fpQpAMfqnOVYGbZPtutpx4BOwn8Q";

document.querySelectorAll(".quote-link").forEach((link) => {
  link.href = QUOTE_LINK;
  link.target = "_blank";
  link.rel = "noopener";
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reducedMotion) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}