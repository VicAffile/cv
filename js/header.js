function afficher_menu() {
    if (document.getElementById('etiquette').style.right == '-200px') {
        document.getElementById('etiquette').style.right = '0px'
    } else if (document.getElementById('etiquette').style.right == '0px') {
        document.getElementById('etiquette').style.right = '-200px'
    }
}