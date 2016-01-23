document.addEventListener('DOMContentLoaded', init);


function init() {

   var ssid = document.querySelector('ssid');
   var password = document.querySelector('password');
   var encryption = document.querySelector('encryption');
   var hidden = document.querySelector('hidden');


   ssid.addEventListener('change', function() {

      var betrag = input.value;
      var prozent = select.value;
      var summe = +betrag + betrag * prozent;

      output.value = summe + ' €';

   });

}
