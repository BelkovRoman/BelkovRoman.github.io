var mymap;
	var myLatLng = {lat: 53.186162, lng: 45.009610000000066};
	function initMap() {
		mymap = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			scrollwheel: false,
			zoom: 17
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: mymap,
			title: "7pap"
		});

		var contentString = '<div id="marker-description">'+
		'<h4 class="marker-description__title">Семь пап</h4>'+
		'<div id="marker-description__content">'+
		'<span>г. Пенза, ул. Карла Маркса, 15</span>'+
		'</div>'+
		'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		infowindow.open(map,marker);

		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
	}