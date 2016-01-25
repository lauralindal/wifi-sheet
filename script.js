document.addEventListener('DOMContentLoaded', init);

function createWifiInfoObject() {
  var ssid = document.getElementById("ssid").value;
  var password = document.getElementById("password").value;
  var encryption = document.getElementById("encryption").value;
  var hidden = document.getElementById("hidden").checked;
  return {'ssid': ssid, 'password': password, 'encryption': encryption, 'hidden': hidden}
}

function generateString(wifiInfo) {
  return "WIFI:S:" + wifiInfo.ssid + ";T:" + wifiInfo.encryption + ";P:" + wifiInfo.password + ";H:" + wifiInfo.hidden + ";;"
}

function reactToInput(){
  var wifiInfo = createWifiInfoObject();
  updateQRCode(wifiInfo);
  populateStorage(wifiInfo.ssid, wifiInfo.encryption, wifiInfo.hidden);
}

function updateQRCode(wifiInfo) {
  var text = generateString(wifiInfo);
  var element = document.getElementById("qrcode");
  if(element.lastChild) {
    element.replaceChild(showQRCode(text), element.lastChild);
  }
  else {
    element.appendChild(showQRCode(text));
  }
}

function populateStorage(ssid, encryption, hidden) {
  localStorage.setItem('ssid', ssid);
  localStorage.setItem('encryption', encryption);
  localStorage.setItem('hidden', hidden);
}

function setFromStorage() {
  document.getElementById('ssid').value = localStorage.getItem('ssid');
  document.getElementById('encryption').value = localStorage.getItem('encryption');
  document.getElementById('hidden').checked = localStorage.getItem('hidden');
}

function init() {
  if(!!localStorage.getItem('ssid')) {
    setFromStorage();
    reactToInput();
  }
}
