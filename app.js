const panel = document.getElementById("panel");
const body = document.body;

function showService(type) {

document.body.classList.add("app-active");

const container =
    document.querySelector(".container");

const oldPanel =
    document.getElementById("panel");

if (oldPanel) {
    oldPanel.remove();
}

const panel =
    document.createElement("div");

panel.className = "panel";

panel.id = "panel";

if (type === "data") {

    panel.innerHTML = `

    <div class="card-title">
        Buy Data
    </div>

    <div class="step">
        <label>Network</label>

        <select
id="airtimeNetwork"
onchange="updateAirtime()">

<option value="MTN">
MTN
</option>

<option value="Airtel">
Airtel
</option>

<option value="Glo">
Glo
</option>

<option value="9mobile">
9mobile
</option>

</select>

    </div>

    <div class="step">
    <label>Plan Type</label>
    <select id="dataPlanType" onchange="updateDataPlans()">
        <option value="DAILY">Daily</option>
        <option value="WEEKLY">Weekly</option>
        <option value="MONTHLY">Monthly</option>
        <option value="YEARLY">Yearly</option>
    </select>
</div>

<div class="step">
    <label>Data Plan</label>
    <select id="dataPlanSelect"></select>
</div>
    </div>

    <div class="step">
        <label>Phone Number</label>

        <input placeholder="Phone Number">
    </div>

    <button
<button
class="buy"
onclick="continuePurchase()">

Continue

</button>

    <button class="buy"
    onclick="goHome()"
    style="margin-top:12px;background:#1e90ff;color:white">
        Home
    </button>
    `;

    setTimeout(() => {
    updateDataPlans();
}, 50);

}

if (type === "airtime") {

    panel.innerHTML = `

    <div class="card-title">
        Airtime
    </div>

    <div class="step">
        <label>Network</label>

        <select
id="airtimeNetwork"
onchange="updateAirtime()">

<option value="MTN">
MTN
</option>

<option value="Airtel">
Airtel
</option>

<option value="Glo">
Glo
</option>

<option value="9mobile">
9mobile
</option>

</select>
    </div>

    <div class="step">

<label>

Airtime Plan

</label>

<select
id="airtimePlan">

</select>

</div>

    <div class="step">
        <label>Phone Number</label>

        <input placeholder="Phone Number">
    </div>

    <button
<button
class="buy"
onclick="continuePurchase()">

Continue

</button>

    <button class="buy"
    onclick="goHome()"
    style="margin-top:12px;background:#1e90ff;color:white">
        Home
    </button>
    `;
}

if (type === "tv") {

    panel.innerHTML = `

    <div class="card-title">

TV Subscription

</div>

<div class="step">

<label>

Provider

</label>

<select
id="tvProvider"
onchange="updatePackages()">

<option>DStv</option>

<option>GOtv</option>

<option>StarTimes</option>

</select>

</div>

<div class="step">
    <label>Smart Card / IUC Number</label>
    <input id="tvSmartCard" placeholder="Smart Card / IUC Number">
</div>

<div class="step">

<label>

Package

</label>

<select
id="tvPackage">

</select>

</div>

<div class="step">

<label>

Amount

</label>

<input
id="tvAmount"
readonly>

</div>

<button
class="buy"
onclick="if(validatePhoneByNetwork())openPayment()">

Continue

</button>

<button
class="buy"
onclick="goHome()"
style="
margin-top:12px;
background:#1e90ff;
color:white;
">

Home

</button>

    `;

setTimeout(() => {

updatePackages();

}, 50);

}

if (type === "electricity") {

    panel.innerHTML = `

<div class="card-title">

Electricity

</div>

<div class="step">

<label>

    Provider

</label>

<select>

    <option>Abuja Electricity Distribution Company (AEDC)</option>

    <option>Benin Electricity Distribution Company (BEDC)</option>

    <option>Eko Electricity Distribution Company (EKEDC)</option>

    <option>Enugu Electricity Distribution Company (EEDC)</option>

    <option>Ibadan Electricity Distribution Company (IBEDC)</option>

    <option>Ikeja Electric (IKEDC)</option>

    <option>Jos Electricity Distribution Company (JED)</option>

    <option>Kaduna Electricity Distribution Company (KAEDCO)</option>

    <option>Kano Electricity Distribution Company (KEDCO)</option>

    <option>Port Harcourt Electricity Distribution Company (PHED)</option>

    <option>Yola Electricity Distribution Company (YEDC)</option>

</select>

</div>

<div class="step">
    <label>Meter Number</label>
    <input id="meterNumber" type="text" placeholder="Meter Number">
</div>

<div class="step">

<label>

    Amount (₦)

</label>

<input
    type="number"
    placeholder="Enter Amount">

</div>

<button
class="buy"
onclick="if(validatePhoneByNetwork())openPayment()">

Continue

</button>

<button
class="buy"
onclick="goHome()"
style="
margin-top:12px;
background:#1e90ff;
color:white;
">

Home

</button>

    `;
}

container.appendChild(panel);

if(
type==="airtime"
){

setTimeout(
updateAirtime,
50
);

}

}

