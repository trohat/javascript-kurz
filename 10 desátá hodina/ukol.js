/*Create an object that describes the time (hours, minutes, seconds), 
and the following functions to work with this object.
1. Time display function.
2. The function of changing the time for the set number of seconds.
3. The function of changing the time for the set number of minutes.
4. The function of changing the time for the set number of hours.
Note that in the last 3 functions, if one part of the time is changed, the other may change as well. 
For  example:  if  you  add  30  seconds  to  the  time  "20:30:45",  you  should get "20:31:15", 
not "20:30:75".*/

const time = {
    hours: 15,
    minutes: 24,
    seconds: 30
};

// první verze
function padNumberToTwoDigits(number) {
    let numberString = String(number);
    numberString = numberString.padStart(2, "0");
    return numberString;
}

// jiná verze toho samého - tato je nejlepší (využívá vlastnosti arrow funkcí)
const padNToTwo = n => String(n).padStart(2, "0");

// další verze toho samého, asi už pro někoho hůře čitelná
// sčítání s prázným řetězcem = převod na string
const padNToTwoVersion2 = n => ("" + n).padStart(2, "0");

function showTime(actualTime) {
    let timeString = "";
    timeString += padNToTwo(actualTime.hours);
    timeString += ":";
    timeString += padNToTwo(actualTime.minutes);
    timeString += ".";
    timeString += padNToTwo(actualTime.seconds);
    return timeString;
}

console.log(showTime(time));
console.log(showTime({ hours: 18, minutes: 56, seconds: 15 }));
console.log(showTime({ 
    hours: 12, 
    minutes: 14, 
    seconds: 29 
}));

console.log(showTime({ hours: 9, minutes: 4, seconds: 5 }));

const changeHours = (timeObject, hours) => {
    timeObject.hours += hours;
    while (timeObject.hours >= 24) {
        timeObject.hours -= 24;
    }
    while (timeObject.hours < 0) {
        timeObject.hours += 24;
    }
    console.log("ukazuju čas uvnitř funkce changeHours", showTime(timeObject));
    return timeObject;
};

changeHours(time, 5);
changeHours(time, 7);
changeHours(time, -2);
changeHours(time, -5);
changeHours(time, 3);
console.log("------------");

const changeMinutes = (timeObject, minutes) => {
    timeObject.minutes += minutes;
    while (timeObject.minutes >= 60) {
        timeObject.minutes -= 60;
        changeHours(timeObject, 1);
    }
    while (timeObject.minutes < 0) {
        timeObject.minutes += 60;
        changeHours(timeObject, -1);
    } 
    console.log(showTime(timeObject));
    return timeObject;
};


console.log("už jen dvakrát změním minuty a jdu domů");
changeMinutes(time, 5);
changeMinutes(time, 35);


