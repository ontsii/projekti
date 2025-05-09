console.log("työkokemus sivu avattu");

function send() {
    const birthdayField = document.getElementById("syntymäpäivä");
    const emailField = document.getElementById("sähköposti");
    const typeField = document.getElementById("tyyppi");
    const usageField = document.getElementById("usage");
    const bodyField = document.getElementById("body");

    const birthday = birthdayField.value;
    const email = emailField.value;
    const type = typeField.value;
    const usage = usageField.value;
    const body = bodyField.value;

    console.log("Syntymäpäivä:", birthday);
    console.log("Sähköposti:", email);
    console.log("Tyyppi:", type);
    console.log("Käyttö:", usage);
    console.log("Viesti:", body);

    const dialog = document.querySelector("dialog");
    dialog.close();
}