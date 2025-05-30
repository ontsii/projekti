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
    new Date();
}