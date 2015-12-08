 $(document).ready(function(){
 	var oJson=['images/0.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg',
 	'images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg','images/13.jpg',
 	'images/14.jpg','images/15.jpg','images/16.jpg','images/17.jpg','images/18.jpg','images/19.jpg','images/20.jpg','images/21.jpg'];
 	//$('#main').append('<div class="box"><div class="pic"><img src='+oJson[0]+' /></div></div>');
 	waterFall();
 	$(window).scroll(function(){
 		var oMain=$('#main');
 		var Boxs=$('.box');
 		var oHeight=Boxs.last().offset().top;
 		var sHeight=$(window).height()+$(document).scrollTop();
 		var rand=0;
 		//console.log(oHeight);
 		//console.log(sHeight);
 		if(sHeight>oHeight){
 			//console.log('enter');
 			for(var i=0;i<10;i++){
 				rand=Math.floor(Math.random()*22);
 				oMain.append('<div class="box"><div class="pic"><img src='+oJson[rand]+' /></div></div>');
 			}
 			waterFall();
 		}
 	});

 	function waterFall(){
	 	var Boxs=$('.box');
	 	var HArr=new Array();
	 	for(var i in Boxs){
	 		if(i<5){
	 			HArr.push(Boxs.eq(i).outerHeight());
	 			Boxs.eq(i).css('left',i*Boxs.eq(i).outerWidth()+'px');
	 		}else{
	 			var HMin=Math.min.apply(null,HArr);
	 			var HIndex=getMinIndex(HMin,HArr);
	 			Boxs.eq(i).css({"top":HArr[HIndex]+'px','left':HIndex*Boxs.eq(i).outerWidth()+'px'});
	 			HArr[HIndex]+=Boxs.eq(i).outerHeight();
 			}
 		}
 	}

 	function getMinIndex(x,arr){
 		for(var i in arr){
 			if(x==arr[i])
 				return i;
 		}
 		return null;
 	}
 });
