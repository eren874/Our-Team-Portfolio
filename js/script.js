function toggleSolo(id) {
    const allDetails = document.querySelectorAll('.details');
    allDetails.forEach(detail => {
        if (detail.id !== id) detail.style.display = "none";
    });

    const selected = document.getElementById(id);
    selected.style.display = (selected.style.display === "block") ? "none" : "block";
}

window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert("✅ Thank you for contacting Phoenix Coder! We’ll get back to you soon.");
        contactForm.reset();
    });
}