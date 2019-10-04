

function invert(flag){
	var rect={
			x:0,
			y:cvs.height/2,
			width:imgwidth,
			height:imgheight
		}
	ctx.globalAlpha = 1;
	drawRect(rect,"#fff")
	rect=renderableImage
	
	if(flag==="Invert Diagonal"){
		invertImageDiagonally(rect)
	}else if(flag==="Invert Horizontal"){
		flipHorizontally(rect)
	}
}

function invertImageDiagonally(rect){
	
	const iD=ctx.getImageData(rect.xStart,rect.yStart,rect.renderableWidth,rect.renderableHeight).data;
	var imagedata = ctx.createImageData(rect.renderableWidth,rect.renderableHeight);
	var i,j=iD.length-4
	for(i=0;i<iD.length;i+=4){
		imagedata.data[j] = iD[i];
		imagedata.data[j+1] = iD[i+1];
		imagedata.data[j+2] = iD[i+2];
		imagedata.data[j+3] = iD[i+3];
		j-=4
	}
	ctx.putImageData(imagedata, rect.xStart, (cvs.height/2)+rect.yStart);
}
function flipHorizontally(rect){
	
	const iD=ctx.getImageData(rect.xStart,rect.yStart,rect.renderableWidth,rect.renderableHeight).data;  
	var imagedata = ctx.createImageData(rect.renderableWidth,rect.renderableHeight);
	var i,j=0,t=0
	for(i=0;i<iD.length;i+=4){
		imagedata.data[i] = iD[((rect.renderableWidth-j)*4)-4+t];
		imagedata.data[i+1] = iD[((rect.renderableWidth-j)*4)-4+1+t];
		imagedata.data[i+2] = iD[((rect.renderableWidth-j)*4)-4+2+t];
		imagedata.data[i+3] = iD[((rect.renderableWidth-j)*4)-4+3+t];
		j++
		if(j>=rect.renderableWidth) {
			j=0
			t+=rect.renderableWidth*4
		}
	}
	ctx.putImageData(imagedata, rect.xStart,(cvs.height/2)+rect.yStart);
}
function flipVertically(rect){
	console.log("w,h",rect.width,rect.height,rect.width*rect.height*4)
	const iD=ctx.getImageData(rect.x,rect.y,rect.width,rect.height).data;  
	var imagedata = ctx.createImageData(rect.height, rect.width);
	var i,j=0,t=0
	for(i=0;i<iD.length;i+=4){
		imagedata.data[i] = iD[((rect.width-j)*4)-4+t];
		imagedata.data[i+1] = iD[((rect.width-j)*4)-4+1+t];
		imagedata.data[i+2] = iD[((rect.width-j)*4)-4+2+t];
		imagedata.data[i+3] = iD[((rect.width-j)*4)-4+3+t];
		j++
		if(j>=rect.width) {
			j=0
			t+=rect.width*4
		}
	}
	console.log("img",imagedata.data)
	ctx.putImageData(imagedata, rect.x,210);
}