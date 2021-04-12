function envoi() {
    let identite = document.getElementById("identite").value;
    let adresse_email = document.getElementById("adresse_email").value;
    let sujet = document.getElementById("sujet").value;
    let message = document.getElementById("message").value;

    if (identite.length == 0) {
        alert("Saisir votre identité");
        return;
    }

    if (adresse_email.length == 0) {
        alert("Saisir une adresse email où vous recontacter");
        return;
    }

    if (sujet.length == 0) {
        sujet.value = "Sujet non renseigné";
    }

    if (message.length == 0) {
        alert("Saisir un message");
        return;
    }

    let url = "mailto:" + encodeURIComponent(adresse_email.value) + "?subject=" + encodeURIComponent(sujet.value) + "&body=" + encodeURIComponent(message.value);
    document.location = url;
}