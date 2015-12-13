window.onload=function(){
	var el=document.getElementById('test');
	for(var i=0;i<52;i++){
		var els=document.createElement('div');
		els.setAttribute('class','item');
		// els.setAttribute('id','_'+i);
		// var r=Math.floor(Math.random()*256);
		// var b=Math.floor(Math.random()*256);
		// var g=Math.floor(Math.random()*256);
	 //	els.style.backgroundColor='rgb('+r+','+b+','+g+')';
	 	if(Math.random()>0.5){
	 		els.innerHTML=String.fromCharCode(Math.floor(Math.random()*26+65));
	 	}
		
		else{els.innerHTML=String.fromCharCode(Math.floor(Math.random()*26+97));}
		
		
		el.appendChild(els);
	}

		var item=document.getElementsByClassName('item');
		var i=0;
		var item1=document.createElement('div');
		item1.setAttribute('class','item1')
		el.appendChild(item1);
		var aa='00';
		item1.innerHTML='时间';
		var hasjishuqi=false;
		
		document.onkeydown=function(e){
			if(String.fromCharCode(e.keyCode+32)==item[i].innerHTML&&e.shiftKey==false||
			String.fromCharCode(e.keyCode)==item[i].innerHTML&&e.shiftKey==true){
			item[i].style.backgroundColor='#fff';
			item[i].style.color='#000';
			i++;
			

		}
		if(i>=item.length){
		      // location.reload();
		      clearInterval(t);
	}
		if(!hasjishuqi){
		 t=setInterval(function(){
			item1.innerHTML='00:'+aa;
			aa++;
			
			},1000);
		hasjishuqi=true;
	}
	};
	
		   
	
			



}
