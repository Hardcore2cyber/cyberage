
// Scroll reveal benzeri animasyon
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = revealElements[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      revealElements[i].classList.add('active');
    } else {
      revealElements[i].classList.remove('active');
    }
  }
});
