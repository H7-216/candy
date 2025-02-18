document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const language = document.getElementById('language').value;

    const cvContent = `
        <div class="cv-template">
            <div class="cv-header">
                <h1>${name}</h1>
                <p>${email}</p>
                <p>${phone}</p>
                <p>${address}</p>
            </div>
            <div class="cv-section">
                <h2>${language === 'fr' ? 'Éducation' : 'Education'}</h2>
                <p>${education}</p>
            </div>
            <div class="cv-section">
                <h2>${language === 'fr' ? 'Expérience' : 'Experience'}</h2>
                <p>${experience}</p>
            </div>
            <div class="cv-section">
                <h2>${language === 'fr' ? 'Compétences' : 'Skills'}</h2>
                <ul>
                    ${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    // Générer le PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.html(cvContent, {
        callback: function(doc) {
            doc.save(`CV_${name}.pdf`);
        },
        x: 10,
        y: 10,
        width: 190, // Largeur de la page A4
        windowWidth: 800, // Largeur de la fenêtre de rendu
    });
});