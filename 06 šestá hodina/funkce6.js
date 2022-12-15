// arrow funkce
let pitiPiva = znacka => {
    console.log("Sednu si ke stolu");
    console.log("Objednám si kozla");
    console.log("Počkám až mi ho přinesou");
    console.log("Vypiju ho na ex");
    console.log("Krknu si");
}

let scitaniDelsiVerze = (cislo1, cislo2) => {
    return cislo1 + cislo2;
}

// jen pro zvídavé - jak zkrátit výše uvedenou funkci
let scitani = (cislo1, cislo2) => cislo1 + cislo2;

let pitiPiva2 = (znacka, jakHoPiju) => {
    console.log("Sednu si ke stolu");
    console.log("Objednám si pivo značky " + znacka);
    console.log("Počkám až mi ho přinesou");
    console.log("Vypiju ho " + jakHoPiju);
    console.log("Krknu si");
}

pitiPiva2("Braník", "na ex");