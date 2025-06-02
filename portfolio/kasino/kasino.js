function arvoNoppa() {
    const luku = Math.floor(Math.random() * 6) + 1;
    document.getElementById("noppa").textContent = luku;
}

function arvoLotto() {
    let numerot = new Set();
    while (numerot.size < 7) {
        numerot.add(Math.floor(Math.random() * 40) + 1);
    }
    const arvotut = Array.from(numerot).sort((a, b) => a - b);

    let kayttaja = [];
    for (let i = 1; i <= 7; i++) {
        let valinta = parseInt(document.getElementById("lotto" + i).value, 10);
        if (!isNaN(valinta) && valinta >= 1 && valinta <= 40) {
            kayttaja.push(valinta);
        }
    }

    let oikein = kayttaja.filter(n => arvotut.includes(n)).length;

    document.getElementById("lotto").textContent =
        "Arvotut numerot: " + arvotut.join(", ") +
        (kayttaja.length === 7 ? " | Oikein: " + oikein : " | Anna 7 numeroa!");
}