function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }
   var space = " ";
var pos = 0;
var msg = "frog haven ";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();
<!DOCTYPE html>
<html>
<body>

<h1 onmouseover="style.color='red'" onmouseout="style.color='black'">Mouse over this text</h1>

</body>
</html>
