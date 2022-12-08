// jednoduchý while cyklus

let i = 0;

while (i < 7) {
    console.log("Ahoj kamarádko");
    i++;
}

// odsud dolů už to bude složitější

let index = 0;

while (index < 7) {
    index++;
    if (index === 2) {
        continue;
    }
    console.log("Ahoj kamarádko");
    console.log("Index je " + index);
    if (index === 5) {
        break;
    }
}

while (true) {
    console.log("Tohle je nekonečný cyklus");
    console.log("Dá se ukončit heslem");
    heslo = prompt("Zadej heslo");
    console.log("Zadal jsi heslo: " + heslo);
    if (heslo === "opice") {
        break;
    }
}


