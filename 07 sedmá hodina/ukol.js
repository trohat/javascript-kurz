console.log("děláme lehčí verzi úkolu 6...");

while (true) {
    let operace = prompt("Zadej operaci (1 - sčítání, 2 - odečítání, 0 - skončit)");
    if (operace == 0) {
        break;
    } else {
        console.log("Zadal jsi operaci číslo " + operace);
    }
} 

