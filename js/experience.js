const date_embauche_marche = new Date(2017, 7);
const date_embauche_inter = new Date(2020, 6);

function annee(date) {
    const mois_passe = date_actuel.getMonth() - date.getMonth();
    const annee_passe = Math.trunc(date_actuel.getFullYear() - date.getFullYear() + mois_passe / 11);
    if (annee_passe > 0) {
        return annee_passe + " ans";
    }
}

function mois(date) {
    const mois_passe = date_actuel.getMonth() - date.getMonth();
    const annee_passe = Math.trunc(date_actuel.getFullYear() - date.getFullYear() + mois_passe / 11);
    let afficher = "";
    if (mois_passe != 0 & annee_passe > 0) {
        afficher = " et ";
    }
    if (mois_passe < 0) {
        return afficher + (12 + mois_passe) + " mois"
    } else if (mois_passe > 0) {
        return afficher + mois_passe + " mois"
    }
}

document.getElementById('annee_marche').textContent = annee(date_embauche_marche);
document.getElementById('mois_marche').textContent = mois(date_embauche_marche);
document.getElementById('annee_inter').textContent = annee(date_embauche_inter);
document.getElementById('mois_inter').textContent = mois(date_embauche_inter);