var map;
var myLatLng = {lat: 57.048654, lng: 9.920159};

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		scrollwheel: false,
		zoom: 10
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});
}

var preloader = document.getElementById("preloader");
window.onload = function () {
	setTimeout(function () {
		preloader.style.display = "none";
	}, 1000);
};