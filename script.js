document.addEventListener('DOMContentLoaded', init);

function generateString() {
  var ssid = document.getElementById("ssid").value;
  var password = document.getElementById("password").value;
  var encryption = document.getElementById("encryption").value;
  var hidden = document.getElementById("hidden").checked;

  return "WIFI:S:" + ssid + ";T:" + encryption + ";P:" + password + ";H:" + hidden + ";;"
}

function updateQRCode() {
  var text = generateString();
  var element = document.getElementById("qrcode");
  var bodyElement = document.body;
  if(element.lastChild)
    element.replaceChild(showQRCode(text), element.lastChild);
  else
    element.appendChild(showQRCode(text));
  populateStorage();
}

function populateStorage() {
  localStorage.setItem('ssid', document.getElementById('ssid').value);
  localStorage.setItem('encryption', document.getElementById('encryption').value);
  localStorage.setItem('hidden', document.getElementById('hidden').checked);
}

function setFromStorage() {
  document.getElementById('ssid').value = localStorage.getItem('ssid');
  document.getElementById('encryption').value = localStorage.getItem('encryption');
  document.getElementById('hidden').checked = localStorage.getItem('hidden');
}

function init() {
  if(!!localStorage.getItem('ssid')) {
    setFromStorage();
    updateQRCode();
  } else {
    updateQRCode();
  }
}
