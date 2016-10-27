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

function smallPageAlign(){
  var bodyHeight = window.innerHeight;
  var headerHeight = document.getElementById("HEADER").offsetHeight;
  var footerHeight = document.getElementById("FOOTER").offsetHeight;
  var rowHeight = document.getElementById("ROW").offsetHeight;

  var containerHeight = bodyHeight - (headerHeight + footerHeight + 10);

  document.getElementById('CONTAINER').style.height = containerHeight + "px";

  var rowFromTop = (bodyHeight / 2) - ((rowHeight / 2) + headerHeight);

  document.getElementById('ROW').style.top = rowFromTop + "px";
}
