var vel = 5;
var poz = 1;

var w_w = window.innerWidth;

setInterval(function(){
	document.getElementById("title_t").style.left = poz+"px";
	if(poz >= window.innerWidth - 300 || poz <= 0){
		vel = -vel;
	}
	poz += vel;
},17);

