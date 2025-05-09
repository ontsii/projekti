console.log("Keskustelusivu avattu");

function send(event) {
    event.preventDefault();

    const birthdayField = document.getElementById("syntymäpäivä");
    const emailField = document.getElementById("Sähköposti");
    const typeField = document.getElementById("tyyppi");
    const commentField = document.getElementById("comment");
    const consentField = document.getElementById("consent");

    const birthday = birthdayField.value;
    const email = emailField.value;
    const type = typeField.value;
    const comment = commentField.value;
    const consent = consentField.checked;

    console.log("Syntymäpäivä:", birthday);
    console.log("Sähköposti:", email);
    console.log("Viestin tyyppi:", type);
    console.log("Kommentti:", comment);
    console.log("Suostumus:", consent ? "Kyllä" : "Ei");

    const dialog = document.getElementById("comment-dialog");
    dialog.close();
}