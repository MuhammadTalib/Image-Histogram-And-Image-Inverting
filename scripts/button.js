
function button(xx,yy,ww,hh,text,bgColor,fgColor,onClick){
    var cvs=document.getElementById("mycanvas")
    var ctx=cvs.getContext("2d");
    
    var rect={
        x:xx,
        y:yy,
        w:ww,
        h:hh
    }

    cvs.addEventListener('click',function(e){
        var mousePos=getMousePos(cvs,e)
        if(InsideMousePos(mousePos,rect)){
			onClick()
        }
    })
	
    const path=new Path2D();
    path.rect(xx,yy,ww,hh)
    path.closePath()

    ctx.fillStyle=bgColor
    ctx.fill(path)
    ctx.lineWidth=2
	ctx.font = "16px Arial";
	ctx.fillStyle = fgColor;
	ctx.textAlign = "center";
	ctx.fillText(text,xx+ww/2,yy+hh-12);
}
function InsideMousePos(pos,rect){
    return pos.x>rect.x && pos.x<rect.x+rect.w && pos.y>rect.y && pos.y<rect.y+rect.h;
}
function getMousePos(cvs,e){
    var rect=cvs.getBoundingClientRect();
    return{
        x:e.clientX-rect.left,
        y:e.clientY-rect.top
    }

}
