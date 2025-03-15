// script.js
function effectuerCalculs() {
    // Récupérer les valeurs des champs
    const U1 = parseFloat(document.getElementById("U1").value);
    const U2 = parseFloat(document.getElementById("U2").value);
    const I1 = parseFloat(document.getElementById("I1").value);
    const I2 = parseFloat(document.getElementById("I2").value);
    const P1 = parseFloat(document.getElementById("P1").value);
    const P2 = parseFloat(document.getElementById("P2").value);

    // Initialiser les résultats
    const resultats = [];

    // Calculer le rapport de transformation (R = U1 / U2)
    if (U1 && U2) {
        const R = U1 / U2;
        resultats.push(`Rapport de transformation (R) : ${R.toFixed(2)} (sans unité)`);
    }

    // Calculer la puissance apparente (S = U1 * I1 ou S = U2 * I2)
    if (U1 && I1) {
        const S = U1 * I1;
        resultats.push(`Puissance apparente (S) : ${S.toFixed(2)} VA`);
    } else if (U2 && I2) {
        const S = U2 * I2;
        resultats.push(`Puissance apparente (S) : ${S.toFixed(2)} VA`);
    }

    // Calculer le rendement (η = (P2 / P1) * 100)
    if (P1 && P2) {
        const η = (P2 / P1) * 100;
        resultats.push(`Rendement (η) : ${η.toFixed(2)} %`);
    }

    // Calculer le courant secondaire (I2 = I1 / R)
    if (I1 && U1 && U2) {
        const R = U1 / U2;
        const I2_calcule = I1 / R;
        resultats.push(`Courant secondaire (I2) : ${I2_calcule.toFixed(2)} A`);
    }

    // Afficher les résultats
    const resultatsListe = document.getElementById("resultats");
    resultatsListe.innerHTML = resultats.map(r => `<li>${r}</li>`).join("");
}