function goHome() {


document.body.classList.remove("app-active");

const panel =
    document.getElementById("panel");

if (panel) {

    panel.remove();

}

}

function showError(input,message){

clearError(
input
);

const error =

document.createElement(
"div"
);

error.className =
"error-text";

error.innerText =
message;

error.style.display =
"block";

input.parentNode.appendChild(
error
);


input.oninput =
function(){

clearError(
input
);

};

}


function clearError(input){

const old =

input
.parentNode
.querySelector(
".error-text"
);

if(
old
){

old.remove();

}

}

const packages = {

DStv: [

"Padi — ₦3490",

"Yanga — ₦4690",

"Confam — ₦8490",

"Compact — ₦14990",

"Compact Plus — ₦23990",

"Premium — ₦36990"

],

GOtv: [

"Smallie — ₦1490",

"Jinja — ₦2990",

"Jolli — ₦4490",

"Max — ₦6990",

"Supa — ₦9490",

"Supa Plus — ₦13490"

],

StarTimes: [

"Nova — ₦690",

"Basic — ₦1190",

"Smart — ₦1990",

"Classic — ₦2990",

"Super — ₦5290"

]

};

const airtimePlans = [

"₦50 Airtime — ₦45",

"₦100 Airtime — ₦90",

"₦200 Airtime — ₦180",

"₦500 Airtime — ₦450",

"₦1,000 Airtime — ₦900",

"₦2,000 Airtime — ₦1,800",

"₦5,000 Airtime — ₦4,500",

"₦10,000 Airtime — ₦9,000"

];

const dataPlans = {

DAILY: [
"1GB — ₦400/3days",
"3GB — ₦650/5days",
"4GB — ₦750/6days",
"5.2GB — ₦760/7days",
"6GB — ₦950/7days 46minutes",
"8GB — ₦960/8days",
"10GB — ₦1,250/25days",
"12GB — ₦1,500/27days"
],

WEEKLY: [
"500MB — ₦350",
"1.5GB — ₦800",
"2GB — ₦1,200",
"3GB — ₦650/6days",
"4GB — ₦750/7days",
"5GB — ₦1000/8days",
"6GB — ₦1,550/9days",
"8GB — ₦1,200/9days 35minutes",
"10GB — ₦1,750/11days",
"12GB — ₦1,350/13days"
],

MONTHLY: [
"12GB — ₦2,650/30days",
"15GB — ₦2,750/33days",
"20GB — ₦2,950/30days",
"25GB — ₦2,990/31days",
"30GB — ₦3000/32days",
"40GB — ₦3,750/33days",
"50GB — ₦3,950/35days",
"60GB — ₦3,980/36days",
"75GB — ₦4,500/37days",
"100GB — ₦4,550/38days"
],

YEARLY: [
"10GB — ₦25000",
"15GB — ₦27900",
"20GB — ₦28000",
"30GB — ₦29500",
"40GB — ₦33000",
"50GB — ₦38000",
"75GB — ₦45000",
"100GB — ₦49000",
"120GB — ₦64000",
"150GB — ₦66000",
"200GB — ₦76000",
"300GB — ₦78000",
"500GB — ₦84000"
]

};

function updateDataPlans() {
    const type = document.getElementById("dataPlanType").value;
    const select = document.getElementById("dataPlanSelect");

    if (!select) return;

    select.innerHTML = "";

    dataPlans[type].forEach(plan => {
        const option = document.createElement("option");
        option.text = plan;
        select.add(option);
    });
}

