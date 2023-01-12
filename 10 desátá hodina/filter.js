/*
Těžší
3.) Napiš funkci, která vezme pole čísel a vrátí z něj nové pole, ve kterém 
jsou ponechaná
jen čísla menší než 5.*/


function filtrujMensiNezPet(pole) {
    let novePole = [];
    for (let index = 0; index < pole.length; index++) {
        let prvek = pole[index];
        if (prvek < 5) {
            novePole.push(prvek);
        }
    }
    return novePole;
}

//console.log(filtrujMensiNezPet(pole));



function filtruj(pole, podminka) {
    let novePole = [];
    for (let index = 0; index < pole.length; index++) {
        let prvek = pole[index];
        if (podminka(prvek)) {
            novePole.push(prvek);
        }
    }
    return novePole;
}

//console.log(filtruj(pole, vetsiNezPet));


/*
const vetsiNezPet = cislo => cislo > 5;

console.log(pole.filter(vetsiNezPet));

const suda = cislo => cislo % 2 === 0;
const licha = cislo => cislo % 2 === 1;

//console.log(pole.filter(suda))
console.log(pole.filter(licha))
*/
const dvakratTolik = cislo => 2 * cislo;

function dvakrat(cislo) {
    return 2 * cislo;
}


const pole = [7, 8, 3, 1, 15, 2, 59, 1, 5, 8, 4];
console.log(pole.map(dvakratTolik));

const pridej = slovo => slovo + " 💩";

poleSlov = [ "ananas", "banán", "jablko", "hruška"];

console.log(poleSlov.map(pridej));
console.log(poleSlov.map(slovo => slovo + "🍏"));
console.log(poleSlov.map(slovo => slovo.toUpperCase()));

const scitani = (a, b) => a + " " +  b + "🍎";

//console.log(pole.reduce(scitani));
console.log(poleSlov.reduce(scitani, ""));