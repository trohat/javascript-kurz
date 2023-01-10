// <=-------------------------------------------------- Section A --------------------------------------------------=> //
// TASK 1 
// function declaration = deklarace funkce
function perimeter(a, b) {
    return 2 * (a + b)
}
// ještě existuje function expression
// ještě existuje arrow funkce - velmi oblíbený způsob v posledních letech

console.log("Section A - Task 1: " + perimeter(2, 3) + '\n')

// TASK 2
function areaOfaCircle(r) {
    return Math.PI * (r ** 2)
}

console.log("Section A - Task 2: " + areaOfaCircle(50) + '\n')

// TASK 3
function maxNumber(a, b) {
    if (a < b) {
        return b;
    }
    else if (a > b) {
        return a;
    }
    else if (a === b) {
        console.error("obě čísla jsou stejná, chyba");
        return;
    }
}

console.log("Section A - Task 3: " + maxNumber(50, 69) + '\n')
console.log(maxNumber(69, 50));
console.log(maxNumber(50, 50));

// TASK 4
function averageNumber(a, b, c) {
    return (a + b + c) / 3
}

console.log("Section A - Task 4: " + averageNumber(7, 3, 8) + '\n')


// <=-------------------------------------------------- Section B --------------------------------------------------=> //

// TASK 1-2
let str = "    Radegast je moje nejoblíbenější pivo    ".trim()

// TASK 3
console.log("Section B - Task 1-3: " + str + '\n');

// TASK 4
console.log("Section B - Task 4: " + str.startsWith('Radegast') + '\n');

// TASK 5
console.log("Section B - Task 5: " + str.toUpperCase() + '\n');

// TASK 6
console.log("Section B - Task 6: " + str.replace("Radegast", "Gambrinus") + '\n')

// TASK 7
console.log("Section B - Task 7: " + str.length + '\n')


// <=-------------------------------------------------- Section C --------------------------------------------------=> //

// COPY-PASTE FUNCTION 
function cycle(a, b) {
    for (a; a <= b; a++) {
        console.log(' ' + a)
    }
}

// TASK 1
function order(a, b) {
    console.log("Section C - Task 1: ")
    if (a === b) {
        console.error();
        return;
    }
    cycle(a, b)
    return '';
}

// TASK 2
function orderModification(a, b) {
    console.log("Section C - Task 2: ")
    if (a === b) {
        console.error("čísla jsou stejná, nemůžu nic dělat");
        return;
    }
    if (a > b) {
        cycle(b, a);
    }
    else {
        cycle(a, b);
    }
    return ''
}

console.log(order(2, 6))
console.log(orderModification(8, 3))
console.log(orderModification(3, 6))


// <=-------------------------------------------------- Section D --------------------------------------------------=> //

// TASK 1
let arr = ["Elephant", "Wolf", "Gepard", "Lion", "Polar  Bear"] // Without - plyšový medvídek

console.log("Section D - Task 1.1 (without): " + arr.includes("plyšový medvídek") + '\n');
console.log("Section D - Task 1.2 (without): " + arr.indexOf("plyšový medvídek") + '\n');
console.log("Section D - Task 1.3 (without): " + arr.lastIndexOf("plyšový medvídek") + '\n');

let arr1 = ["Elephant", "plyšový medvídek", "Wolf", "Gepard", "Lion", "Polar  Bear"] // With - plyšový medvídek

console.log("Section D - Task 1.1 (with): " + arr1.includes("plyšový medvídek") + '\n');
console.log("Section D - Task 1.2 (with): " + arr1.indexOf("plyšový medvídek") + '\n');
console.log("Section D - Task 1.3 (with): " + arr1.lastIndexOf("plyšový medvídek") + '\n');

// TASK 2
function arrOfNumber(res) {
    console.log("Section D - Task 2: ")

    for (let i = 0; i < res.length; i++) {
        res[i] = res[i] * 10;
    }
    return res;
}

console.log(arrOfNumber([0, 10, 8, 7, 6, 1, 4, 9]));

// TASK 3
function numberAddition(num) {
    console.log("Section D - Task 3: ");
 
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    return result;
}

console.log(numberAddition([7, 8, 3, 5, 4, 6]));

// TASK 4
function countingTheNumber(array, number) {
    console.log("Section D - Task 4: ");
    
    let iterationNum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            iterationNum++;
        }
    }
    return iterationNum;
}

console.log(countingTheNumber([0, 2, 8, 3, 4, 4, 8, 2, 7, 2, 8], 4));
