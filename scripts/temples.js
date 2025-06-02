// Hamburger menu functionality
const menuButton = document.getElementById('menu-button');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
    menuButton.textContent = primaryNav.classList.contains('active') ? '✕' : '☰';
});

// Footer dynamic content
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('#primary-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            primaryNav.classList.remove('active');
            menuButton.textContent = '☰';
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && 
        !primaryNav.contains(e.target) && 
        e.target !== menuButton) {
        primaryNav.classList.remove('active');
        menuButton.textContent = '☰';
    }
});
