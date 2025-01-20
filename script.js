const spanElement = document.getElementById('mySpan');
        const texts = ['Gamer', 'Blogger', 'Web Developer', 'Web Designer'];
        let index = 0;
        let charIndex = 0;
        let deleting = false;
        function animateText() {
            const currentText = texts[index];
            const nextText = texts[(index + 1) % texts.length];
            if (deleting) {
                // Delete the text character by character
                spanElement.textContent = currentText.slice(0, charIndex--);

                if (charIndex < 0) {
                    // Start typing the next text when deletion is complete
                    deleting = false;
                    setTimeout(animateText, 500); // Short pause before typing
                } else {
                    setTimeout(animateText, 100); // Speed of deleting
                }
            } else {
                // Type the next text character by character
                spanElement.textContent = nextText.slice(0, ++charIndex);

                if (charIndex === nextText.length) {
                    // Wait before starting to delete the current text
                    deleting = true;
                    index = (index + 1) % texts.length; // Move to the next text
                    setTimeout(animateText, 1500); // Wait before deleting
                } else {
                    setTimeout(animateText, 150); // Speed of typing
                }
            }
        }

        // Start the animation
        animateText();
        document.addEventListener("DOMContentLoaded", () => {
            const svgs = document.querySelectorAll("#skills svg");
          
            const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("animate");
                  observer.unobserve(entry.target); // Stop observing once animated
                }
              });
            }, { threshold: 0.5 });
          
            svgs.forEach(svg => {
              svg.classList.add("animated-slide");
              observer.observe(svg);
            });
          });
          document.addEventListener('scroll', () => {
            const sections = ['home', 'about', 'education',"skills","project","contact"];
            const offset = window.innerHeight / 2; // Midpoint of the viewport

            sections.forEach(section => {
                const element = document.getElementById(section);
                const link = document.getElementById(`link-${section}`);

                if (element.getBoundingClientRect().top <= offset && element.getBoundingClientRect().bottom > offset) {
                    link.querySelector('.part').classList.add('active');
                } else {
                    link.querySelector('.part').classList.remove('active');
                }
            });
        });
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('close');
  const navLinks = document.querySelectorAll('#menu a');

  // Toggle the menu when hamburger or close button is clicked
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Toggle menu visibility
    hamburger.classList.toggle('hidden'); // Hide hamburger icon
    close.classList.toggle('hidden'); // Show close icon
  });

  // Close the menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden'); // Hide the menu
      hamburger.classList.remove('hidden'); // Show the hamburger icon
      close.classList.add('hidden'); // Hide the close icon
    });
  });

  // Smooth scroll to the section
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  })          
      