function changeText() {
  document.getElementById("textChange").innerHTML =
    "Thanks for <strong>liking</strong> my Webpage";

  document.getElementById("textChange").classList.add("change");
}

var space = " ";
var pos = 0;
var msg = "I am Ethan";

function Scroll() {
  document.title =
    msg.substring(pos, msg.length) + space + msg.substring(0, pos);

  pos++;
  if (pos > msg.length) pos = 0;
  window.setTimeout("Scroll()", 0);
}
Scroll();

function enlarge() {
  document.getElementById("enlarge").style.fontSize = "25px";
}

function smaller() {
  document.getElementById("enlarge").style.fontSize = "16px";
}

function welcome() {
  alert("The page has been loaded");
}

function press() {
  alert("Key pressed");
}

function inputBg(x) {
  x.style.background = "yellow";
}

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function message() {
  alert("This alert box was triggered by the onreset event handler");
}

function focusUp() {
    alert('You are now trying to type in the text box')
}
