
function inputImage(){
	//	When button is clicked this function is called first
	
	//drawImageBack again draws the background image of grey color
	drawImageBack()
	
	//Auto click the input tag on html when inputImage button is clicked and interrupt the program for Input
	document.getElementById("imageFile").click()
}
function handleFiles(){
    //Hndling files that inputs
	
    var theGoods=document.getElementById("imageFile").files[0];
    img=new Image();
    var reader=new FileReader();
    reader.addEventListener("load",function(){
        img.src=reader.result;
    })
    img.onload = function(){ 
        calcAndGraph(img)
    }
    if(theGoods) {
        reader.readAsDataURL(theGoods);
    }
}
function calcAndGraph(img){
   
   //Calculating Resinzing and Drawing the image
    width=img.width;
    height=img.height;
   
	renderableImage=fitImageOn({width:cvs.width-180,height:cvs.height/2},img)
	s=renderableImage
	ctx.drawImage(img,s.xStart,s.yStart,s.renderableWidth,s.renderableHeight); 

}

var fitImageOn=function(canvas,imageObj){
	//Resizing function
	var imageAspectRatio=imageObj.width/imageObj.height;
	var canvasAspectRatio=canvas.width/canvas.height
	var renderableWidth,renderableHeight,xStart,yStart
	
	if(imageAspectRatio>canvasAspectRatio){
		
		renderableWidth=canvas.width
		renderableHeight=imageObj.height*(renderableWidth/imageObj.width)
		xStart=0
		yStart=(canvas.height-renderableHeight)/2
		
	}else if(imageAspectRatio<canvasAspectRatio){
		
		renderableHeight=canvas.height
		renderableWidth=imageObj.width*(renderableHeight/imageObj.height)
		xStart=(canvas.width-renderableWidth)/2
		yStart=0
		
	}else{
		renderableHeight=canvas.height
		renderableWidth=canvas.width
		xStart=0
		yStart=0
	}
	return {xStart,yStart,renderableWidth,renderableHeight}
	
}

function animateImageOut(img,prop){
	var p=prop,mid
	if(img!=undefined){
		p.xStart
		p.yStart-=5
		p.renderableWidth
		p.renderableHeight+=10
		mid=(p.renderableWidth-p.xStart)/2
		setInterval(function(img,p){
			if(mid!=p.xStart){
				drawRect({x:p.xStart,y:p.yStart-5,width:p.renderableWidth,height:p.renderableHeight+10},"#c7c7c7")
				p.xStart+=1
				p.yStart+=1
				p.renderableWidth-=2
				p.renderableHeight-=2
				ctx.drawImage(img,p.xStart,p.yStart,p.renderableWidth,p.renderableHeight)
			}
		},3,img,prop)
	}
}