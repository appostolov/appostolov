var vel = 5;
var poz = 1;
var colors = 255;

var w_w = window.innerWidth;

var inter = setInterval(function(){
	document.getElementById("title_t").style.left = poz+"px";
	document.getElementById("title_t").style.background = "rgba("+colors+","+colors+",0,1)";
	if(poz >= window.innerWidth - 330 || poz <= 0){
		colors = 255;
		vel = -vel;
		var x = Math.floor((Math.random() * 999) + 1);
		document.getElementById("abs_container").style.background = "#"+x.toString();
	}else{
		if(colors>=0){
			colors -= 5;	
		}
	}
	poz += vel;
	time ++;
	time1 ++;
},17);

