// uživatel zadá dvě čísla, začátek a konec
// rozsahu

// vypište každé číslo v daném rozsahu

let zacatek = prompt("Zadej začátek rozsahu")
let konec = prompt("Zadej konec rozsahu")

zacatek = Number(zacatek);
konec = Number(konec);

for (let index = zacatek; index <= konec; index++) {
    document.write(index + "<br>")
}
