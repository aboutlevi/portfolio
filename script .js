document.addEventListener("DOMContentLoaded", function () {
    // Effet survol sur les projets
    const projects = document.querySelectorAll(".project-card"); // Sélectionne les cartes de projet

    projects.forEach((project) => {
        project.addEventListener("mouseenter", function () {
            project.style.transform = "scale(1.05)";
            project.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            project.style.transition = "all 0.3s ease";
        });

        project.addEventListener("mouseleave", function () {
            project.style.transform = "scale(1)";
            project.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });

    // Animation de focus pour les champs du formulaire de contact
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        input.addEventListener("focus", function () {
            input.style.borderColor = "#2980b9"; // Changement de bordure au focus
            input.style.boxShadow = "0 0 8px rgba(41, 128, 185, 0.5)";
            input.style.transition = "border-color 0.3s ease, box-shadow 0.3s ease";
        });

        input.addEventListener("blur", function () {
            input.style.borderColor = "#ccc"; // Retour à l'état par défaut
            input.style.boxShadow = "none";
        });
    });

    // Ajout de l'effet "Voir Plus" pour les projets
    const projectButtons = document.querySelectorAll(".project-card .btn");

    projectButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const projectCard = button.closest(".project-card");
            const description = projectCard.querySelector("p");

            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block"; // Affiche la description
                button.textContent = "Voir moins";
            } else {
                description.style.display = "none"; // Cache la description
                button.textContent = "Voir plus";
            }
        });
    });
});