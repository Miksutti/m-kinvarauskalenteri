const date = new Date();

function lataaKalenteri(){

    const monthDays = document.querySelector("#paivamaarat");

    const kuunVikaPaiva = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();

    const edellinenVikaPaiva = new Date(date.getFullYear(),date.getMonth(),0).getDate();


    const ekaPaivaIndex = date.getDay() + 1;

    const vikaPaivaIndex = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();

    const tulevatPaivat = 7 - vikaPaivaIndex



    const kuukaudet = [
        "Tammikuu",
        "Helmikuu",
        "Maaliskuu",
        "Huhtikuu",
        "Toukokuu",
        "Kesäkuu",
        "Heinäkuu",
        "Elokuu",
        "Syyskuu",
        "Lokakuu",
        "Marraskuu",
        "Joulukuu",
    ];

    document.querySelector("#kuukausi").innerHTML = kuukaudet[date.getMonth()];

    let paivat = "";

    for (let x = ekaPaivaIndex; x > 0; x--) {
        paivat += `<div id="entinen">${edellinenVikaPaiva - x + 1}</div>`;
    }

    for (let i = 1; i <= kuunVikaPaiva; i++) {
        if (i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            paivat += `<div id="tamapaiva">${i}
            <p id="varaustanaan"></p>
            </div>`;
        } else {
            paivat += `<div>${i}
            <p id="varaus${i}"></p>
            </div>`;
        }
    }

    for (let j = 1; j <= tulevatPaivat; j++) {
        paivat += `<div id="tuleva">${j}</div>`;
        monthDays.innerHTML = paivat;
    }

}

document.querySelector("#edellinen").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    lataaKalenteri();
  });
  
document.querySelector("#seuraava").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    lataaKalenteri();
  });
  
lataaKalenteri();

function uusiVaraus() {
    var varaus
    varaus = prompt("Kirjoita varaajan nimi:")
    if (varaus != null) {
        document.getElementById("varaus").innerHTML =
        varaus;
      }
}

document.getElementById("paivamaarat").addEventListener("click", uusiVaraus);
