import ScrollReveal from "scrollreveal";

export default function useScrollAnimation() {
  const sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal(".background");
  sr.reveal(".skills");
  sr.reveal(".experience", { viewFactor: 0.2 });
  sr.reveal(".projects", { viewFactor: 0.1 });
  sr.reveal(".contact", { viewFactor: 0.05 });

  return sr;
}
