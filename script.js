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
        document.addEventListener('DOMContentLoaded', function() {
          // Select all sections you want to animate
          const sections = document.querySelectorAll('section');
      
          // Function to check if an element is in view
          function isInView(element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0;
          }
      
          // Add or remove animation class when scrolling
          function handleScroll() {
            sections.forEach(section => {
              if (isInView(section)) {
                // If the section is in view and does not have the class, add it
                if (!section.classList.contains('animate-right')) {
                  section.classList.add('animate-right');
                }
              } else {
                // If the section is out of view, remove the class to allow re-animation
                section.classList.remove('animate-right');
              }
            });
          }
      
          // Run on scroll and initial page load
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Check on page load
        });
        document.addEventListener('scroll', () => {
          const sections = document.querySelectorAll('section');
          const links = {
            home: document.getElementById('link-home'),
            about: document.getElementById('link-about'),
            education: document.getElementById('link-education'),
            skills: document.getElementById('link-skills'),
            project: document.getElementById('link-project'),
            contact: document.getElementById('link-contact'),
          };
    
          let currentSection = '';
    
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
              currentSection = section.id;
            }
          });
    
          // Remove 'active' class from all links
          for (let key in links) {
            links[key].classList.remove('active');
          }
    
          // Add 'active' class to the current section's link
          if (currentSection && links[currentSection]) {
            links[currentSection].classList.add('active');
          }
        });
      