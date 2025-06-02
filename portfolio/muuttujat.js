function summa(a, b) {
    alert(a + b);
}

function vahennys(a, b) {
    alert(a - b);
}

function kerto(a, b) {
    alert(a * b);
}

function jako(a, b) {
    alert(a / b);
}

function laskin_summa() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    alert(eka + toka);
}

function laskin_vahennys() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    alert(eka - toka);
}

function laskin_kerto() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    alert(eka * toka);
}

function laskin_jako() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
        alert(eka / toka);
    
}

function paivamaara() {
    const nyt = new Date();

    const paiva = nyt.getDate();
    const kuukausi = nyt.getMonth() + 1; 
    const vuosi = nyt.getFullYear();
    document.getElementById("paivamaara").innerHTML = `${paiva}.${kuukausi}.${vuosi}`;

    const tunti = nyt.getHours();
    const minuutti = nyt.getMinutes();
    const sekunti = nyt.getSeconds();
    document.getElementById("aika").innerHTML = `${tunti}:${minuutti}:${sekunti}`;

    document.getElementById("paivaJaAika").innerHTML = `${paiva}.${kuukausi}.${vuosi} klo ${tunti}:${minuutti}:${sekunti}`;

    document.getElementById("viikonpaiva").innerHTML = `${nyt.toLocaleDateString('fi-FI', { weekday: 'long' })}`;
    document.getElementById("kuukausi").innerHTML = `${nyt.toLocaleDateString('fi-FI', { month: 'long' })}`;    
}


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
