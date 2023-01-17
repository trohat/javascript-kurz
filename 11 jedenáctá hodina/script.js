/*
let body = document.body;
let h1 = body.firstChild.nextSibling;
let firstParagraph = h1.nextSibling.nextSibling;
console.log(firstParagraph.parentNode === document.body);
firstParagraph.innerHTML = "Tohle je nový text prvního odstavce";
let secondParagraph = firstParagraph.nextElementSibling;
secondParagraph.innerHTML = "<button>Neklikat</button>";
*/
/*
let prostredniOdstavec = document.getElementsByTagName("p")[2];
prostredniOdstavec.innerHTML = "Ne jedna, ale patnáct";
let h1 = document.getElementById("hlavni-nadpis");

let odstavce = document.getElementsByClassName("cerveny");
odstavce[1].remove();
odstavce[0].parentNode.replaceChild(odstavce[2], odstavce[0]);
*/
document.querySelector("h1");
document.querySelector("p");
document.querySelector("#hlavni-nadpis");
document.querySelector(".cerveny");
document.querySelector("div p.cerveny");


let cerveneOdstavce = document.querySelectorAll("p.cerveny");
let prvni = cerveneOdstavce[0];
prvni.innerHTML = "Tohle je první odstavec";

prvni.style.color = "red";
prvni.style.border = "2px solid brown";
prvni.style.backgroundColor = "green";
prvni.style.padding = "10px";
prvni.style.display = "inline-block";