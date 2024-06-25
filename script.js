const shanplay = new Audio("indian.mp3")

function start() {
    alert("Hi! I'm Shanvanth. I wrote this part, and here is a fun fact: My average KDA is 3 / 132 / 4\nAnd that's when I play with bots!")

}

var device = "null"

const ua = navigator.userAgent
if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  device = "phone"
} else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  device = "tablet"
} else {
  device = "dektop"
}
if (device == "phone") {

  document.getElementById("main").style.padding= "0px";
  document.getElementById("img1").style.height= "110px";
  document.getElementById("img1").style.width= "200px";
  document.getElementById("img2").style.height= "80px";
  document.getElementById("img2").style.width= "200px";
  document.getElementById("main").style.textAlign= "center";
  document.getElementById("logo").style.height = "65px"
  document.getElementById("logo").style.width = "360px"
  
}

var w = window.innerWidth;


if (w<=1000) {
  document.getElementById("main").style.padding= "0px";
  document.getElementById("img1").style.height= "110px";
  document.getElementById("img1").style.width= "200px";
  document.getElementById("img2").style.height= "80px";
  document.getElementById("img2").style.width= "200px";
  document.getElementById("main").style.textAlign= "center";
  document.getElementById("logo").style.height = "65px"
  document.getElementById("logo").style.width = "360px"
  document.getElementById("b1").style.display = "contents"
  document.getElementById("b2").style.display = "contents"

}