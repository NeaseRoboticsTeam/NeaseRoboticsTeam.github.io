window.addEventListener("load", frameSetter, false);
window.addEventListener("resize", frameSetter, false);
window.addEventListener("load", giveClick, false);

function frameSetter(){
  var width = document.getElementsByClassName('galimg')[0].offsetWidth;
  var galimgs = document.getElementsByClassName('galimg');
  for(i=0; i<galimgs.length; i++) {
    galimgs[i].style.height = width + "px";
  }
}


function giveClick(){
  var width = document.getElementsByClassName('galimg')[0].offsetWidth;
  var galimgs = document.getElementsByClassName('galimg');
  for(i=0; i<galimgs.length; i++) {
    var att = document.createAttribute("onclick");
    att.value = "enlarge(this)";
    galimgs[i].setAttributeNode(att);
  }
}

function enlarge(type){

  var cont = type.children[0].getAttribute("src");

  var prenode = document.createElement("div");

  var node = document.createElement("img");
  var node2 = document.createElement("div");

  var att1 = document.createAttribute("id");
  att1.value = "galheroimg";
  prenode.setAttributeNode(att1);

  var att2 = document.createAttribute("onclick");
  att2.value = "killGalHero(this)";
  prenode.setAttributeNode(att2);

  var att3 = document.createAttribute("src");
  att3.value = cont;
  node.setAttributeNode(att3);

  prenode.appendChild(node);
  prenode.appendChild(node2);

  document.getElementsByTagName('body')[0].appendChild(prenode);
}

function killGalHero(type){
  var parent = document.getElementsByTagName('body')[0];
  parent.removeChild(type);
}

/*function myFunction() {
    var h1 = document.getElementsByTagName("H1")[0];
    var att = document.createAttribute("class");
    att.value = "democlass";
    h1.setAttributeNode(att);
}*/
