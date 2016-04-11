$.getJSON("public/json/rehab.json")
.done(function(data){

	/* handle each object by appending into table */
	$.each(data, function(key,val){

		/* add marker to the map  */

		var popup = L.popup()
								 .setContent("<p>"+ val['name']   +"</p>" 
								 					 + "<p>"+ val['address']+ "</p>"
								 					 + "<p>"+ val['tel'] 		+ "</p>")


		var mk=L.marker(val['coordinate'], {
			title: val['name']
		})
		.bindPopup(popup)
		.addTo(mymap);

		mk._icon.id = "icon" + val['id'];

		/* add center data to the table */
		$("<tr></tr>").append("<td>"+val['id']+"</td>")
									.append("<td>"+val['name']+"</td>")
								  .append("<td>"+val['address']+"</td>")
								  .append("<td>"+val['tel']+"</td>")
								  .attr('id', 'center' + val['id'])
								  /* set listeners to focus to map icons*/
								  .on("click",function(){
								  	mymap.setView(mk._latlng, 16);
								  	mk.openPopup();
								  	$('#mapid').focus();
								  })
								  .appendTo("#contact");



	}); /* end each */

})
.fail(function(){
	$('.list').append('<p>Failed to retrieve data from server!</p>');
})

/* set listeners for zooming and out to location */

/* zoom in to location when popup clicked */
mymap.on('popupopen', function(centerMarker){
	mymap.setView(centerMarker.popup._latlng, 16);
});

$('.reset').on("click", function(){
	mymap.closePopup()
			 .setView([22.62595,120.32554],12);
});

$('#center')
