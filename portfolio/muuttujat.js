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