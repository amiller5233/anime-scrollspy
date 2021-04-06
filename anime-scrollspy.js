class AnimeScrollspy {
	constructor(threshold=0.8) {
		this.threshold = threshold
		this.elements = []
	}

	add(target, anime) {
		this.elements.push(new AnimeScrollspyElement(target, anime))
	}

	scroll() {
		var threshold = this.threshold
		this.elements.forEach(function(el){
			if(el.scrollTop < window.scrollY+window.innerHeight*threshold && !el.anime.began) {
				el.anime.play()
			}
		})
	}

}

class AnimeScrollspyElement {
	constructor(target, anime) {
		this.target = target;
		this.anime = anime;
	}

	get scrollTop() {
		return $(this.target)[0].getBoundingClientRect().top + window.pageYOffset
	}
}

const anime_scrollspy = new AnimeScrollspy()

document.addEventListener('scroll', function(e){ anime_scrollspy.scroll() })
