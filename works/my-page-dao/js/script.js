var preloader = document.getElementById("preloader");
window.onload = function () {
	setTimeout(function () {
		preloader.style.display = "none";
	}, 5500);
};

var elem = document.getElementById("preloader");
if (document.body.clientWidth<800){
	elem.parentNode.removeChild(elem);
}