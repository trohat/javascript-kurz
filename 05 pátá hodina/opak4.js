// uživatel zadá dvě čísla, začátek a konec
// rozsahu

// vypište každé čtvrté číslo v daném rozsahu

let zacatek = prompt("Zadej začátek rozsahu")
let konec = prompt("Zadej konec rozsahu")

zacatek = Number(zacatek);
konec = Number(konec);

if (konec <= zacatek) {
    document.write("Zadal jsi špatný rozsah!!")
} else {
    for (let index = zacatek; index <= konec; index += 4) {
        document.write(index + "<br>")
    }
}

