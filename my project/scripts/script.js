// Add this script at the bottom of your HTML file or in an external JavaScript file

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-menu");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
