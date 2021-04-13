document.getElementById('qui_suis_je_presentation_titre').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('qui_suis_je_presentation_titre').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('qui_suis_je_passion_titre').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('qui_suis_je_passion_titre').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('qui_suis_je_job_titre').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('qui_suis_je_job_titre').querySelectorAll('span')[1].style.display = 'none';

function fleche(e) {
    let fleche = e.querySelectorAll("span");
    let texte;
    for (let i = 0; i < e.parentNode.childNodes.length; i++) {
        if (e.parentNode.childNodes[i] == e) {
            texte = i + 2;
        }
    }
    let etat = fleche[0].style.display;
    fleche[0].style.display = fleche[1].style.display;
    fleche[1].style.display = etat;
    e.parentNode.childNodes[texte].style.display = etat;
}