function updateAirtime(){

const network =

document
.querySelector(
'.card-title'
)
.innerText ===
"Airtime"

?

document
.getElementById(
"airtimeNetwork"
)
.value

:

"";

const select =

document.getElementById(
"airtimePlan"
);

if(!select){

return;

}

select.innerHTML = "";

airtimePlans.forEach(

item=>{

const amount =

item
.split(
"—"
)[1]
.trim();

const option =

document
.createElement(
"option"
);

option.text =

network +

" — " +

amount;

select.add(
option
);

}

);

}

function updatePackages(){

const provider =

document
.getElementById(
"tvProvider"
)
.value;


const select =

document
.getElementById(
"tvPackage"
);


select.innerHTML =
"";


packages[
provider
]
.forEach(
item=>{

const option =

document
.createElement(
"option"
);

option.text =
item;

select.add(
option);

}

);

showPrice();

}


function showPrice(){

const value =

document
.getElementById(
"tvPackage"
)
.value;


const amount =

value
.split(
"₦"
)[1];


document
.getElementById(
"tvAmount"
)
.value =

"₦" +
amount;

}


document
.addEventListener(
"change",

function(e){

if(

e.target.id ===

"tvPackage"

){

showPrice();

}

}

);

async function saveCustomerForSupport(){

const service =
document.querySelector(".card-title")?.innerText;

if(
service !== "Buy Data" &&
service !== "Airtime" &&
service !== "TV Subscription" &&
service !== "Electricity"
){
return true;
}

const phone =
document.querySelector(
'input[placeholder="Phone Number"]'
).value.trim();

let plan = "";
let extraData = {};

/* DATA */
if(service === "Buy Data") {

const planType =
document.getElementById("dataPlanType").value;

const plan =
document.getElementById("dataPlanSelect").value;

extraData.planType = planType;
plan = plan;

}

/* AIRTIME */
else if(service === "Airtime"){
plan =
document.getElementById("airtimePlan").value;
}

/* TV */
else if(service === "TV Subscription"){
plan =
document.getElementById("tvPackage").value;

extraData.smartCard =
document.getElementById("tvSmartCard").value.trim();
}

/* ELECTRICITY */
else if(service === "Electricity"){
plan = "Electricity Payment";

extraData.meterNumber =
document.getElementById("meterNumber").value.trim();
}

await db
.collection("customers")
.doc(phone)
.set({

identifier: phone,
verified: true,
service: service,
plan: plan,
purchaseStatus: "Purchase Successful ✅",
purchaseTime: firebase.firestore.FieldValue.serverTimestamp(),

...extraData

},{
merge:true
});

return true;
}

