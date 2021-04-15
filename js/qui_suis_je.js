// Calcul de mon âge actuel
const date_de_naissance = new Date(2000, 3, 1);
const date_actuel = new Date();
document.getElementById('age').textContent = Math.trunc(date_actuel.getFullYear() - date_de_naissance.getFullYear() + (date_actuel.getMonth() - date_de_naissance.getMonth()) / 11);

function qui_suis_je_afficher_texte(e) {
    const fleches = e.querySelectorAll('span');
    const etat = fleches[0].style.display;
    let texte;
    for (let i = 0; i < e.parentNode.childNodes.length; i++) {
        if (e.parentNode.childNodes[i] == e) {
            texte = i + 2;
        }
    }
    fleches[0].style.display = fleches[1].style.display;
    fleches[1].style.display = etat;
    e.parentNode.childNodes[texte].style.display = etat;
}