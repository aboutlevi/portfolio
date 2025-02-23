// Fonction pour afficher ou masquer le PDF
function togglePdf(pdfId) {
    const pdfContainer = document.getElementById(pdfId);
    if (pdfContainer.style.display === "none") {
        pdfContainer.style.display = "block";  // Afficher le PDF
    } else {
        pdfContainer.style.display = "none";  // Masquer le PDF
    }
}