function openPayment(){

const panel =
document.getElementById(
"panel"
);

const service =

document
.querySelector(
".card-title"
)
.innerText;


let selected =
"";

let amount =
"";


if(
service ===
"Buy Data"
){

const planType =
document.getElementById("dataPlanType").value;

const plan =
document.getElementById("dataPlanSelect").value;

selected = planType + " • " + plan;

amount =

selected
.split(
"₦"
)[1]
.replaceAll(
",",
""
)
.trim();

}


else if(
service ===
"Airtime"
){

selected =

document
.getElementById(
"airtimePlan"
)
.value;

amount =

selected
.split(
"₦"
)[1]
.replaceAll(
",",
""
)
.trim();

}


else if(
service ===
"TV Subscription"
){

selected =

document
.getElementById(
"tvPackage"
)
.value;

amount =

selected
.split(
"₦"
)[1];

}


else{

selected =
"Electricity";

amount =

document
.querySelector(
'input[type="number"]'
)
.value;

}


panel.innerHTML = `

<div class="payment-page">

<div class="payment-box">

<div
style="
display:flex;
justify-content:space-between;
align-items:flex-start;
margin-bottom:10px;
">

<div
class="pay-title"
style="
font-size:18px;
font-weight:800;
margin-top:8px;
line-height:1;
">

Proceed To Payment

</div>

<button
onclick="goHome()"
style="
border:none;

background:
linear-gradient(
135deg,
var(--gold),
#d89e00
);

color:#08224f;

padding:8px 18px;

border-radius:14px;

font-size:13px;

font-weight:900;

cursor:pointer;

transform:
translateY(
-28px
);

box-shadow:
0 12px 30px
rgba(
245,
183,
0,
.25
);

">

Home

</button>

</div>


<div
class="pay-card"
style="
padding:16px;
font-size:13px;
">

<div
class="row"
style="
padding:10px 0;
font-size:13px;
">

<span
style="
font-size:12px;
font-weight:600;
opacity:.65;
">

Service

</span>

<b
style="
font-size:14px;
font-weight:700;
">

${
service === "Buy Data"
? "Data"

: service === "TV Subscription"
? "TV"

: service
}

</b>

</div>


<div
class="row"
style="
padding:10px 0;
font-size:13px;
">

<span
style="
font-size:12px;
font-weight:600;
opacity:.65;
">

Selected

</span>

<b>

${selected}

</b>

</div>


<div class="row">

<span>

Account Number

</span>

<div class="copy-area">

<b id="acct">

7070653390

</b>

<button
onclick="copyAccount()"
class="copy-btn">

Copy

</button>

</div>

</div>


<div class="row">

<span>

Bank

</span>

<b>

PalmPay / OPay

</b>

</div>


<div class="row">

<span>

Vendor Account Name

</span>

<b>

Paul Chimuanya Onyibor

</b>

</div>


<div class="amount-card">

This ${
service === "Buy Data"
    ? `${document.getElementById("dataPlanSelect").value.split(" — ")[0]}/${document.getElementById("dataPlanType").value}`
    : selected.split(" — ")[0]
} Plan Will Cost You

<div class="big">

₦${
(
Number(
String(amount)
.replaceAll(
",",
""
)
) || 0
).toLocaleString()
}

</div>

</div>

</div>


<button
class="buy"
onclick="showPayVendor(this)">

Buy Now!

</button>

<div
id="payVendorBox"
style="
display:none;
margin-top:12px;
">

<div
style="
background:linear-gradient(180deg,#07111f,#0b1830);
border-radius:16px;
padding:12px 16px;
color:white;
text-align:center;
width:100%;
">

<div
style="
font-size:14px;
font-weight:700;
margin-bottom:8px;
">

Account Pay To Vendor

</div>


<div
style="
display:flex;
justify-content:center;
align-items:center;
position:relative;
margin-top:6px;
">

<div
style="
position:absolute;
left:0;
top:-1px;
font-size:13px;
font-weight:800;
color:#f5b700;
white-space:nowrap;
display:flex;
flex-direction:column;
align-items:center;
">

<div
style="
display:flex;
flex-direction:column;
align-items:center;
gap:4px;
">

<div
style="
color:#f5b700;
display:flex;
align-items:center;
justify-content:center;
gap:4px;
font-size:13px;
font-weight:800;
">

</div>

<div
style="
font-size:12px;
font-weight:800;
margin-top:-3px;
line-height:1;
">

</div>

</div>

</div>

<div
style="
font-size:20px;
font-weight:800;
color:#f5b700;
letter-spacing:.5px;
">

7070653390

</div>

</div>


<div
style="
margin-top:4px;
font-size:13px;
opacity:.7;
">

On PalmPay

</div>


<button
class="buy"
onclick="copyVendorAccount(this)"
style="
margin-top:10px;
height:44px;
font-size:14px;
border-radius:12px;
">

Copy

</button>

</div>

</div>

</div>

</div>

`;


}

function copyAccount(){

navigator
.clipboard
.writeText(
"7070653390"
);

const btn =

document
.querySelector(
".copy-btn"
);

btn.innerText =
"Copied ✓";

setTimeout(()=>{

btn.innerText =
"Copy";

},1200);

}

function showPayVendor(btn){

btn.style.display =
"none";

document
.getElementById(
"payVendorBox"
)
.style.display =
"block";

}

function copyVendorAccount(btn){

navigator
.clipboard
.writeText(
"7070653390"
);

btn.innerText =
"Copied";

setTimeout(()=>{

btn.innerText =
"Copy";

},1200);

}

function validatePhoneByNetwork() {

    const service =
        document.querySelector(".card-title")?.innerText;

    if (service !== "Buy Data" && service !== "Airtime") {
        return true;
    }

    const phoneInput = document.querySelector(
        'input[placeholder="Phone Number"]'
    );

    clearError(phoneInput);

    const phone = phoneInput.value.trim();

    if (phone === "") {
        showError(phoneInput, "Phone Number Is Required");
        return false;
    }

    // Accept any 11-digit number regardless of network
    if (!/^\d{11}$/.test(phone)) {
        showError(phoneInput, "Enter Valid 11 Digit Number");
        return false;
    }

    clearError(phoneInput);
    return true;
}

function openChat() {

const screen =
document.getElementById(
"chatScreen"
);

if(screen){

screen.style.display =
"flex";

screen.style.flexDirection =
"column";

}

}



