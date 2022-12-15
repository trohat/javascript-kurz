console.log("Ahoj zdravím");

// uživatel zadá dvě čísla, vypočítej mocninu, první číslo umocněné na druhou
// výsledek vypiš do konzole
// nesmíš používat operaci **, musíš si poradit nějak jinak

console.log("Ahoj, tohle je program na mocnění čísel");
let zaklad = prompt("Zadej základ k umocnění:");
let mocnina = prompt("Zadej mocninu");

let vysledek = 1;

for (let index = 0; index < mocnina; index++) {
    vysledek = vysledek * zaklad;
}

console.log(zaklad + " na " + mocnina + " vyjde " + vysledek);

//5^3 = 5 * 5 * 5
//5^6 = 5 * 5 * 5 * 5 * 5 * 5  