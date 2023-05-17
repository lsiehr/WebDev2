function changeText() {
  document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
}

var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function whichButton(event) {
  document.getElementById("demo").innerHTML = event.keyCode;
}

function preferedBrowser() {
  prefer = document.forms[0].browsers.value;
  alert("You prefer browsing internet with " + prefer);
}

function confirmInput() {
  fname = document.forms[0].fname.value;
  alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
}

function changeText(id) {
  id.innerHTML = "Ooops!";
}