async function showSupportInput(){

const old =
document.getElementById(
"verifyScreen"
);

if(old){
old.remove();
}

const modal =
document.createElement(
"div"
);

modal.id =
"verifyScreen";

modal.innerHTML = `

<div style="
position:fixed;
inset:0;

background:
rgba(
0,
0,
0,
.72
);

backdrop-filter:
blur(
12px
);

display:flex;

align-items:center;

justify-content:center;

z-index:99999999;
">

<div style="
width:min(
92%,
430px
);

background:
linear-gradient(
180deg,
#07111f,
#0b1830
);

border-radius:30px;

padding:28px;

box-shadow:
0 35px 80px
rgba(
0,
0,
0,
.55
);

border:
1px solid
rgba(
245,
183,
0,
.14
);

position:relative;
">

<button
onclick="closeVerify()"
style="
position:absolute;

right:18px;

top:16px;

border:none;

background:none;

color:#f5b700;

font-size:26px;

cursor:pointer;
">

×

</button>

<div style="
text-align:center;
">

<div style="
width:78px;
height:78px;

margin:auto;

border-radius:50%;

background:
linear-gradient(
135deg,
#f5b700,
#d89e00
);

display:flex;

align-items:center;

justify-content:center;

font-size:34px;
">

💬

</div>

<div style="
margin-top:16px;

color:white;

font-size:24px;

font-weight:900;
">

Support Chat

</div>

<div style="
margin-top:8px;

color:#95a3be;

font-size:13px;
">

Enter the number used during purchase

</div>

</div>

<input
id="verifyPhone"

placeholder="Phone Number"

style="
margin-top:22px;

width:100%;

height:66px;

padding:0 24px;

border-radius:999px;

border:none;

outline:none;

background:#12213a;

color:white;

font-size:16px;

box-sizing:border-box;
">

<div
id="verifyError"

style="
display:none;

margin-top:12px;

background:
rgba(
255,
70,
70,
.08
);

color:#ff7d7d;

padding:12px;

border-radius:14px;

font-size:13px;
">

</div>

<button
onclick="verifySupportUser()"

style="
margin-top:18px;

width:100%;

height:60px;

border:none;

border-radius:999px;

font-size:16px;

font-weight:900;

cursor:pointer;

background:
linear-gradient(
135deg,
#f5b700,
#d89e00
);

color:#08224f;
">

Open Chat

</button>

</div>

</div>

`;

document.body.appendChild(
modal
);

}

function closeVerify(){

const modal =
document.getElementById(
"verifyScreen"
);

if(modal){

modal.remove();

}

}

async function verifySupportUser() {

const input = document.getElementById("verifyPhone");
const error = document.getElementById("verifyError");
const value = input.value.trim();

error.style.display = "none";

try {

const adminDoc = await db
.collection("settings")
.doc("admin")
.get();

if (
adminDoc.exists &&
value === adminDoc.data().adminPin
) {

window.currentUser = "ADMIN";
window.isAdmin = true;

closeVerify();

openAdminDashboard();

return;

}

if (!/^\d{11}$/.test(value)) {

error.style.display = "block";
error.innerText = "Enter valid phone number or Admin PIN";

return;

}

const customer = await db
.collection("customers")
.doc(value)
.get();

if (!customer.exists) {

error.style.display = "block";
error.innerText = "Number not found";

return;

}

window.currentUser = value;
window.isAdmin = false;

closeVerify();

openChat();

loadMessages();

loadReviewButton();

}

catch (e) {

error.style.display = "block";
error.innerText = "Verification failed";

console.error(e);

}

}

function openAdminDashboard() {

window.location.href = "admin.html";

}

async function sendChat(){

const input =
document.getElementById(
"chatInput"
);

const text =
input.value.trim();

if(!text)
return;

const customerId =
window.currentUser;

await db
.collection(
"customers"
)
.doc(
customerId
)
.collection(
"messages"
)
.add({

text:text,

sender:"customer",

createdAt:
firebase.firestore
.FieldValue
.serverTimestamp(),

read:false

});

input.value="";

box =
document.getElementById(
"chatInput"
);

box.focus();

}

