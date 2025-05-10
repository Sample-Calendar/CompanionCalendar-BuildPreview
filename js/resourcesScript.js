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
    openFormButton.addEventListener("click", () =>
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSftIxuQVKmG5Pf4TsXlq0Uivcm01flAjIJH29ko8-ttt5U7pw/viewform", "_blank")
    );
    openFeedbackButton.addEventListener("click", () =>
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSf4uXPSCc4LixrFTcmdYioN4wLlmsjjTSwcUBFEy8nfMAll4A/viewform", "_blank")
    );
    openCalendarButton.addEventListener("click", () =>
        window.open("../index.html", "_self")
    );
});