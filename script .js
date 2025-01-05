document.addEventListener("DOMContentLoaded", function() {
    // Effet survol sur les projets
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("mouseenter", function() {
            project.style.transform = "scale(1.05)";
            project.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        project.addEventListener("mouseleave", function() {
            project.style.transform = "scale(1)";
            project.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });

    // Formulaire de contact : Animation simple de focus
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            input.style.borderColor = "#2980b9";
        });

        input.addEventListener("blur", function() {
            input.style.borderColor = "#ccc";
        });
    });
});