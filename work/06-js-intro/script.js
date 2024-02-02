
document.addEventListener("DOMContentLoaded", function() {
    let menuButton = document.getElementById("menu__btn");
    let menuDropdown = document.getElementById("menu__dropdown");

    menuButton.addEventListener("click", function() {
        menuDropdown.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!event.target.matches('#menu__btn') && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('show');
        }
    });
});