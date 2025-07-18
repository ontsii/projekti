const veijo = new Set(["luku", "poisto"]);
const elvira = new Set(["luku", "kirjoitus", "muokkaus"]);
const mehdi = new Set(["luku", "poisto", "muokkaus"]);
const tuuli = new Set(["kirjoitus", "poisto"]);

function kayttajaoikeudet(kayttajaId, oikeudet) {
    const ul = document.querySelector(`#${kayttajaId.toLowerCase()} ul`);
    ul.innerHTML = "";
    oikeudet.forEach(oikeus => {
        const li = document.createElement("li");
        li.textContent = oikeus;
        ul.appendChild(li);
    });
}

kayttajaoikeudet("veijo", veijo);
kayttajaoikeudet("elvira", elvira);
kayttajaoikeudet("mehdi", mehdi);
kayttajaoikeudet("tuuli", tuuli);

const veijotuuli = new Set([...veijo, ...tuuli]);
const veijotuuliUl = document.getElementById("veijoTuuli");
veijotuuliUl.innerHTML = "";
veijotuuli.forEach(oikeus => {
    const li = document.createElement("li");
    li.textContent = oikeus;
    veijotuuliUl.appendChild(li);
});

const mehdielvira = new Set([...mehdi].filter(x => elvira.has(x)));
const mehdielviraUl = document.getElementById("mehdiElvira");
mehdielviraUl.innerHTML = "";
mehdielvira.forEach(oikeus => {
    const li = document.createElement("li");
    li.textContent = oikeus;
    mehdielviraUl.appendChild(li);
});

const elviratuuli = new Set([
    ...[...elvira].filter(x => !tuuli.has(x)),
    ...[...tuuli].filter(x => !elvira.has(x))
]);
const elviratuuliUl = document.getElementById("ElviraTuuli");
elviratuuliUl.innerHTML = "";
elviratuuli.forEach(oikeus => {
    const li = document.createElement("li");
    li.textContent = oikeus;
    elviratuuliUl.appendChild(li);
});
