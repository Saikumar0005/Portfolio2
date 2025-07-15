const ham = document.querySelector('.ham');
const navBar = document.querySelector('.nav-bar');
ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    navBar.classList.toggle('active');
});
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', () => {
        ham.classList.remove('active');
        navBar.classList.remove('active');
    });
});
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        console.log('Form submitted:', formValues);
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .experience-item, .platform-card');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};
document.querySelectorAll('.skill-category, .project-card, .experience-item, .platform-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.5s ease';
});
animateOnScroll();
window.addEventListener('scroll', animateOnScroll);