let lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    const ul = document.getElementById("tehtavalista");
    ul.innerHTML = lista.map(tehtava => `<li>${tehtava}</li>`).join("");
}

function lisaa() {
    const input = document.getElementById("Tehtava");
    if (input.value.trim()) {
        lista.push(input.value.trim());
        paivitaLista();
        input.value = "";
    } else {
        alert("Kirjoita ensin tehtävä!");
    }
}

paivitaLista();