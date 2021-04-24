
// ref https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
window.addEventListener('scroll', () => {
	document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);




function scrollToTop() {
	document.documentElement.scrollTop = 0;
	window.scrollTo(0, 0);
}

function scrollToBottom() {
	window.scrollTo(0, document.body.scrollHeight);
}

document.getElementById("HomeButton").onclick =scrollToTop;
document.getElementById("ArrowButton").onclick =scrollToBottom;

