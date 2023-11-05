// Apply fading effect to sections on scroll
const sections = document.querySelectorAll('section');

function checkSections() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkSections);
window.addEventListener
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const sections = document.querySelectorAll('.scroll-reveal');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight / 1.2) {
            section.classList.add('revealed');
        }
    });
}
document.getElementById("contact-button").addEventListener("click", function() {
   var email = "nitinskolekar@email.com"; // Replace with your email address
   var subject = "Regarding your portfolio"; // Replace with the email subject
   var body = "Any Queries ?"; // Replace with the email body

   var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;
   window.location.href = mailtoLink;
 });
