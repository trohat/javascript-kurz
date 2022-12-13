//  vypiš čísla od 1 do 100,
// ale pouze pokud jsou násobky zvoleného čísla

let cislo = prompt("Zadej číslo, jehož násobky chceš vidět");

cislo = Number(cislo);


for (let index = 1; index <= 100; index++) {
    if (index % cislo === 0) {
        document.write(index + " je násobkem čísla " + cislo + "<br>");
    } 
}

for (let index = cislo; index <= 100; index = index + cislo) {
    document.write(index + " je násobkem čísla " + cislo + "<br>");
}



