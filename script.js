
// Mobile Navigation Menu

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});

// Welcome message in browser console

console.log("Welcome to Barath S's Portfolio!");
