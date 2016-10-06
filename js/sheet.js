function screenSizeGrab(){
  var width = window.innerWidth;
<<<<<<< Updated upstream
  var height = window.innerHeight;
  document.getElementById('homeimg').style.width = width + "px";
}

function mobileNav(){

  if(document.getElementById("di").value!="ON"){
    document.getElementById("di").value="ON";
    document.getElementById("di").style.display = "block";
    document.getElementById("dii").className = "dropitemsimgup";
    document.getElementById("di").className = "dropped-div-transition-down";
 }else{
    document.getElementById("di").value="OFF";
    document.getElementById("di").style.display = "none";
    document.getElementById("dii").className = "dropitemsimgdown";
    document.getElementById("di").className = "dropped-div-transition-up";
 }
}
=======

  var height = window.innerHeight;

  document.getElementById('homeimg').style.width = width + "px";

    var w = window.outerWidth;
      var h = window.outerHeight;
      var txt = "Window size: width=" + w + ", height=" + h;
      document.getElementById("demo").innerHTML = txt;

}
>>>>>>> Stashed changes
