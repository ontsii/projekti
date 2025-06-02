function poimiKirjain() {
    const teksti = document.getElementById("merkkijono").value;
    const kohta = parseInt(document.getElementById("kohta").value, 10);
    const tulosDiv = document.getElementById("tulos");

    if (teksti && kohta >= 1 && kohta <= teksti.length) {
        tulosDiv.textContent = teksti[kohta - 1];
    } else {
        tulosDiv.textContent = "";
    }
}

function loydaIndeksi() {
    const teksti = document.getElementById("teksti").value;
    const kirjain = document.getElementById("kirjain").value;
    const indeksiDiv = document.getElementById("indeksi");
    const indeksi = teksti.indexOf(kirjain);
    indeksiDiv.textContent = indeksi;
}

function leikkaaMerkkijono() {
    const teksti = document.getElementById("leikkaa-teksti").value;
    const alku = parseInt(document.getElementById("leikkaa-alku").value, 10);
    const loppu = parseInt(document.getElementById("leikkaa-loppu").value, 10);
    const tulosDiv = document.getElementById("leikkaa-tulos");

    if (teksti && alku >= 1 && loppu >= alku && loppu <= teksti.length) {
        tulosDiv.textContent = teksti.slice(alku - 1, loppu);
    } else {
        tulosDiv.textContent = "";
    }
}

function etsiJaKorvaa() {
    const teksti = document.getElementById("etsi-teksti").value;
    const haettava = document.getElementById("haettava").value;
    const korvaus = document.getElementById("korvaus").value;
    const tulosDiv = document.getElementById("korvaus-tulos");

    if (haettava) {
        tulosDiv.textContent = teksti.replaceAll(haettava, korvaus);
    } else {
        tulosDiv.textContent = teksti;
    }
}

function poikkiJaPinoon() {
    const teksti = document.getElementById("poikki-teksti").value;
    const erotin = document.getElementById("poikki-erotin").value;
    const ul = document.getElementById("poikki-tulos");
    ul.innerHTML = "";

    if (erotin === "") return;

    const osat = teksti.split(erotin);
    osat.forEach(osa => {
        const li = document.createElement("li");
        li.textContent = osa;
        ul.appendChild(li);
    });
}