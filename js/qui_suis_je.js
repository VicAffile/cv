function fleche(e) {
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