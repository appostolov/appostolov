var vel = 5;
var poz = 1;

var w_w = window.innerWidth;

var inter = setInterval(function(){
	document.getElementById("title_t").style.left = poz+"px";
	if(poz >= window.innerWidth - 330 || poz <= 0){
		document.getElementById("title_t").style.background = "gold";
		vel = -vel;
		var x = Math.floor((Math.random() * 999) + 1);
		document.getElementById("abs_container").style.background = "#"+x.toString();
	}else{
		document.getElementById("title_t").style.background = "black";
	}
	poz += vel;
},17);

