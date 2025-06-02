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

function abs() {
    const eka = parseFloat(document.getElementById("numero1").value);
    alert(Math.abs(eka));
}

function sqrt() {
    const eka = parseFloat(document.getElementById("numero1").value);
    alert(Math.sqrt(eka));
}

function pow() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    alert(Math.pow(eka, toka));
}

function max() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    alert(Math.max(eka, toka));
}

function min() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    alert(Math.min(eka, toka));
}

function round() {
    const eka = parseFloat(document.getElementById("numero1").value);
    alert(Math.round(eka));
}