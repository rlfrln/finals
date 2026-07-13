
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to BURVON!");

    // Smooth button hover scaling transitions
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        // Ensure smooth CSS transitions are applied natively
        button.style.transition = "transform 0.2s ease-in-out";

        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});

// Dynamic Navbar Active Link Marker (Page-aware)
(function highlightCurrentPage() {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
        // Get the link destination filename (e.g., "products.html")
        const linkPath = link.getAttribute("href");

        // Match current URL against the navbar href target attributes
        if (currentUrl.endsWith(linkPath) || (currentUrl === "/" && linkPath === "index.html")) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
        }
    });
})();