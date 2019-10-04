
function PlotHistogram(){
	var rect={
			x:0,
			y:cvs.height/2,
			width:imgwidth,
			height:imgheight
		}
	ctx.globalAlpha = 1;
	drawRect(rect,"#fff")
	
	var maxY=0;
	PlotAxis({x:20,y:(cvs.height)-20},{x:(cvs.width-180-20),y:(cvs.height)-20},{x:20,y:(cvs.height/2)+20})
	
	rect=renderableImage
	rD=[],gD=[],bD=[]
	const iD=ctx.getImageData(rect.xStart,rect.yStart,rect.renderableWidth,rect.renderableHeight).data;
	var i
	for (i=0;i<256;i++){
		rD[i]=0
		gD[i]=0
		bD[i]=0
	}
	for(i=0;i<iD.length;i+=4){
		rD[iD[i]]++
		gD[iD[i+1]]++
		bD[iD[i+2]]++
	}
	for(i=0;i<256;i++){
		if(rD[i]>maxY) maxY=rD[i]
		if(gD[i]>maxY) maxY=gD[i]
		if(bD[i]>maxY) maxY=bD[i]
	}		
	var percentageLength=(maxY/((cvs.height/2)-40))
	
	setTimeout(function(){
		for(i=0;i<256;i++){
			var m=0
			if(rD[i]>gD[i] && rD[i]>bD[i]){
				m=rD[i]
			}
			else if(gD[i]>rD[i] && gD[i]>bD[i]){
				m=gD[i]
			}
			else if(bD[i]>rD[i] && bD[i]>gD[i]){
				m=bD[i]
			}
			
			k=0
			ctx.globalAlpha = 0.7;
			ctx.beginPath();
			
			ctx.lineWidth=2;
			ctx.moveTo(i+23,(cvs.height)-20);
			ctx.lineTo(i+23,(cvs.height)-20-(rD[i]/percentageLength));
			ctx.strokeStyle="rgba(255,0,0,127)"
			
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(i+23,(cvs.height)-20);
			ctx.lineTo(i+23,(cvs.height)-20-(gD[i]/percentageLength));
			ctx.strokeStyle="rgba(0,255,0,20)"
			ctx.stroke();
			
			ctx.beginPath();
			ctx.moveTo(i+23,(cvs.height)-20);
			ctx.lineTo(i+23,(cvs.height)-20-(bD[i]/percentageLength));
			ctx.strokeStyle="rgba(0,0,255,20)"
			ctx.stroke();
		}
		},1000*4)
		ctx.globalAlpha = 1;
}
function animateLine(interpolate,l1,l2,time,color){
	setTimeout(function (){
			if (j < 1) {
				var sol=interpolate(l1,l2,j)
				drawPixel(sol.x,sol.y,color)
				j+=time
				animateLine(interpolate,l1,l2,time,color);          
		}  
		},1,interpolate,l1,l2,time,color)
}
function DrawLineWithAnimation(l1,l2,color){
	var time=1/1000
		console.log("time",time)
		j=0
		animateLine(interpolation,l1,l2,time,color)
}
function PlotAxis(origin,X,Y){
	DrawLineWithAnimation(origin,X,"#660033")
	DrawLineWithAnimation(origin,Y,"#660033")
}
/*function animateHitogramPoint(interpolate,l1,l2,time,index,m){
	setTimeout(function (){
		
			//console.log("k",k)
			//console.log("time",time)
			if (k < 1) {
				var sol=interpolate(l1,l2,k)
				//var index=Math.floor(k*1000)
				console.log("sol.y",sol.y/m,rD[index],gD[index],bD[index])
				var r=(rD[index]>sol.y*m)?"255,":"0,"
				var g=(gD[index]>sol.y*m)?"255,":"0,"
				var b=(bD[index]>sol.y*m)?"255":"0"
				var c="rgb("+r+g+b+")"
				console.log("color",c,index)
				drawPixel(sol.x,sol.y,c)
				k+=time
				animateHitogramPoint(interpolate,l1,l2,time,index,m);          
		}  
		},1,interpolate,l1,l2,time,index,m)
}
function delayColor (func,rect,arr,len) {	
	setTimeout(function () {  
		if (j < len-1) {
			func(rect,"rgb(0,"+arr[j]+",0)")
			j++
			
			delayColor(func,rect,arr,len);          
		}                       
	}, 10,func,rect,arr,len)
}*/