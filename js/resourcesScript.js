document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const dropdown = document.querySelector('.dropdown');

    // Toggle dropdown on hover
    burgerMenu.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    burgerMenu.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });

    // Optional: Add click functionality for mobile/touch devices
    burgerMenu.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});