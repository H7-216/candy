// script.js
function effectuerCalculs() {
    // Récupérer les valeurs des champs
    const U1 = parseFloat(document.getElementById("U1").value);
    const U2 = parseFloat(document.getElementById("U2").value);
    const I1 = parseFloat(document.getElementById("I1").value);
    const I2 = parseFloat(document.getElementById("I2").value);
    const R1 = parseFloat(document.getElementById("R1").value);
    const R2 = parseFloat(document.getElementById("R2").value);
    const P_active = parseFloat(document.getElementById("P_active").value);
    const Q_reactive = parseFloat(document.getElementById("Q_reactive").value);
    const S_apparente = parseFloat(document.getElementById("S_apparente").value);
    const N1 = parseFloat(document.getElementById("N1").value);
    const N2 = parseFloat(document.getElementById("N2").value);
    const f = parseFloat(document.getElementById("f").value);

    // Initialiser les résultats
    const resultats = [];

    // Rapport de transformation (R = U1 / U2 ou R = N1 / N2)
    if (U1 && U2) {
        const R = U1 / U2;
        resultats.push(`Rapport de transformation (R) : ${R.toFixed(2)} (sans unité)`);
    } else if (N1 && N2) {
        const R = N1 / N2;
        resultats.push(`Rapport de transformation (R) : ${R.toFixed(2)} (sans unité)`);
    }

    // Puissance apparente (S = U1 * I1 ou S = U2 * I2)
    if (U1 && I1) {
        const S = U1 * I1;
        resultats.push(`Puissance apparente (S) : ${S.toFixed(2)} VA`);
    } else if (U2 && I2) {
        const S = U2 * I2;
        resultats.push(`Puissance apparente (S) : ${S.toFixed(2)} VA`);
    }

    // Puissance active (P = U1 * I1 * cos(φ) ou P = U2 * I2 * cos(φ))
    if (P_active) {
        resultats.push(`Puissance active (P) : ${P_active.toFixed(2)} W`);
    }

    // Puissance réactive (Q = U1 * I1 * sin(φ) ou Q = U2 * I2 * sin(φ))
    if (Q_reactive) {
        resultats.push(`Puissance réactive (Q) : ${Q_reactive.toFixed(2)} VAR`);
    }

    // Rendement (η = (P2 / P1) * 100)
    if (P_active && S_apparente) {
        const η = (P_active / S_apparente) * 100;
        resultats.push(`Rendement (η) : ${η.toFixed(2)} %`);
    }

    // Résistance équivalente primaire (R_eq1 = R1 + R2 * (N1/N2)^2)
    if (R1 && R2 && N1 && N2) {
        const R_eq1 = R1 + R2 * Math.pow(N1 / N2, 2);
        resultats.push(`Résistance équivalente primaire (R_eq1) : ${R_eq1.toFixed(2)} Ω`);
    }

    // Résistance équivalente secondaire (R_eq2 = R2 + R1 * (N2/N1)^2)
    if (R1 && R2 && N1 && N2) {
        const R_eq2 = R2 + R1 * Math.pow(N2 / N1, 2);
        resultats.push(`Résistance équivalente secondaire (R_eq2) : ${R_eq2.toFixed(2)} Ω`);
    }

    // Afficher les résultats
    const resultatsListe = document.getElementById("resultats");
    resultatsListe.innerHTML = resultats.map(r => `<li>${r}</li>`).join("");
}