
const incInput = document.getElementById('inc');
const decInput = document.getElementById('dec');
const scInput = document.getElementById('sc');
const totalInput = document.getElementById('total');

function calculerSomme() {
    const inc = parseFloat(incInput.value) || 0;
    const dec = parseFloat(decInput.value) || 0;
    const sc = parseFloat(scInput.value) || 0;
    return (2 * inc) + dec + sc;
}

// Fonction pour mettre à jour le total
function mettreAJourTotal(increment) {
    const somme = calculerSomme();

    if (somme === 0) {
        output.textContent = "La somme est 0, impossible de modifier le total.";
        return;
    }

    let currentTotal = parseFloat(totalInput.value) || 0;
    currentTotal += increment * somme; // Modifier par multiples de la somme
    totalInput.value = currentTotal;

    process();
}

// Ajouter des écouteurs d'événements pour les boutons
document.getElementById('augmenter').addEventListener('click', function () {
    mettreAJourTotal(1); // Incrémenter
});

document.getElementById('diminuer').addEventListener('click', function () {
    mettreAJourTotal(-1); // Décrémenter
});

document.getElementById('process').addEventListener('click', process);

function process() {
    const inputString = dostuf();

    // Créer l'output en fonction des valeurs 0, 1, 2
    let outputString = "";

    // Boucle sur chaque caractère de la chaîne d'entrée
    for (let i = 1; i <= inputString.length; i++) {
        switch (inputString[i - 1]) {
            case '0':
                outputString += `<span style="color:#8BE9FD;">${i}</span> `;
                break;
            case '1':
                outputString += `<span style="color:#50FA7B;">${i}</span> `;
                break;
            case '2':
                outputString += `<span style="color:#BD93F9;">${i}</span> `;
                break;
            default:
                outputString += `${i} `; // En cas d'autres caractères (optionnel)
        }
    }

    // Afficher l'output dans l'élément HTML prévu
    document.getElementById('output').innerHTML = outputString;
}

function dostuf() {

    const inc = parseFloat(incInput.value) || 0;
    const dec = parseFloat(decInput.value) || 0;
    const sc = parseFloat(scInput.value) || 0;
    const total = parseFloat(document.getElementById('total').value) || 0;

    const sum = 2 * inc + dec + sc;
    let res = ""
    for (let index = 1; index <= total; index++) {
        if ((index % sum >= 1 && index % sum <= sc) || (index % sum == 0 && dec == 0 && inc == 0)) res += "0";
        else {
            if ((index % sum > sc && index % sum <= sc + dec) || ((index % sum == 0 && dec != 0 && inc == 0)))
                res += "1"
            else
                res += "2"
        }
    }
    console.debug("Nombre de mailles nécessaires : " + (inc + 2 * dec + sc) * (total/sum));
    return res;
}

function doChange() {
    const inc = parseFloat(incInput.value) || 0;
    const dec = parseFloat(decInput.value) || 0;
    const sc = parseFloat(scInput.value) || 0;

    const total = 2 * inc + dec + sc;
    document.getElementById("total").value = total;

    process();
}

function resetData() {
    incInput.value = 0;
    decInput.value = 0;
    scInput.value = 0;
    totalInput.value = 0;
}