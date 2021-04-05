/*
ENSURE THIS IS IN YOUR CSS FILE
[class*="fade-"] {
	opacity: 0;
}
*/

$(document).ready(function(){
	scrollspy()

	$('[lazy-src]').each(function(i,e){
		$(e).attr('src',$(e).attr('lazy-src'))
	})
})

$(window).scroll(function(){
	scrollspy()
})

var elems = []

function scrollspy() {
	elems.forEach(function(el){
		if($(el.tgt).position().top < $(window).scrollTop()+$(window).height()*0.8 && !el.anime.began) {
			el.anime.play()
		}
	})
}