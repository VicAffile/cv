document.getElementById('algo').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('algo').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('cpp').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('cpp').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('css').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('css').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('html').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('html').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('java').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('java').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('js').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('js').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('math').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('math').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('mysql').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('mysql').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('nodejs').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('nodejs').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('php').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('php').querySelectorAll('span')[1].style.display = 'none';
document.getElementById('python').querySelectorAll('span')[0].style.display = 'contents';
document.getElementById('python').querySelectorAll('span')[1].style.display = 'none';
//document.getElementById('js').parentNode.querySelector('ul').style.display = 'none';

function competence_clique(e) {
    const fleches = e.querySelectorAll('span');
    const etat = fleches[0].style.display;
    fleches[0].style.display = fleches[1].style.display;
    fleches[1].style.display = etat;
    e.parentNode.querySelector('ul').style.display = etat;
}