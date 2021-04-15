function competence_afficher_texte(e) {
    const fleches = e.querySelectorAll('span');
    const etat = fleches[0].style.display;
    fleches[0].style.display = fleches[1].style.display;
    fleches[1].style.display = etat;
    e.parentNode.querySelector('ul').style.display = etat;
}