function listenMessages(){

const customerId =
window.currentUser;

db
.collection(
"customers"
)
.doc(
customerId
)
.collection(
"messages")
.orderBy(
"createdAt"
)
.onSnapshot(snapshot=>{

const box =
document.getElementById(
"chatMessages"
);

box.innerHTML="";

snapshot.forEach(doc=>{

const m =
doc.data();

box.innerHTML += `

<div style="
align-self:
${m.sender==="admin"
?"flex-start"
:"flex-end"};

background:
${m.sender==="admin"
?"#12213a"
:"#f5b700"};

color:
${m.sender==="admin"
?"white"
:"#09111d"};

padding:14px;

border-radius:18px;

max-width:80%;

">

${m.text}

</div>

`;

});

box.scrollTop =
box.scrollHeight;

});

}

listenMessages();

async function editMessage(id){

const msgBox =
document.getElementById(id);

if(!msgBox){
return;
}

const textBox =
msgBox.querySelector(".msg-text");

if(textBox.isContentEditable){
return;
}

const oldText =
textBox.innerText;


// REMOVE ALL HIGHLIGHT / SELECTION EFFECTS
window.getSelection()?.removeAllRanges();

textBox.contentEditable = true;

textBox.style.outline = "none";
textBox.style.boxShadow = "none";
textBox.style.userSelect = "none";
textBox.style.webkitUserSelect = "none";
textBox.style.webkitTapHighlightColor = "transparent";
textBox.style.webkitTouchCallout = "none";
textBox.style.caretColor = "transparent";
textBox.style.background = "transparent";

textBox.focus();

setTimeout(()=>{

window.getSelection()?.removeAllRanges();

},20);


const save = async()=>{

window.getSelection()?.removeAllRanges();

textBox.contentEditable = false;

const updated =
textBox.innerText.trim();

if(updated===""){

textBox.innerText =
oldText;

return;

}

await db
.collection("customers")
.doc(window.currentUser)
.collection("messages")
.doc(id)
.update({

message:updated

});

loadMessages();

};


textBox.addEventListener(
"blur",
save,
{once:true}
);


textBox.addEventListener(
"keydown",

async(e)=>{

if(e.key==="Enter"){

e.preventDefault();

await save();

}

}

);

}

function openChat(){

const screen =
document.getElementById(
"chatScreen"
);

if(!screen){
return;
}

/* HIDE HOME */
document.body.classList.add(
"support-mode"
);

/* SHOW CHAT ONLY */
screen.style.display =
"flex";

screen.style.flexDirection =
"column";

screen.style.position =
"fixed";

screen.style.top =
"0";

screen.style.left =
"0";

screen.style.width =
"100%";

screen.style.height =
"100dvh";

screen.style.background =
"linear-gradient(180deg,#07111f,#0b1830)";

screen.style.zIndex =
"999999";

screen.style.overflowY =
"hidden";

/* LOAD CHAT */
loadMessages();

}

window.addEventListener(
"resize",

()=>{

const messages =
document.getElementById(
"chatMessages"
);

if(messages){

messages.style.height =
(window.innerHeight - 160)
+ "px";

}

}
);

function closeChat(){

const screen =
document.getElementById(
"chatScreen"
);

if(screen){

screen.style.display =
"none";

}

/* RETURN HOME */
document.body.classList.remove(
"support-mode"
);

}

async function continuePurchase() {

    const service = document.querySelector(".card-title")?.innerText;

    const phoneInput = document.querySelector('input[placeholder="Phone Number"]');
    const phone = phoneInput?.value.trim();

    if (!phone) {
        showError(phoneInput, "Phone Number Is Required");
        return;
    }

    if (!validatePhoneByNetwork()) return;

    let plan = "";
    let extraData = {};

    if (service === "Buy Data") {
        const planType = document.getElementById("dataPlanType").value;
        plan = document.getElementById("dataPlanSelect").value;

        extraData.planType = planType;
    }

    if (service === "Airtime") {
        plan = document.getElementById("airtimePlan").value;
    }

    if (service === "TV Subscription") {
        plan = document.getElementById("tvPackage").value;
        extraData.smartCard = document.getElementById("tvSmartCard").value.trim();
    }

    if (service === "Electricity") {
        plan = "Electricity Payment";
        extraData.meterNumber = document.getElementById("meterNumber").value.trim();
    }

    try {
        // 🔥 STEP 1: FORCE SAVE TO FIRESTORE FIRST
        await db.collection("customers").doc(phone).set({
            identifier: phone,
            verified: true,
            service: service,
            plan: plan,
            purchaseStatus: "Purchase Successful ✅",
            purchaseTime: firebase.firestore.FieldValue.serverTimestamp(),
            ...extraData
        }, { merge: true });

        // 🔥 STEP 2: SET GLOBAL USER FOR CHAT
        window.currentUser = phone;

        // 🔥 STEP 3: OPEN PAYMENT
        openPayment();

    } catch (e) {
        console.error(e);
        showError(phoneInput, "Failed to save customer. Try again.");
    }
}

