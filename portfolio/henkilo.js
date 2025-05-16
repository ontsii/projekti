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

function luoRivit() {
    const tbody = document.getElementById("rivit"); 
    tbody.innerHTML = ""; 

    henkilot.forEach(henkilo => {
        const rivi = document.createElement("tr"); 

        const nimiTd = document.createElement("td");
        nimiTd.innerHTML = henkilo.name;

        const ikaTd = document.createElement("td");
        ikaTd.innerHTML = henkilo.age;

        const tyoTd = document.createElement("td");
        tyoTd.innerHTML = henkilo.job;

        const ajokorttiTd = document.createElement("td");
        ajokorttiTd.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

        rivi.append(nimiTd, ikaTd, tyoTd, ajokorttiTd);

        tbody.appendChild(rivi);
    });
}

luoRivit();






