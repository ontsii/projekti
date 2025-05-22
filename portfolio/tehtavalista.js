console.log("Tehtävälista avattu");

let lista = ["Tehtävä 1", "Tehtävä 2"]

function paivitalista() {
    const ul = document.getElementById("tehtavalista");
    ul.innerHTML = "";

    for (let tehtava of lista) {
        const li = document.createElement("li");
        li.textContent = tehtava;
        ul.appendChild(li);
    }
}

function lisaa() {
    const input = document.getElementById("uusiTehtava");
    const toistotinput = document.getElementById("toistot");
    const uusi = input.value.trim();
    const toistot = parseInt(toistotinput.value);

    if (uusi !== "" && toistot > 0) {
        for (let i = 0; i < toistot; i++) {
            lista.push(uusi);
        }
        input.value = "";
        toistotinput.value = "";
        paivitalista();
    }
}

window.onload = paivitalista;