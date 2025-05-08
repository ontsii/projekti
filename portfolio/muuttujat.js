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
    if (b === 0) {
        alert("Nollalla ei voi jakaa!");
    } else {
        alert(a / b);
    }
}

function laskin_summa() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    if (!isNaN(eka) && !isNaN(toka)) {
        summa(eka, toka);
    } else {
        alert("Syötä molemmat luvut!");
    }
}

function laskin_vahennys() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    if (!isNaN(eka) && !isNaN(toka)) {
        vahennys(eka, toka);
    } else {
        alert("Syötä molemmat luvut!");
    }
}

function laskin_kerto() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    if (!isNaN(eka) && !isNaN(toka)) {
        kerto(eka, toka);
    } else {
        alert("Syötä molemmat luvut!");
    }
}

function laskin_jako() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    if (!isNaN(eka) && !isNaN(toka)) {
        jako(eka, toka);
    } else {
        alert("Syötä molemmat luvut!");
    }
}