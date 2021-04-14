function afficher_menu() {
    console.log('yo')
    if (document.getElementById('etiquette').style.right == '-200px') {
        console.log('yes');
        document.getElementById('etiquette').style.right = '0px'
    } else if (document.getElementById('etiquette').style.right == '0px') {
        console.log('no')
        document.getElementById('etiquette').style.right = '-200px'
    }
}