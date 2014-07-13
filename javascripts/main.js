var vel = 5;
var poz = 1;
var colors = 255;

var w_w = window.innerWidth;

var paths = document.getElementsByClassName("path");

var path_num = 0;

var time = 0;

var time1 = 0;

var inter = setInterval(function(){
	if(time > 0 && path_num < paths.length){
		for(var r = 0; r < paths.length){
			paths[r].style.backgound = "rgba(255,255,255,0.7)";	
		}
		paths[path_num].style.backgound = "gold";
		if(time1 >= 3){
			path_num += 1;
			time1 = 0;
		}
	}
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

