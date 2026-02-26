export default function Slideshow() {
    // This runs only in the browser
    const container = document.querySelector('.animate-scroll');
    
    if (container) {
      // Duplicate the content for infinite scroll effect
      const content = container.innerHTML;
      container.innerHTML = content + content + content;
      
      // Handle hover pause (optional)
      container.addEventListener('mouseenter', () => {
        container.style.animationPlayState = 'paused';
      });
      
      container.addEventListener('mouseleave', () => {
        container.style.animationPlayState = 'running';
      });
    }
  }
  