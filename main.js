// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const burgerIcon = document.querySelector('.burger-icon');

    burgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            burgerIcon.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!burgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            burgerIcon.classList.remove('active');
        }
    });
});
