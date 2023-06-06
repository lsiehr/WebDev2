function newsSub() {
  var btn = document.querySelector("#email-text");

  if (btn.value.length == 0) {
    alert("Please enter email address to subscribe");
  } else {
    alert("Thanks for subscribing");
  }
}

function checkAvailibility(clicked_id) {
  var changeTxt = document.querySelector("#dateH");

  if (clicked_id == "avalible") {
    changeTxt.innerHTML = "Booked your appointment!";
  } else {
    changeTxt.innerHTML = "Sorry that date is not availible!";
  }
}

function copyClip(words) {
  navigator.clipboard.writeText(words.innerHTML);

  var pastWords = words.innerHTML;
  words.innerHTML = "Coppied to clipboard";
  setTimeout(function () {
    words.innerHTML = pastWords;
  }, 2000);
}

function purchasePlan(plan) {
  alert('Thanks for purchasing the ' + plan + ' plan')
}
