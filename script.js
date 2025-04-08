window.onscroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
// Simple scroll fade-in
const animatedItems = document.querySelectorAll('.animate-text, .animate-btn');

window.addEventListener('scroll', () => {
    animatedItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (itemTop < screenHeight - 100) {
            item.style.opacity = 1;
            item.style.transform = "none";
        }
    });
});
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // This will add the 'visible' class to sections that are in the viewport
  function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
  
  // Trigger the animations on scroll
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Also trigger it on page load, in case the page is already scrolled down
  window.addEventListener('load', handleScrollAnimations);