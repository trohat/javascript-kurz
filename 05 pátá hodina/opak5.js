// uživatel zadá dvě čísla, začátek a konec
// rozsahu

// vypište každé čtvrté číslo v daném rozsahu
let zacatek;
let konec;

zacatek = prompt("Zadej začátek rozsahu")
konec = prompt("Zadej konec rozsahu")

for (;;) {
    zacatek = Number(zacatek);
    konec = Number(konec);

    if (zacatek < konec) {
        break;
    } else {
        zacatek = prompt("Zadal jsi blbost, zadej znovu:")
        konec = prompt("Zadej druhé číslo znovu:")
    }
}


for (let index = zacatek; index <= konec; index += 4) {
    document.write(index + "<br>")
}
