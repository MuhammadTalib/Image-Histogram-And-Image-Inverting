
function DrawNavBar(){
	//Rect defining the navbar rectangle
	var rect={
			x:cvs.width-180,
			y:0,
			width:180,
			height:cvs.height
		}
	//drawRect is a function available on file graphicsFunctions that takes rectangle coordinates and color and draw
	drawRect(rect,"#0066cc")
	
	//draw buttons and callback function and calls it when click 
	
	//input Image takes the input from user and is present on InputImageAndResizing.js -->GO there
	button(cvs.width-165,15,120,30,"Image Input","#e6f2ff","#0059b3",inputImage)
	
	//PlotHistogram is on another file Histogram.js -->GO there
	button(cvs.width-165,60,120,30," Histogram ","#e6f2ff","#0059b3",PlotHistogram)
	
	//Inverting or Flipping Image is on another file flipImage.js -->GO there
	button(cvs.width-165,105,120,30,"Invert Diagonal","#e6f2ff","#0059b3",()=>invert("Invert Diagonal"))
	button(cvs.width-165,150,120,30,"Invert Horizontal","#e6f2ff","#0059b3",()=>invert("Invert Horizontal"))
}