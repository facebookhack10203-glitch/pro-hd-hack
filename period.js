const basePeriod = 480;

const baseTime =
new Date(2025,4,13,11,40,0,0).getTime();

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

let color = "VIOLET";

if([1,3,7,9].includes(number)){

color = "GREEN";

}
else if([2,4,6,8].includes(number)){

color = "RED";

}

document.getElementById("signal").innerText =
signal;

document.getElementById("number").innerText =
number;

document.getElementById("color").innerText =
color;

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

document.getElementById("timer").innerText =
"00:" + (remain < 10 ? "0"+remain : remain);

/* ONLY LAST 3 DIGITS */

document.getElementById("period").innerText =
String(currentPeriod).slice(-3);

/* NEW SIGNAL */

if(lastPeriod != currentPeriod){

lastPeriod =
currentPeriod;

generateSignal(currentPeriod);

}

}

/* =========================
   START
========================= */

setInterval(updateSystem,1000);

updateSystem();
