var size = 600;
var vaLine;
var vbLine;
var vabLine;
var riverLine;
var hLine;
var vLine;
var cLine;
var pLine;
var waterBackground;
var circle1;
var circle2;
var aCircle;
var bCircle;
var paper;
var clearID;
var fps = 60;
var state;
var pointList = [];
var backgroundRectangle;
var oldScale;
var oldSize;

$(document).ready(function(){
	
	resize();
	
});

/*
resize only if it has been 250ms since last resize
this stops elements jumping while the browser is still resizing
*/
var resizeTimer;
$(window).resize(function (){
	
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resize, 250);
	
});

/* 
readjust all elements to suit new display size
*/
function resize(){
	
	var w = getNewDimensions();
	resizeNavBar();
	
	oldSize = size;
	size = getNewSize();
	
}