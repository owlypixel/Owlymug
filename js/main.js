const stars = Array.prototype.slice.call(document.querySelectorAll(".star"));

setInterval(animateStar, 2000);

function animateStar(){
	var randomStar = stars[Math.floor(Math.random() * stars.length)];
	randomStar.classList.add("blink");
}

function removeClass(e){
	this.classList.remove("blink");
}

for(var i=0; i< stars.length; i++) {
       stars[i].addEventListener("animationend", removeClass);
}