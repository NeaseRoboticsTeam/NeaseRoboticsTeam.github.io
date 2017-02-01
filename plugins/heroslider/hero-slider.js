var slide_number = 1; // starts the slides at #1
var slide_duration = 7000; // time in milliseconds that each slider will last
var slide_play = true;
var count__test = 1;

var number_of_slides = document.querySelectorAll('#hero-slider .hs-target').length;

window.addEventListener("load", heroSliderCall, false);
function heroSliderCall() {

  var heroHeight = document.getElementById("hs-grab-for-fitting").offsetHeight;
  var heroWidth = document.getElementById("hero-slider").offsetWidth;
  var heroNextHeight = document.getElementById("hero-next").offsetHeight;
  var heroTop = document.getElementById("hero-slider").offsetTop;

  var arrowHeight = heroHeight / 2 + heroTop - heroNextHeight / 2 - 15;

  var width = window.innerWidth;
  var height = window.innerHeight;

  document.getElementById('hero-slider').style.width = width + "px";
  document.getElementById('hero-slider').style.height = heroHeight + "px";

  document.getElementById('hero-next').style.top = arrowHeight + "px";
  document.getElementById('hero-prev').style.top = arrowHeight + "px";

  hsCounter();

}

document.getElementsByTagName("BODY")[0].onresize = function() {
  var heroHeight = document.getElementById("hs-grab-for-fitting").offsetHeight;
  var heroWidth = document.getElementById("hero-slider").offsetWidth;
  var heroNextHeight = document.getElementById("hero-next").offsetHeight;
  var heroTop = document.getElementById("hero-slider").offsetTop;

  var arrowHeight = heroHeight / 2 + heroTop - heroNextHeight / 2;

  var width = window.innerWidth;
  var height = window.innerHeight;

  document.getElementById('hero-slider').style.width = width + "px";
  document.getElementById('hero-slider').style.height = heroHeight + "px";

  document.getElementById('hero-next').style.top = arrowHeight + "px";
  document.getElementById('hero-prev').style.top = arrowHeight + "px";
};

document.getElementById('hero-next').addEventListener("click", hsNext);
document.getElementById('hero-prev').addEventListener("click", hsPrev);
document.getElementById('hero-slider').addEventListener("mouseover", hsPause);
document.getElementById('hero-slider').addEventListener("mouseout", hsPlay);

function hsPrev() {
  var pre = "hero-slider-";

  for(i = 1; i <= number_of_slides; i++) {
    var this_id = pre + i;
    document.getElementById(this_id).style.opacity = '0';
  }
  if(slide_number > 1) {
    slide_number = slide_number - 1;
    var slide_id = "hero-slider-" + slide_number;
    document.getElementById(slide_id).style.opacity = '1';
  }
  else {
    slide_number = number_of_slides;
    var slide_id = "hero-slider-" + slide_number;
    document.getElementById(slide_id).style.opacity = '1';
  }
}

function hsNext() {

  var pre = "hero-slider-";

  for(i = 1; i <= number_of_slides; i++) {
    var this_id = pre + i;
    document.getElementById(this_id).style.opacity = '0';
  }
  if(slide_number < number_of_slides) {
    slide_number = slide_number + 1;
    var slide_id = "hero-slider-" + slide_number;
    document.getElementById(slide_id).style.opacity = '1';
  }
  else {
    slide_number = 1;
    var slide_id = "hero-slider-" + slide_number;
    document.getElementById(slide_id).style.opacity = '1';
  }
}

function hsPause() {
  slide_play = false;
}

function hsPlay() {
  slide_play = true;
}

function hsCounter() {
  setTimeout(function () {
    if(slide_play == true) {
      hsNext();
      hsCounter();
    }
    else {
      hsCounter();
      timeout();
    }
  }, slide_duration);
}
