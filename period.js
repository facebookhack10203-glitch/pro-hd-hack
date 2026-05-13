/* =========================
   EXACT BDWIN24 PERIOD SYSTEM
========================= */

/*

SYNC CONFIRMED

9:27:00 AM
=
20260513100050415

9:27:30 AM
=
20260513100050416

9:28:00 AM
=
20260513100050417

9:49:00 AM
=
20260513100050458

EVERY 30 SEC = +1

*/

/* =========================
   BASE PERIOD
========================= */

const basePeriod =
BigInt("20260513100050415");

/* =========================
   EXACT START TIME
========================= */

/*

MONTH = 4
MAY = 4

FORMAT:
(year,month,date,hour,min,sec)

*/

const baseTime =
new Date(2025,4,13,9,27,0,0).getTime();

/* LAST PERIOD */

let lastPeriod = "";

/* =========================
   SIGNAL SYSTEM
========================= */

function generateSignal(period){

let signal =
Math.random() < 0.5 ? "BIG" : "SMALL";

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
" | 🆔 " + period;

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

/* CURRENT TIME */

const now =
Date.now();

/* DIFFERENCE */

const diff =
now - baseTime;

/* =========================
   EVERY 30 SEC = +1
========================= */

const passedPeriods =
Math.floor(diff / 30000);

/* =========================
   CURRENT PERIOD
========================= */

const currentPeriod =
(
basePeriod +
BigInt(passedPeriods)
).toString();

/* =========================
   REAL TIMER
========================= */

let remain =
30 - Math.floor((diff % 30000) / 1000);

/* FIX */

if(remain <= 0){

remain = 30;

}

/* FORMAT */

let showRemain =
remain < 10
? "0" + remain
: remain;

/* =========================
   SHOW
========================= */

document.getElementById("timer").innerText =
"00:" + showRemain;

document.getElementById("period").innerText =
currentPeriod;

/* =========================
   NEW SIGNAL
========================= */

if(lastPeriod !== currentPeriod){

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
