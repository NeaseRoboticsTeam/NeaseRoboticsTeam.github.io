var slide_number = 1; // starts the slides at #1
var slide_duration = 5000; // time in milliseconds that each slider will last
var slide_ready = true;

var number_of_imgs = document.querySelectorAll('#hero-slider .hs-target').length;

window.onload = function() {

  var heroHeight = document.getElementById("hero-slider").offsetHeight;
  var heroWidth = document.getElementById("hero-slider").offsetWidth;
  var heroNextHeight = document.getElementById("hero-next").offsetHeight;
  var heroTop = document.getElementById("hero-slider").offsetTop;

  var arrowHeight = heroHeight / 2 + heroTop - heroNextHeight / 2;

  document.getElementById('hero-next').style.top = arrowHeight + "px";
  document.getElementById('hero-prev').style.top = arrowHeight + "px";

}

document.getElementsByTagName("BODY")[0].onresize = function() {
  var heroHeight = document.getElementById("hero-slider").offsetHeight;
  var heroWidth = document.getElementById("hero-slider").offsetWidth;
  var heroNextHeight = document.getElementById("hero-next").offsetHeight;
  var heroTop = document.getElementById("hero-slider").offsetTop;

  var arrowHeight = heroHeight / 2 + heroTop - heroNextHeight / 2;

  document.getElementById('hero-next').style.top = arrowHeight + "px";
  document.getElementById('hero-prev').style.top = arrowHeight + "px";
};

document.getElementById('hero-next').addEventListener("click", next);
document.getElementById('hero-prev').addEventListener("click", hsPrev);

function hsNext() {
}

function hsPrev() {
}

function next(){

  var pre = "hero-slider-";

  for(i = 1; i <= number_of_imgs; i++) {
    var this_id = pre + i;
    document.getElementById(this_id).style.display = 'none';
  }
  if(slide_number < number_of_imgs) {
    slide_number = slide_number + 1;
    var slide_id = "hero-slider-" + slide_number;
    document.getElementById(slide_id).style.display = 'block';
  }
  else {
    slide_number = 1;
    var slide_id = "hero-slider-" + slide_number;
    document.getElementById(slide_id).style.display = 'block';
  }
}
