
console.log("dneska je hezký den");

let pocetNavstev = 1;
let ucet = "Basic"

if (pocetNavstev >= 2 && (ucet === "Premium" || ucet === "Basic")) {
    console.log("Dobrý den, jsme rádi, že jste znovu přišel.");
    console.log("Rádi vás znovu vidíme.");
    console.log("Už jste u nás byl " + pocetNavstev + "krát.")
    if (pocetNavstev <= 5 && ucet === "Premium") {
        console.log("Letenka do Vídně stojí 5000 Kč.")
    } else {
        console.log("Letenka do Vídně za 20 000 Kč.")
    }
} else {
    console.log("Vítejte.");
    console.log("Máme výborné a levné letenky v akci.")
    console.log("Pouze dnes, letenky do Vídně za 4000 Kč.")
}
console.log("Prase - tohle se vytiskne vždycky...");
    





