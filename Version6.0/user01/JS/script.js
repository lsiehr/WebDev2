function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }
var space = " ";
var pos = 0;
var msg = "User 19";
function show_coords(event) {
    document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
  }

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
function mDown(obj) {
    obj.style.backgroundColor = "orange";
    obj.innerHTML = "Release Me";
}
  
  function mUp(obj) {
    obj.style.backgroundColor="yellow";
    obj.innerHTML="Thank You";
}
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
function show_coords(event) {
    document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}

Scroll();