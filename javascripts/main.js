var b;
	var r;

	var fu1 = function(){
		document.getElementById("c_color").style.backgroundColor = this.style.backgroundColor;
		b = this.style.backgroundColor; 
	}
	
	var g = document.getElementsByClassName("color");
	for(var i = 0; i<g.length; i++){
		g[i].onclick = fu1;
	}
	
	var fu2 = function(){
			r = 1; 
	}
	
	var fu3 = function(){
			r = 0; 
	}
	
	var fu = function(){
		if( r == 1 ){
			this.style.backgroundColor = b;
		}
	}

	for(var a = 0; a < 10000; a ++){
	
	var p = document.createElement("div");
	p.style.position = "relative";
	p.style.width = "5px";
	p.style.height = "5px";
	p.style.cssFloat = "left";
	p.onmouseup = fu3;
	p.onmousedown = fu2;
	p.onmouseover = fu;
	document.getElementById("plane").appendChild(p);
	
	}
