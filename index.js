function showClickOn(el) {
  document.getElementById(el).style = "border-color:greenyellow;";
}
function showClickAway(el) {
  document.getElementById(el).style = "border-color:black;";
}

function updateStored(day, newStr) {
  localStorage.setItem(day, newStr);
}

function checkDif(str, day) {
  return str.replace(/ /g, '') == getStored(day);
}


function initLocal() {
  myStorage = window.localStorage;
  localStorage.setItem('wkend1', getStored('wkend1'));
  document.getElementById("wkend1txt").innerHTML = getStored('wkend1');
  localStorage.setItem('mon', getStored('mon'));
  document.getElementById("montxt").innerHTML = getStored('mon');
  localStorage.setItem('tue', getStored('tue'));
  document.getElementById("tuetxt").innerHTML = getStored('tue');
  localStorage.setItem('wed', getStored('wed'));
  document.getElementById("wedtxt").innerHTML = getStored('wed');
  localStorage.setItem('thu', getStored('thu'));
  document.getElementById("thutxt").innerHTML = getStored('thu');
  localStorage.setItem('fri', getStored('fri'));
  document.getElementById("fritxt").innerHTML = getStored('fri');
  localStorage.setItem('wkend2', getStored('wkend2'));
  document.getElementById("wkend2txt").innerHTML = getStored('wkend2');
  updateDate();
}
function updateDate() {
  today = new Date();
  wk1Date = new Date();
  monDate = new Date();
  tueDate = new Date();
  wedDate = new Date();
  thuDate = new Date();
  friDate = new Date();
  wk2Date = new Date();
  dateOffset = today.getDay();
  wk1Date.setDate(today.getDate() - dateOffset);
  monDate.setDate(today.getDate() + (1 - dateOffset));
  tueDate.setDate(today.getDate() + (2 - dateOffset));
  wedDate.setDate(today.getDate() + (3 - dateOffset));
  thuDate.setDate(today.getDate() + (4 - dateOffset));
  friDate.setDate(today.getDate() + (5 - dateOffset));
  wk2Date.setDate(today.getDate() + (6 - dateOffset));
  document.getElementById("monname").innerHTML = "Monday " + (monDate.getMonth() == 0 ? 12 : monDate.getMonth() + 1) + "/" + monDate.getDate() + ":";
  document.getElementById("tuename").innerHTML = "Tuesday " + (tueDate.getMonth() == 0 ? 12 : tueDate.getMonth() + 1) + "/" + tueDate.getDate() + ":";
  document.getElementById("wedname").innerHTML = "Wednesday " + (wedDate.getMonth() == 0 ? 12 : wedDate.getMonth() + 1) + "/" + wedDate.getDate() + ":";
  document.getElementById("thuname").innerHTML = "Thursday " + (thuDate.getMonth() == 0 ? 12 : thuDate.getMonth() + 1) + "/" + thuDate.getDate() + ":";
  document.getElementById("friname").innerHTML = "Friday " + (friDate.getMonth() == 0 ? 12 : friDate.getMonth() + 1) + "/" + friDate.getDate() + ":";
}
//only call once
function getStored(day) {
  return localStorage.getItem(day);
}