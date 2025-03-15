// script.js
function effectuerCalculs() {
    // Récupérer les valeurs des champs
    const U1 = parseFloat(document.getElementById("U1").value);
    const U2 = parseFloat(document.getElementById("U2").value);
    const I1 = parseFloat(document.getElementById("I1").value);
    const I2 = parseFloat(document.getElementById("I2").value);
    const P1 = parseFloat(document.getElementById("P1").value);
    const P2 = parseFloat(document.getElementById("P2").value);
    const N1 = parseFloat(document.getElementById("N1").value);
    const N2 = parseFloat(document.getElementById("N2").value);
    const f = parseFloat(document.getElementById("f").value);

    // Initialiser les résultats
    const resultats = [];

    // Calculer le rapport de transformation (R = U1 / U2 ou R = N1 / N2)
    if (U1 && U2) {
        const R = U1 / U2;
        resultats.push(`Rapport de transformation (R) : ${R.toFixed(2)} (sans unité)`);
    } else if (N1 && N2) {
        const R = N1 / N2;
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
    } else if (I1 && N1 && N2) {
        const R = N1 / N2;
        const I2_calcule = I1 / R;
        resultats.push(`Courant secondaire (I2) : ${I2_calcule.toFixed(2)} A`);
    }

    // Calculer le nombre de spires manquant (N1 ou N2)
    if (N1 && U1 && U2) {
        const N2_calcule = (N1 * U2) / U1;
        resultats.push(`Nombre de spires au secondaire (N2) : ${N2_calcule.toFixed(2)}`);
    } else if (N2 && U1 && U2) {
        const N1_calcule = (N2 * U1) / U2;
        resultats.push(`Nombre de spires au primaire (N1) : ${N1_calcule.toFixed(2)}`);
    }

    // Calculs liés à la fréquence (f)
    if (f) {
        // Calcul de la pulsation (ω = 2πf)
        const ω = 2 * Math.PI * f;
        resultats.push(`Pulsation (ω) : ${ω.toFixed(2)} rad/s`);

        // Calcul de la réactance (si inductance L est connue)
        // Exemple : X_L = ω * L (nécessite une inductance L)
        // Si tu veux ajouter l'inductance, dis-le-moi !
    }

    // Afficher les résultats
    const resultatsListe = document.getElementById("resultats");
    resultatsListe.innerHTML = resultats.map(r => `<li>${r}</li>`).join("");
}