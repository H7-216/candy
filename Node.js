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
                body { font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .cv-template { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20px; background: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; }
                .cv-header { text-align: center; margin-bottom: 20px; }
                .cv-header h1 { margin: 0; font-size: 36px; color: #333; }
                .cv-header p { margin: 5px 0; font-size: 18px; color: #555; }
                .cv-section { margin-bottom: 20px; }
                .cv-section h2 { font-size: 24px; color: #333; border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 10px; }
                .cv-section p { margin: 5px 0; font-size: 16px; color: #555; }
                .cv-section ul { list-style-type: none; padding: 0; }
                .cv-section ul li { margin-bottom: 10px; font-size: 16px; color: #555; }
            </style>
        </head>
        <body>
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
        </body>
        </html>
    `;

    const blob = new Blob([cvContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `CV_${name}.html`;
    link.click();
});