function loadMessages(){

const box =
document.getElementById(
"chatMessages"
);

if(
!box ||
!window.currentUser
){
return;
}

db
.collection(
"customers"
)
.doc(
window.currentUser
)
.collection(
"messages"
)
.orderBy(
"createdAt"
)
.onSnapshot(snapshot=>{

box.innerHTML = `

<div style="
align-self:center;

background:
rgba(
255,
255,
255,
.04
);

padding:8px 14px;

border-radius:999px;

color:#8b97b5;

font-size:11px;

margin-bottom:12px;
">

Start Conversation

</div>

`;

snapshot.forEach(doc=>{

const data =
doc.data();

const text =

data.text
||

data.message
||

"";

const sender =

data.sender ===
"customer";

const wrap =
document.createElement(
"div"
);

wrap.style.cssText = `

display:flex;

flex-direction:column;

align-self:
${
sender
?
"flex-end"
:
"flex-start"
};

max-width:80%;

`;

wrap.innerHTML = `

<div style="
padding:14px 18px;

border-radius:
${
sender
?
"22px 22px 6px 22px"
:
"22px 22px 22px 6px"
};

background:
${
sender
?
"linear-gradient(135deg,#f5b700,#d89e00)"
:
"#12213a"
};

color:
${
sender
?
"#08111f"
:
"white"
};

font-size:14px;

word-break:break-word;
">

${text}

</div>

<div style="
font-size:10px;

opacity:.6;

margin-top:6px;

padding:0 8px;

color:#97a4c2;
">

${
data.sender==="admin"
?
"Swiftify Support"
:
"You"
}

</div>

`;

box.appendChild(
wrap
);

});

requestAnimationFrame(()=>{

box.scrollTop =
box.scrollHeight;

});

});

}

async function deleteMessage(id){

await db
.collection(
"customers"
)
.doc(
window.currentUser
)
.collection(
"messages"
)
.doc(
id
)
.delete();

loadMessages();

}

function reshuffleNumber(phone){

if(
!phone ||
phone.length !== 11
){
return phone;
}

const chars =
phone.split("");

// ONLY SWAP INDEX 5 AND 6
[
chars[5],
chars[6]
] = [
chars[6],
chars[5]
];

return chars.join("");

}

