document.getElementById('qui_suis_je_presentation_titre').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('qui_suis_je_presentation_titre').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('qui_suis_je_passion_titre').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('qui_suis_je_passion_titre').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('qui_suis_je_job_titre').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('qui_suis_je_job_titre').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('qui_suis_je_ecole_titre').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('qui_suis_je_ecole_titre').querySelectorAll('span')[1].style.display = 'none';

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