function screenSizeGrab(){
  var width = window.innerWidth;

  var height = window.innerHeight;

  document.getElementById('homeimg').style.width = width + "px";

    var w = window.outerWidth;
      var h = window.outerHeight;
      var txt = "Window size: width=" + w + ", height=" + h;
      document.getElementById("demo").innerHTML = txt;

}
