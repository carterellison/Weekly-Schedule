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
}

//only call once
function getStored(day) {
  return localStorage.getItem(day);
}