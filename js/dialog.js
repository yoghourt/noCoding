function dialogShow(target){
	var dialog = $(target);
	dialog.show();
	setTimeout(function(){
		dialog.addClass("show");
	},0)	
}
function dialogClose(target){
	var dialog = $(target);
	dialog.removeClass("show");
	setTimeout(function(){
		dialog.hide();
	},1000)
}
function createBox(type,w,h){
	var box = document.createElement("div"),boxW,boxH;
	switch(type){
		case "i4":
			boxW = 320;
			boxH = 480;
			break;
		case "i5":
			boxW = 320;
			boxH = 568;
			break;
		case "i6":
			boxW = 375;
			boxH = 627;
			break;
		case "i6+":
			boxW = 414;
			boxH = 736;
			break;
		case "cos":
			boxW = w;
			boxH = h;
			break;
		default:
	}
	box.className = "box";
	box.style.width = boxW+"px";
	box.style.height = boxH+"px";
	box.style.backgroundColor = "#fff";
	$("#box-container").html(box);
}
function createText(text,fz,ff){
	var textObj = document.createElement("div");
	textObj.className = "text";
	textObj.innerText = text;
	textObj.style.fontSize = fz + "px";
	textObj.style.fontFamily = ff;
	textObj.style.whiteSpace = "nowrap"
	$("#box-container").find(".box").append(textObj);
}
$("#open-box-dialog").on("click",function(){
	dialogShow("#box-dialog");
});
$("#open-text-dialog").on("click",function(){
	dialogShow("#text-dialog");
});
$("#create-box-btn").on("click",function(){
	var sizeType = $("input[name=size]:checked").val(),
		comWidth = $("input[name=box_w]").val(),
		comHeight = $("input[name=box_h]").val();
	
	if(sizeType == null){
		alert("请选择或自定义容器尺寸！");
		return false;
	}
	if(sizeType ==="cos" && comWidth ===""){
		alert("你还未填写自定义容器的宽！");
		return false;
	}
	if(sizeType ==="cos" && comHeight ===""){
		alert("你还未填写自定义容器的高！");
		return false;
	}
	createBox(sizeType,comWidth,comHeight);
	dialogClose("#box-dialog");
});
$("#create-text-btn").on("click",function(){
	var textValue = $("input[name=text]").val() || "示例文字",
		fontSize = $("input[name=font-size]").val() || 12,
		fontFamily = $("input[name=font-size]").val() || "inherit";
	createText(textValue,fontSize,fontFamily);	
	dialogClose("#text-dialog");
});
