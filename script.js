// script.js
function effectuerCalculs() {
    // Récupérer les valeurs des champs
    const U1 = parseFloat(document.getElementById("U1").value);
    const U2 = parseFloat(document.getElementById("U2").value);
    const I1 = parseFloat(document.getElementById("I1").value);
    const I2 = parseFloat(document.getElementById("I2").value);
    const R1 = parseFloat(document.getElementById("R1").value);
    const R2 = parseFloat(document.getElementById("R2").value);
    const Z = parseFloat(document.getElementById("Z").value);
    const N1 = parseFloat(document.getElementById("N1").value);
    const N2 = parseFloat(document.getElementById("N2").value);
    const f = parseFloat(document.getElementById("f").value);

    // Initialiser les résultats
    const resultats = [];

    // 1. Calculer le rapport de transformation (R = N1 / N2)
    if (N1 && N2) {
        const R = N1 / N2;
        resultats.push(`Rapport de transformation (R) : ${R.toFixed(2)} (sans unité)`);
    }

    // 2. Calculer la valeur efficace U2 (U2 = U1 / R)
    if (U1 && N1 && N2) {
        const R = N1 / N2;
        const U2_calcule = U1 / R;
        resultats.push(`Valeur efficace U2 : ${U2_calcule.toFixed(2)} V`);
    }

    // 3. Calculer la valeur efficace I2 (I2 = U2 / Z)
    if (U2 && Z) {
        const I2_calcule = U2 / Z;
        resultats.push(`Valeur efficace I2 : ${I2_calcule.toFixed(2)} A`);
    } else if (U1 && N1 && N2 && Z) {
        const R = N1 / N2;
        const U2_calcule = U1 / R;
        const I2_calcule = U2_calcule / Z;
        resultats.push(`Valeur efficace I2 : ${I2_calcule.toFixed(2)} A`);
    }

    // 4. Calculer la valeur efficace I1 (I1 = I2 / R)
    if (I2 && N1 && N2) {
        const R = N1 / N2;
        const I1_calcule = I2 / R;
        resultats.push(`Valeur efficace I1 : ${I1_calcule.toFixed(2)} A`);
    }

    // 5. Calculer la résistance équivalente vue du primaire (R_eq = R * Z)
    if (N1 && N2 && Z) {
        const R = N1 / N2;
        const R_eq = R * Z;
        resultats.push(`Résistance équivalente vue du primaire : ${R_eq.toFixed(2)} Ω`);
    }

    // 6. Calculer la puissance active au primaire (P = U1 * I1)
    if (U1 && I1) {
        const P = U1 * I1;
        resultats.push(`Puissance active au primaire : ${P.toFixed(2)} W`);
    }

    // 7. Calculer la puissance réactive au primaire (Q = 0 pour une charge résistive)
    if (Z) {
        resultats.push(`Puissance réactive au primaire : 0 VAR (charge résistive)`);
    }

    // 8. Calculer la puissance apparente au primaire (S = U1 * I1)
    if (U1 && I1) {
        const S = U1 * I1;
        resultats.push(`Puissance apparente au primaire : ${S.toFixed(2)} VA`);
    }

    // Afficher les résultats
    const resultatsListe = document.getElementById("resultats");
    resultatsListe.innerHTML = resultats.map(r => `<li>${r}</li>`).join("");
}