// Lògica de tirades amb etiquetes per a Foundry VTT

// Funció per calcular el resultat d'una tirada
function calcularTirada(valorBase, modificadors) {
    const resultatDau = Math.floor(Math.random() * 10) + 1; // Llançament d1d10
    const resultatTotal = resultatDau + valorBase + modificadors;

    // Determinar etiqueta segons el resultat
    let etiqueta;
    if (resultatDau === 1) {
        etiqueta = "PIFIA"; // Fracàs automàtic
    } else if (resultatTotal < 5) {
        etiqueta = "FRACÀS";
    } else if (resultatTotal >= 5 && resultatTotal < 9) {
        etiqueta = "ÈXIT PARCIAL";
    } else {
        etiqueta = "ÈXIT";
    }

    // Retornar el resultat i l'etiqueta
    return {
        dau: resultatDau,
        total: resultatTotal,
        etiqueta: etiqueta
    };
}

// Exemple de com mostrar els resultats al xat
function mostrarTiradaAlXat(actor, capacitat, resultat) {
    const missatge = `
        <b>${actor}</b> llança per <b>${capacitat}</b>:<br>
        <b>Resultat del dau:</b> ${resultat.dau}<br>
        <b>Total:</b> ${resultat.total}<br>
        <b>Etiqueta:</b> ${resultat.etiqueta}
    `;
    ChatMessage.create({
        content: missatge
    });
}
