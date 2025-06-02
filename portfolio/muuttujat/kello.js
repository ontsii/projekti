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


