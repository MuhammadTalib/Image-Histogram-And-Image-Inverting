var width, height
window.onload=myInit();
let activeColor='red';
let yAxis=false;
var ctx
var cvs
var imgwidth
var imgheight
var renderableImage
var img ,j=0,k=0
var rD,gD,bD

function myInit(){
	
	//Initializing the Program
    cvs=document.getElementById("mycanvas");
	ctx=cvs.getContext("2d");
	
	//Setting the image height and width w.r.t canvas
	imgwidth=cvs.width-180
	imgheight=cvs.height/2
	
	//drawing the initial state where background is grey
	drawImageBack()
	
	//drawing the navbar appearing on right 
	//this function is on another file Navbar.js
	//GOTO Navbar.js
	DrawNavBar()
	
	//Adding event listener for the image input button On click
    document.getElementById("imageFile").addEventListener("change",handleFiles);
}

function drawImageBack(){
	var rect={
			x:0,
			y:0,
			width:imgwidth,
			height:imgheight
		}
	ctx.globalAlpha = 1;	
	drawRect(rect,"#c7c7c7")
	var rect={
			x:0,
			y:cvs.height/2,
			width:imgwidth,
			height:imgheight
		}
	ctx.globalAlpha = 1;
	drawRect(rect,"#fff")
}
function interpolation(a,b,t){
	var nx = a.x+(b.x-a.x)*t;
    var ny = a.y+(b.y-a.y)*t;
    return {x:nx,  y:ny};
}