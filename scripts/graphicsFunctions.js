
//Drawing the Rectangle
function drawRect(rect,color){
	grid=new Path2D();
	grid.rect(rect.x,rect.y,rect.width,rect.height);
	ctx.fillStyle=color
	ctx.fill(grid);
}

// drawing a single pixel
function drawPixel(x,y,color){
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+1,y+1);
	ctx.strokeStyle=color
	ctx.stroke();
}