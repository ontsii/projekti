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
    const input = document.getElementById("uusi");
    const maara = parseInt(document.getElementById("toisto").value);
    const uusi = input.value.trim();

    if (uusi && maara > 0) {
        lista.push(...Array(maara).fill(uusi));
        input.value = "";
        document.getElementById("toisto").value = "";
        paivitalista();
    } 
}

window.onload = paivitalista;