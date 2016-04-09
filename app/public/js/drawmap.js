var mymap = L.map('mapid').setView([22.6169,120.2960],13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	})
	.addTo(mymap);