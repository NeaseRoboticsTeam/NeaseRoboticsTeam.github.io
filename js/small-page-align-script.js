function smallPageAlign(){
  var bodyHeight = window.innerHeight;
  var headerHeight = document.getElementById("HEADER").offsetHeight;
  var footerHeight = document.getElementById("FOOTER").offsetHeight;
  var rowHeight = document.getElementById("ROW").offsetHeight;

  var containerHeight = bodyHeight - (headerHeight + footerHeight + 10);

  document.getElementById('CONTAINER').style.height = containerHeight + "px";

  var rowFromTop = (bodyHeight / 2) - ((rowHeight / 2) + (headerHeight * 2));

  document.getElementById('ROW').style.top = rowFromTop + "px";
}
