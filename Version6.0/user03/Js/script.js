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
    alert("You pressed a key inside the input field");
}   
function myupperFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }
