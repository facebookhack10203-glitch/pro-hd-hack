/* =========================
   PRO HD HACK
   PERIOD SYSTEM
========================= */

/* BASE PERIOD */
/* FINAL +1 SYNC FIX */

const basePeriod = 1017;

/* BASE TIME */
/* 2026-05-15 02:28:00 PM */

const baseTime =
new Date(2026,4,15,14,28,0,0).getTime();

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

/* BIG = 5-9 */
/* SMALL = 0-4 */

if(signal === "BIG"){

number =
Math.floor(Math.random()*5)+5;

}else{

number =
Math.floor(Math.random()*5);

}

/* COLOR SYSTEM */

let color = "VIOLET";

if([1,3,7,9].includes(number)){

color = "GREEN";

}
else if([2,4,6,8].includes(number)){

color = "RED";

}

/* CONFIDENCE */

let confidence =
Math.floor(Math.random()*21)+70;

/* SHOW DATA */

document.getElementById("signal").innerText =
signal;

document.getElementById("number").innerText =
number;

document.getElementById("color").innerText =
color;

document.getElementById("confidence").innerText =
confidence + "% CONFIDENCE";

/* HISTORY */

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
" | 🔥 " + confidence + "%" +
" | 🆔 " + String(period).padStart(4,"0");

history.prepend(item);

/* MAX HISTORY */

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

/* TIMER */

let remain =
30 - Math.floor((diff % 30000) / 1000);

if(remain <= 0){

remain = 30;

}

/* FORMAT */

let showRemain =
remain < 10
? "0"+remain
: remain;

/* SHOW TIMER */

document.getElementById("timer").innerText =
"00:" + showRemain;

/* SHOW LAST 4 DIGITS */

document.getElementById("period").innerText =
String(currentPeriod).padStart(4,"0");

/* NEW SIGNAL */

if(lastPeriod != currentPeriod){

lastPeriod =
currentPeriod;

generateSignal(currentPeriod);

}

}

/* =========================
   START SYSTEM
========================= */

setInterval(updateSystem,1000);

updateSystem();
