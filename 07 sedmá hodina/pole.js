const pritomniStudenti = ["Tomáš", 
"Vlado", 
"Martin", 
"Petr", 
"Jana"];

pritomniStudenti.push("Jirka");

console.log("První student je:");
console.log(pritomniStudenti[0]);

console.log("Třetí student je:");
console.log(pritomniStudenti[2]);

console.log("Celkový počet studentů je:");
console.log(pritomniStudenti.length);

console.log("Poslední student se jmenuje: (vypíše se 2x)");
console.log(pritomniStudenti[pritomniStudenti.length - 1]);
console.log(pritomniStudenti.at(-1));

for (let i = 0; i < pritomniStudenti.length; i++) {
    console.log("Zdravím studenta jménem " + pritomniStudenti[i]);
}

const cenyPiva = [21, 22, 23, 24, 20, 19, 35];

for (let i = 0; i < cenyPiva.length; i++) {
    document.write("<p>Den číslo " + (i + 1) + ". ");
    document.write("Pivo stojí " + cenyPiva[i] + " Kč.</p>");
}




