function scitani(cislo1, cislo2) {
    let vysledek = cislo1 + cislo2;
    return vysledek;
    // další kod napsaný zde nikdy neproběhne
}

let soucet = scitani(5, 7);
//let soucet = 12
console.log("Výsledek sčítání je " + soucet);

console.log(scitani(4, 10));
console.warn(scitani(56, 53));
console.error(scitani(10, 53));
alert(scitani(5,9));
document.write(scitani(1,1))