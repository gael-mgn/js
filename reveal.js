// Injecte le CSS immédiatement
const style = document.createElement("style");
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.9s ease-out, transform 0.6s ease-out;
  }
  .reveal.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Une fois que le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Force le reflow pour que la transition soit prise en compte
        void entry.target.offsetWidth;
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const elements = document.querySelectorAll(".reveal");
  elements.forEach(el => observer.observe(el));
});