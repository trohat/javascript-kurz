let str = "    Radegast je moje nejoblíbenější pivo    ";

str = str.trim();

console.log(str + "tady je konec");

str = str.toUpperCase();

console.log(str);

let novyRetezec = str.replace("RADEGAST", "Gambrinus");

console.log(novyRetezec);