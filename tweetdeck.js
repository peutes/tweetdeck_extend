javascript:(
	(function(){ 
		var a=document.getElementsByClassName('is-wide-columns')[0];
		Array.prototype.forEach.call( a.getElementsByClassName('column'),function(e){e.style.width="450px"});
		var b=function(){
			Array.prototype.forEach.call( a.getElementsByClassName('media-size-medium'), function(e){e.style.width="250px";e.style.height="250px";})
		};
		var c=function(){
			Array.prototype.forEach.call(a.getElementsByClassName('media-size-small'), function(e){e.style.width="160px";e.style.height="160px";})
		};
		var d=function(){
			Array.prototype.forEach.call(a.getElementsByClassName('media-preview'),function(e){e.style.width="100%"; e.style.height="100%";})
		};
		var f=function(){
			Array.prototype.forEach.call(a.getElementsByClassName('media-image-container'), function(e){e.style.backgroundSize="cover";e.style.width="160px";e.style.height="160px";})
		};
		var g=TD.vo.Column.prototype; var o=g.mergeAndRenderChirps;
		g.mergeAndRenderChirps=function(e){
			o.bind(this)(e);b();c();d();f();
			[...document.getElementsByClassName('js-tweet-text')].forEach(e => {e.style.fontSize="13px"});
		};
		window.isRemove = false;
		setInterval(function(){
			window.isRemove = !isRemove;
		}, 5000); 
		TD.vo.Column.prototype.discardTweetsNotInRange = function(e,t){
			if(window.isRemove){
		 		TD.vo.Column.prototype.discardTweetsNotInRange(e,t);
		 	}
		};
	})()
)
