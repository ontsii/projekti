console.log("Portfolio sivu avattu");

const henkilot =
[
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    },
]

function laheta() {
    const nimi = document.getElementById("nimi").value;
    const ika = document.getElementById("ika").value;
    const tyo = document.getElementById("tyo").value;
    const ajokortti = document.getElementById("ajokortti").checked;

    if (ika <= 0) {
        alert("iän pitää olla positiivinen luku.");
    }
    else {
        const henkilo = {
            name: nimi,
            age: ika,
            job: tyo,
            driversLicense: ajokortti ? true : false
        };

        henkilot.push(henkilo);
        luoRivit();

        document.getElementById("nimi").value = "";
        document.getElementById("ika").value = "";
        document.getElementById("tyo").value = "";
        document.getElementById("ajokortti").checked = false;
    }


}

function luoRivit() {
    const tbody = document.getElementById("rivit"); 
    tbody.innerHTML = ""; 

    henkilot.forEach(henkilo => {
        const rivi = document.createElement("tr"); 

        const nimiTd = document.createElement("td");
        nimiTd.innerHTML = henkilo.name;

        const ikaTd = document.createElement("td");
        ikaTd.innerHTML = henkilo.age >= 18 ? `${henkilo.age} 🍺` : henkilo.age;

        const tyoTd = document.createElement("td");
        tyoTd.innerHTML = henkilo.job.toLowerCase() === "opiskelija" ? `${henkilo.job} 🎓` : henkilo.job;

        const ajokorttiTd = document.createElement("td");
        ajokorttiTd.innerHTML = henkilo.driversLicense ? "true" : "false";

        rivi.append(nimiTd, ikaTd, tyoTd, ajokorttiTd);

        tbody.appendChild(rivi);
    });
}

luoRivit();






