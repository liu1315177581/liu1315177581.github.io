//change background
var box = document.getElementById("box");
var btn = document.getElementById("btn");

var redBtn = document.getElementById("redBtn");
var yellowBtn = document.getElementById("yellowBtn");
var blueBtn = document.getElementById("blueBtn");

var set = document.getElementById("set");
var setBox = document.getElementById("setBox")




btn.onclick = function() {
	set.style.display = "block";
	setBox.style.display = "block";
}
redBtn.onclick = function() {
	box.style.background = "red";
}
yellowBtn.onclick = function() {
	box.style.background = "yellow";
}
blueBtn.onclick = function() {
	box.style.background = "blue";
}


//change width
var widthBtn1 = document.getElementById("widthBtn1");
var widthBtn2 = document.getElementById("widthBtn2");
var widthBtn3 = document.getElementById("widthBtn3");

widthBtn1.onclick = function() {
	box.style.width = "200px";
}
widthBtn2.onclick = function() {
	box.style.width = "300px";
}
widthBtn3.onclick = function() {
	box.style.width = "400px";
}

//change height
var heightBtn1 = document.getElementById("heightBtn1");
var heightBtn2 = document.getElementById("heightBtn2");
var heightBtn3 = document.getElementById("heightBtn3");



heightBtn1.onclick = function() {
	box.style.height = "200px";
}
heightBtn2.onclick = function() {
	box.style.height = "300px";
}
heightBtn3.onclick = function() {
	box.style.height = "400px";
}



//reset   ok

var reset = document.getElementById("reset");
var ok = document.getElementById("ok");

reset.onclick = function() {
	box.style.width = "100px";
	box.style.height = "100px";
	box.style.background = "none"
	set.style.display = "none";
	setBox.style.display = "none";
}
ok.onclick = function() {
	set.style.display = "none";
	setBox.style.display = "none";
}