// =====================
// USER SYSTEM
// =====================

let userId =
localStorage.getItem("userId");

if(!userId){

userId =
"USER" +
Math.floor(
100000 +
Math.random()*900000
);

localStorage.setItem(
"userId",
userId
);

}

// =====================
// JOIN DATE
// =====================

let joinDate =
localStorage.getItem(
"joinDate"
);

if(!joinDate){

joinDate =
new Date()
.toLocaleDateString();

localStorage.setItem(
"joinDate",
joinDate
);

}

// =====================
// COINS
// =====================

let coins =
Number(
localStorage.getItem(
"coins"
) || 0
);

// =====================
// REFERRALS
// =====================

let referrals =
Number(
localStorage.getItem(
"referrals"
) || 0
);

// =====================
// UPDATE UI
// =====================

function updateUI(){

localStorage.setItem(
"coins",
coins
);

document.getElementById(
"coin"
).innerText =
coins;

const profileCoins =
document.getElementById(
"profileCoins"
);

if(profileCoins){

profileCoins.innerText =
coins;

}

const userBox =
document.getElementById(
"userId"
);

if(userBox){

userBox.innerText =
userId;

}

const refCode =
document.getElementById(
"refCode"
);

if(refCode){

refCode.innerText =
userId;

}

const refCount =
document.getElementById(
"refCount"
);

if(refCount){

refCount.innerText =
referrals;

}

const homeRef =
document.getElementById(
"homeRef"
);

if(homeRef){

homeRef.innerText =
referrals;

}

const joinBox =
document.getElementById(
"joinDate"
);

if(joinBox){

joinBox.innerText =
joinDate;

}

}

// =====================
// PAGE NAVIGATION
// =====================

function showPage(pageId){

document
.querySelectorAll(".page")
.forEach(page => {

page.classList.remove(
"active"
);

});

document
.getElementById(pageId)
.classList.add(
"active"
);

}

// =====================
// CLAIM REWARD
// =====================

function claimCoin(){

coins += 10;

updateUI();

alert(
"🎉 +10 Coins Added"
);

}

// =====================
// DAILY BONUS
// =====================

function dailyBonus(){

const today =
new Date()
.toDateString();

const lastClaim =
localStorage.getItem(
"dailyBonus"
);

if(lastClaim === today){

alert(
"❌ Bonus Already Claimed"
);

return;

}

coins += 100;

localStorage.setItem(
"dailyBonus",
today
);

updateUI();

alert(
"🎁 +100 Daily Bonus"
);

}

// =====================
// TELEGRAM TASK
// =====================

function telegramTask(){

window.open(
"https://t.me/+IxOmY7N9Z91kYzU1",
"_blank"
);

if(
!localStorage.getItem(
"telegramTask"
)
){

coins += 50;

localStorage.setItem(
"telegramTask",
"done"
);

updateUI();

alert(
"📢 Telegram Task Complete +50"
);

}else{

alert(
"Task Already Completed"
);

}

}

// =====================
// YOUTUBE TASK
// =====================

function youtubeTask(){

window.open(
"https://youtube.com/@dingerboy100k",
"_blank"
);

if(
!localStorage.getItem(
"youtubeTask"
)
){

coins += 30;

localStorage.setItem(
"youtubeTask",
"done"
);

updateUI();

alert(
"▶️ YouTube Task Complete +30"
);

}else{

alert(
"Task Already Completed"
);

}

}

// =====================
// REFERRAL
// =====================

function copyReferral(){

const link =
"https://t.me/YourBot?start="
+ userId;

navigator.clipboard
.writeText(link);

alert(
"👥 Referral Link Copied"
);

}

// =====================
// WITHDRAW HISTORY
// =====================

function loadHistory(){

let history =
JSON.parse(
localStorage.getItem(
"withdrawHistory"
) || "[]"
);

let box =
document.getElementById(
"historyBox"
);

if(!box)
return;

if(history.length === 0){

box.innerHTML =
"No Withdraw Yet";

return;

}

box.innerHTML = "";

history.reverse().forEach(item=>{

box.innerHTML +=

`
<div style="
background:#0f172a;
padding:10px;
border-radius:10px;
margin-top:10px;
">

💸 ${item.amount} Coins<br>

📱 ${item.number}<br>

🕒 ${item.date}

</div>
`;

});

}

// =====================
// WITHDRAW
// =====================

function withdraw(){

let amount =
document.getElementById(
"withdrawAmount"
).value;

let number =
document.getElementById(
"withdrawNumber"
).value;

if(!amount){

alert(
"Enter Amount"
);

return;

}

if(!number){

alert(
"Enter Number"
);

return;

}

if(Number(amount) < 500){

alert(
"Minimum Withdraw 500"
);

return;

}

if(Number(amount) > coins){

alert(
"Not Enough Coins"
);

return;

}

coins -=
Number(amount);

updateUI();

let history =
JSON.parse(
localStorage.getItem(
"withdrawHistory"
) || "[]"
);

history.push({

amount:amount,

number:number,

date:
new Date()
.toLocaleString()

});

localStorage.setItem(
"withdrawHistory",
JSON.stringify(
history
)

);

loadHistory();

document.getElementById(
"withdrawAmount"
).value = "";

document.getElementById(
"withdrawNumber"
).value = "";

alert(
"✅ Withdraw Request Submitted"
);

}

// =====================
// DEMO SPIN
// =====================

function spinReward(){

let reward =
Math.floor(
Math.random()*100
)+1;

coins += reward;

updateUI();

alert(
"🎡 You Won "
+ reward +
" Coins"
);

}

// =====================
// START
// =====================

updateUI();

loadHistory();
