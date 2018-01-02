
var params =  {
	mouseDownX: 0,
	mouseDownY: 0,
	initX: 0,
	initY: 0,
	flag: false
}

var getCss = function(o,key){
	return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
}

var drag = function(target,cb){

	if(getCss(target, "left") !== "auto"){
		params.left = getCss(target, "left");
	}
	if(getCss(target, "top") !== "auto"){
		params.top = getCss(target, "top");
	}
	target.onmousedown = function(event){

		params.mouseDownX = event.pageX;
		params.mouseDownY = event.pageY;
		params.initX = target.offsetLeft;
		params.initY = target.offsetTop;
		params.flag = true;
	}
	target.onmousemove = function(event){
		if(params.flag){
		var distX = event.pageX,distY = event.pageY;
			target.style.left = parseInt(distX) - parseInt(params.mouseDownX) + parseInt(params.initX) + "px";
			target.style.top = parseInt(distY) - parseInt(params.mouseDownY) + parseInt(params.initY) + "px";
		}
	}
	target.onmouseup = function(event){
		params.flag = false;
		cb(target);
	}
	
}
