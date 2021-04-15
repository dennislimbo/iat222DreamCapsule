/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
}

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}
function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

function scaleOrb(orbColor) {
  if (orbColor === document.getElementById("green")){
    $("#green").css("transform", "scale(1.1)");
    $("#purple").css("transform", "scale(0.9)");
    $("#red").css("transform", "scale(0.9)");
    $("#blue").css("transform", "scale(0.9)");
    $("#yellow").css("transform", "scale(0.9)");
    $("#orange").css("transform", "scale(0.9)");
  } else if (orbColor === document.getElementById("purple")){
    $("#green").css("transform", "scale(0.9)");
    $("#purple").css("transform", "scale(1.1)");
    $("#red").css("transform", "scale(0.9)");
    $("#blue").css("transform", "scale(0.9)");
    $("#yellow").css("transform", "scale(0.9)");
    $("#orange").css("transform", "scale(0.9)");
  } else if (orbColor === document.getElementById("red")){
    $("#green").css("transform", "scale(0.9)");
    $("#purple").css("transform", "scale(0.9)");
    $("#red").css("transform", "scale(1.1)");
    $("#blue").css("transform", "scale(0.9)");
    $("#yellow").css("transform", "scale(0.9)");
    $("#orange").css("transform", "scale(0.9)");
  } else if (orbColor === document.getElementById("blue")){
    $("#green").css("transform", "scale(0.9)");
    $("#purple").css("transform", "scale(0.9)");
    $("#red").css("transform", "scale(0.9)");
    $("#blue").css("transform", "scale(1.1)");
    $("#yellow").css("transform", "scale(0.9)");
    $("#orange").css("transform", "scale(0.9)");
  } else if (orbColor === document.getElementById("yellow")){
    $("#green").css("transform", "scale(0.9)");
    $("#purple").css("transform", "scale(0.9)");
    $("#red").css("transform", "scale(0.9)");
    $("#blue").css("transform", "scale(0.9)");
    $("#yellow").css("transform", "scale(1.1)");
    $("#orange").css("transform", "scale(0.9)");
  } else if (orbColor === document.getElementById("orange")){
    $("#green").css("transform", "scale(0.9)");
    $("#purple").css("transform", "scale(0.9)");
    $("#red").css("transform", "scale(0.9)");
    $("#blue").css("transform", "scale(0.9)");
    $("#yellow").css("transform", "scale(0.9)");
    $("#orange").css("transform", "scale(1.1)");
  }
}

function unscaleOrb(orbColor) {
  $("#green").css("transform", "scale(1)");
    $("#purple").css("transform", "scale(1)");
    $("#red").css("transform", "scale(1)");
    $("#blue").css("transform", "scale(1)");
    $("#yellow").css("transform", "scale(1)");
    $("#orange").css("transform", "scale(1)");
}