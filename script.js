const date = new Date();

function lataaKalenteri(){
    date.setDate(1);

    const monthDays = document.querySelector("#paivamaarat");

    const kuunVikaPaiva = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();

    const edellinenVikaPaiva = new Date(date.getFullYear(),date.getMonth(),0).getDate();


    const ekaPaivaIndex = date.getDay() - 1;

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
            paivat += `<div id="${i}">${i}
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


document.getElementById("1").addEventListener("click", varaus);
document.getElementById("2").addEventListener("click", varaus);
document.getElementById("3").addEventListener("click", varaus);
document.getElementById("4").addEventListener("click", varaus);
document.getElementById("5").addEventListener("click", varaus);
document.getElementById("6").addEventListener("click", varaus);
document.getElementById("7").addEventListener("click", varaus);
document.getElementById("8").addEventListener("click", varaus);
document.getElementById("9").addEventListener("click", varaus);
document.getElementById("10").addEventListener("click", varaus);
document.getElementById("11").addEventListener("click", varaus);
document.getElementById("12").addEventListener("click", varaus);
document.getElementById("13").addEventListener("click", varaus);
document.getElementById("14").addEventListener("click", varaus);
document.getElementById("15").addEventListener("click", varaus);
document.getElementById("16").addEventListener("click", varaus);
document.getElementById("17").addEventListener("click", varaus);
document.getElementById("18").addEventListener("click", varaus);
document.getElementById("19").addEventListener("click", varaus);
document.getElementById("20").addEventListener("click", varaus);
document.getElementById("21").addEventListener("click", varaus);
document.getElementById("22").addEventListener("click", varaus);
document.getElementById("23").addEventListener("click", varaus);
document.getElementById("24").addEventListener("click", varaus);
document.getElementById("25").addEventListener("click", varaus);
document.getElementById("26").addEventListener("click", varaus);
document.getElementById("27").addEventListener("click", varaus);
document.getElementById("28").addEventListener("click", varaus);
document.getElementById("29").addEventListener("click", varaus);
document.getElementById("30").addEventListener("click", varaus);
document.getElementById("31").addEventListener("click", varaus);
// document.getElementById("tamapaiva").addEventListener("click", varaustamapaiva);


function varaus() {
    console.log(this.id)
    var x = document.getElementById("paivamaarat").querySelectorAll("p");
    // var vanhavaraus = window.sessionStorage.getItem("uusivaraus");
    var varaus;
    varaus = prompt("Kirjoita varaajan nimi:");
    window.sessionStorage.setItem("uusivaraus", varaus)
    if (this.id == 1) {
        x[0].innerHTML = varaus;
        x[0].style.backgroundColor = "red";
    } else if (this.id == 2) {
        x[1].innerHTML = varaus;
        x[1].style.backgroundColor = "red";
    } else if (this.id == 3) {
        x[2].innerHTML = varaus;
        x[2].style.backgroundColor = "red";
    } else if (this.id == 4) {
        x[3].innerHTML = varaus;
        x[3].style.backgroundColor = "red";
    } else if (this.id == 5) {
        x[4].innerHTML = varaus;
        x[4].style.backgroundColor = "red";
    } else if (this.id == 6) {
        x[5].innerHTML = varaus;
        x[5].style.backgroundColor = "red";
    } else if (this.id == 7) {
        x[6].innerHTML = varaus;
        x[6].style.backgroundColor = "red";
    } else if (this.id == 8) {
        x[7].innerHTML = varaus;
        x[7].style.backgroundColor = "red";
    } else if (this.id == 9) {
        x[8].innerHTML = varaus;
        x[8].style.backgroundColor = "red";
    } else if (this.id == 10) {
        x[9].innerHTML = varaus;
        x[9].style.backgroundColor = "red";
    } else if (this.id == 11) {
        x[10].innerHTML = varaus;
        x[10].style.backgroundColor = "red";
    } else if (this.id == 12) {
        x[11].innerHTML = varaus;
        x[11].style.backgroundColor = "red";
    } else if (this.id == 13) {
        x[12].innerHTML = varaus;
        x[12].style.backgroundColor = "red";
    } else if (this.id == 14) {
        x[13].innerHTML = varaus;
        x[13].style.backgroundColor = "red";
    } else if (this.id == 15) {
        x[14].innerHTML = varaus;
        x[14].style.backgroundColor = "red";
    } else if (this.id == 16) {
        x[15].innerHTML = varaus;
        x[15].style.backgroundColor = "red";
    } else if (this.id == 17) {
        x[16].innerHTML = varaus;
        x[16].style.backgroundColor = "red";
    } else if (this.id == 18) {
        x[17].innerHTML = varaus;
        x[17].style.backgroundColor = "red";
    } else if (this.id == 19) {
        x[18].innerHTML = varaus;
        x[18].style.backgroundColor = "red";
    } else if (this.id == 20) {
        x[19].innerHTML = varaus;
        x[19].style.backgroundColor = "red";
    } else if (this.id == 21) {
        x[20].innerHTML = varaus;
        x[20].style.backgroundColor = "red";
    } else if (this.id == 22) {
        x[21].innerHTML = varaus;
        x[21].style.backgroundColor = "red";
    } else if (this.id == 23) {
        x[22].innerHTML = varaus;
        x[22].style.backgroundColor = "red";
    } else if (this.id == 24) {
        x[23].innerHTML = varaus;
        x[23].style.backgroundColor = "red";
    } else if (this.id == 25) {
        x[24].innerHTML = varaus;
        x[24].style.backgroundColor = "red";
    } else if (this.id == 26) {
        x[25].innerHTML = varaus;
        x[25].style.backgroundColor = "red";
    } else if (this.id == 27) {
        x[26].innerHTML = varaus;
        x[26].style.backgroundColor = "red";
    } else if (this.id == 28) {
        x[27].innerHTML = varaus;
        x[27].style.backgroundColor = "red";
    } else if (this.id == 29) {
        x[28].innerHTML = varaus;
        x[28].style.backgroundColor = "red";
    } else if (this.id == 30) {
        x[29].innerHTML = varaus;
        x[29].style.backgroundColor = "red";
    } else if (this.id == 31) {
        x[30].innerHTML = varaus;
        x[30].style.backgroundColor = "red";
    }
/*
function varaustamapaiva() {
    var varaus
    varaus = prompt("Kirjoita varaajan nimi:")
    if (varaus != null) {
        document.getElementById("varaustanaan").innerHTML = varaus;
        document.getElementById("varaustanaan").style.backgroundColor = "red";
    }
}

document.getElementById("tamapaiva").addEventListener("click", varaustamapaiva);
*/
}
