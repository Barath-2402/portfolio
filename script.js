
// MOBILE NAVIGATION

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");
    const menuButton = document.querySelector(".menu-btn");

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";
}


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        const navLinks = document.getElementById("navLinks");
        const menuButton = document.querySelector(".menu-btn");

        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";

    });

});


// WELCOME MESSAGE

console.log("Welcome to Barath S's Portfolio!");
