window.onload = function() {

  var heroHeight = document.getElementById("hero-slider").offsetHeight;
  var heroWidth = document.getElementById("hero-slider").offsetWidth;
  var heroNextHeight = document.getElementById("hero-right-arrow").offsetHeight;
  var heroTop = document.getElementById("hero-slider").offsetTop;

  var arrowHeight = heroHeight / 2 + heroTop - heroNextHeight / 2;

  alert("arrowHeight");

  document.getElementById('hero-right-arrow').style.top = arrowHeight + "px";
  document.getElementById('hero-left-arrow').style.top = arrowHeight + "px";

}
