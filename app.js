// --------------- Parallax ---------------------
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset
	* 0.7 + "px";
})




// ---------------Smooth Scrolling---------------------

const navbarLinks = document.querySelectorAll(".navbar a");


navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(event) {
	smoothScroll(event);
}

// Smooth-Scrolling

function smoothScroll(event){
	event.preventDefault();
	const targetId = event.currentTarget.getAttribute("href");
	window.scrollTo({
		top: document.querySelector(targetId).offsetTop,
		behavior: "smooth"
	});
}



