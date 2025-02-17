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
        <!DOCTYPE html>
        <html lang="${language}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CV - ${name}</title>
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { color: #333; }
                .section { margin-bottom: 20px; }
                .section h2 { color: #555; border-bottom: 2px solid #ddd; padding-bottom: 5px; }
                .section p { margin: 5px 0; }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <div class="section">
                <h2>${language === 'fr' ? 'Coordonnées' : 'Contact Information'}</h2>
                <p>Email: ${email}</p>
                <p>Téléphone: ${phone}</p>
                <p>Adresse: ${address}</p>
            </div>
            <div class="section">
                <h2>${language === 'fr' ? 'Éducation' : 'Education'}</h2>
                <p>${education}</p>
            </div>
            <div class="section">
                <h2>${language === 'fr' ? 'Expérience' : 'Experience'}</h2>
                <p>${experience}</p>
            </div>
            <div class="section">
                <h2>${language === 'fr' ? 'Compétences' : 'Skills'}</h2>
                <p>${skills}</p>
            </div>
        </body>
        </html>
    `;

    const blob = new Blob([cvContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `CV_${name}.html`;
    link.click();
});