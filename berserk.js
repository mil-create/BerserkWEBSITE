// Select all sections
const sections = document.querySelectorAll("section");

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Remove the active class to reset the animation
            entry.target.classList.remove("active");
            
            // Force a reflow to restart the animation
            void entry.target.offsetWidth;

            // Add the active class back to trigger the animation
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

// Observe each section
sections.forEach((section) => observer.observe(section));

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.createElement('div');
    overlay.className = 'scroll-overlay';
    document.body.appendChild(overlay);

    window.addEventListener('scroll', function() {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const maxOpacity = 0.2; // Maximum darkness (0.7 means 70% black)
        const opacity = Math.min(scrollPercentage, maxOpacity);
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    });
});