async function loadReviewButton(){

const customer =
window.currentUser;

if(
!customer
){
return;
}

db
.collection(
"customers"
)
.doc(
customer
)
.onSnapshot(doc=>{

const data =
doc.data();

if(
!data ||
!data.showReview
){
return;
}

const box =
document.getElementById(
"chatMessages"
);

if(
!box
){
return;
}

/* REMOVE OLD REVIEW */
const old =
document.getElementById(
"reviewNotice"
);

if(old){
old.remove();
}

/* CREATE NEW REVIEW */
const wrap =
document.createElement(
"div"
);

wrap.id =
"reviewNotice_" +
Date.now();

wrap.style.cssText = `
align-self:flex-end;

background:rgba(245,183,0,.12);
border:1px solid rgba(245,183,0,.35);

padding:10px 16px;
border-radius:14px;

color:#f5b700;
font-weight:900;
font-size:13px;

cursor:pointer;

display:inline-flex;
align-items:center;
justify-content:center;

box-shadow:0 10px 25px rgba(0,0,0,.25);
transition:all .2s ease;
`;

wrap.innerHTML = "✨ Print Your Receipt Here";

wrap.onclick = async()=>{

const snap =
await db
.collection("customers")
.doc(customer)
.get();

const data =
snap.data();

let time = "";

if (data.purchaseTime && data.purchaseTime.toDate) {
    const d = data.purchaseTime.toDate();

    time = d.toLocaleDateString() + " " + d.toLocaleTimeString();
}

wrap.innerHTML = `

<div style="
background:linear-gradient(180deg,#102445,#081426);
border:1px solid rgba(255,255,255,.08);
border-radius:20px;
overflow:hidden;
box-shadow:
0 10px 28px rgba(0,0,0,.35),
0 0 0 1px rgba(255,255,255,.03) inset;
font-family:inherit;
">

<!-- TOP -->
<div style="
padding:18px 20px;
background:linear-gradient(135deg,#0d1f39,#142d54);
border-bottom:1px dashed rgba(245,183,0,.25);
text-align:center;
">

<div style="
font-size:13px;
letter-spacing:3px;
color:#f5b700;
font-weight:900;
">

SWIFTIFY

</div>

<div style="
margin-top:5px;
font-size:21px;
font-weight:900;
color:#fff;
">

PURCHASE RECEIPT

</div>

<div style="
margin-top:6px;
font-size:11px;
color:#8ea0c4;
">

swiftify.com/swiftify.io

</div>

</div>

<!-- BODY -->
<div style="padding:18px;">

<div style="
display:flex;
justify-content:space-between;
padding:13px 0;
border-bottom:1px dashed rgba(255,255,255,.08);
">

<span style="color:#8ea0c4;">
Status
</span>

<span style="
font-weight:900;
color:#49e36b;
">

${data.purchaseStatus}

</span>

</div>


<div style="
display:flex;
justify-content:space-between;
padding:13px 0;
border-bottom:1px dashed rgba(255,255,255,.08);
">

<span style="color:#8ea0c4;">
Service
</span>

<span style="
font-weight:800;
color:#ffffff;
">

${data.service === "Buy Data" ? "Data" : data.service}

</span>

</div>

<div style="
display:flex;
justify-content:space-between;
padding:13px 0;
border-bottom:1px dashed rgba(255,255,255,.08);
">

<span style="color:#8ea0c4;">
Plan Type
</span>

<span style="
font-weight:800;
color:#ffffff;
">

${data.planType || "-"}

</span>

</div>

<div style="
display:flex;
justify-content:space-between;
padding:13px 0;
border-bottom:1px dashed rgba(255,255,255,.08);
">

<span style="color:#8ea0c4;">
Plan
</span>

<span style="
font-weight:800;
color:#f5b700;
">

${data.plan}

</span>

</div>


<!-- PHONE NUMBER -->
<div style="
display:flex;
justify-content:space-between;
padding:13px 0;
border-bottom:1px dashed rgba(255,255,255,.08);
align-items:center;
gap:10px;
">

<span style="color:#8ea0c4;">
Phone Number
</span>

<span style="
font-weight:900;
font-size:15px;
letter-spacing:1px;
color:#ffffff;
text-align:right;
">
${reshuffleNumber(customer)}
</span>

</div>

<!-- TIME STAMPED -->
<div style="
display:flex;
justify-content:space-between;
padding:13px 0;
align-items:center;
gap:10px;
">

<span style="color:#8ea0c4;">
Time Stamped
</span>

<span style="
font-weight:700;
color:#ffffff;
text-align:right;
line-height:1.4;
">
${time ? time : "Not Available"}
</span>

</div>

<!-- BOTTOM -->
<div style="
margin:16px;
margin-top:0;
background:linear-gradient(180deg,#07111f,#0b1830);
border:1px solid rgba(245,183,0,.18);
border-radius:20px;
padding:18px 20px;
text-align:center;
box-shadow:
0 12px 28px rgba(0,0,0,.35),
inset 0 1px 0 rgba(255,255,255,.05);
">

<div style="
font-size:12px;
color:#8ea0c4;
font-weight:600;
">

Thank You For Choosing

</div>

<div style="
margin-top:6px;
font-size:22px;
font-weight:900;
letter-spacing:2px;
color:#f5b700;
text-shadow:0 0 10px rgba(245,183,0,.18);
">

SWIFTIFY

</div>

<div style="
margin-top:6px;
font-size:11px;
color:#8ea0c4;
letter-spacing:.5px;
">

Secure • Fast • Instant Delivery!

</div>

</div>

</div>

`;

wrap.onmouseover = () => {
wrap.style.transform = "translateY(-2px)";
wrap.style.background = "rgba(245,183,0,.18)";
};

wrap.onmouseout = () => {
wrap.style.transform = "translateY(0)";
wrap.style.background = "rgba(245,183,0,.12)";
};

};

box.appendChild(
wrap
);

box.scrollTop =
box.scrollHeight;

/* RESET SO ADMIN CAN SEND AGAIN */
db
.collection(
"customers"
)
.doc(customer)
.update({

showReview:false

});

});

}