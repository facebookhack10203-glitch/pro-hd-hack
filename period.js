/* =========================
   EXACT LAST 3 DIGIT SYSTEM
========================= */

/*

CONFIRMED SYNC

11:35:00 AM = 671
11:35:30 AM = 672
11:36:00 AM = 673

EVERY 30 SEC = +1

ONLY LAST 3 DIGITS SHOW

*/

/* =========================
   BASE DATA
========================= */

const basePeriod = 671;

/* YEAR, MONTH(0-11), DATE, HOUR, MINUTE, SECOND */

const baseTime =
new Date(2025,4,13,11,35,0,0).getTime();

/* LAST PERIOD */

let lastPeriod = "";

/* =========================
   SIGNAL SYSTEM
========================= */

function generateSignal(period){

let signal =
Math.random() < 0.5
? "BIG"
: "SMALL";

let number;

if(signal === "BIG"){

number =
Math.floor(Math.random()*5);

}else{

number =
Math.floor(Math.random()*5)+5;

}

/* COLOR */

let color = "VIOLET";

if([1,3,7,9].includes(number)){

color = "GREEN";

}
else if([2,4,6,8].includes(number)){

color = "RED";

}

/* SHOW */

document.getElementById("signal").innerText =
signal;

document.getElementById("number").innerText =
number;

document.getElementById("color").innerText =
color;

/* =========================
   HISTORY
========================= */

let history =
document.getElementById("history");

let item =
document.createElement("div");

item.className =
"history-item";

item.innerHTML =

"🎯 " + signal +
" | 🔢 " + number +
" | 🎨 " + color +
" | 🆔 " + String(period).slice(-3);

history.prepend(item);

/* MAX 10 */

if(history.children.length > 10){

history.removeChild(history.lastChild);

}

}

/* =========================
   MAIN SYSTEM
========================= */

function updateSystem(){

const now =
Date.now();

const diff =
now - baseTime;

/* EVERY 30 SEC */

const passedPeriods =
Math.floor(diff / 30000);

/* CURRENT PERIOD */

const currentPeriod =
basePeriod + passedPeriods;

/* =========================
   TIMER
========================= */

let remain =
30 - Math.floor((diff % 30000) / 1000);

if(remain <= 0){

remain = 30;

}

let showRemain =
remain < 10
? "0" + remain
: remain;

/* =========================
   SHOW
========================= */

document.getElementById("timer").innerText =
"00:" + showRemain;

/* ONLY LAST 3 DIGITS */

document.getElementById("period").innerText =
String(currentPeriod).slice(-3);

/* =========================
   NEW SIGNAL
========================= */

if(lastPeriod != currentPeriod){

lastPeriod =
currentPeriod;

generateSignal(currentPeriod);

}

}

/* =========================
   START SYSTEM
========================= */

function startSystem(){

updateSystem();

setInterval(updateSystem,1000);

}

/* AUTO START */

startSystem();
