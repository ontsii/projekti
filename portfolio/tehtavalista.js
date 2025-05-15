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
    const input = document.getElementById("tehtava");
    const uusi = input.value.trim();

    if (uusi !== "") {
        lista.push(uusi);
        input.value = "";
        paivitalista();
    }
}

window.onload = paivitalista;