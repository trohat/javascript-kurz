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

function showTime(actualTime) {
    let timeString = "";

    let hours = actualTime.hours;
    hours = String(hours);
    hours = hours.padStart(2, "0");
    timeString += hours;

    timeString += ":";

    timeString += String(actualTime.minutes).padStart(2, "0");

    timeString += ".";

    // toto je zbytečně složité, zde jen pro ukázku, nedělejte to tak
    timeString += actualTime.seconds > 9 ? actualTime.seconds : "0" + actualTime.seconds;
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
