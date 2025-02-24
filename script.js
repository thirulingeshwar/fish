// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // GSAP Animations
  gsap.from(".hero-content", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
  });