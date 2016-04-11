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
								  .attr('class', 'center')
								  .attr('id', 'center' + val['id'])
									/* set data-coord-x as x coordinate for further use*/
									.attr('data-coord-x', val['coordinate'][0])
									/* set data-coord-y as y coordinate for further use*/
									.attr('data-coord-y', val['coordinate'][1])	

								  /* set listeners to focus to map icons */
								  /* deprecated: replaced by setting only one listener to .center class 

								  .on("click",function(){
								  	mymap.setView(mk._latlng, 16);
								  	mk.openPopup();
								  	$('#mapid').focus();
								  })

									*/
								  .appendTo("#contact");



	}); /* end each */
	
	// set listener for click on table row then open pertinent popup // 
	$(".center").on("click", function(){
		// get the id of clicked item
		// match to /(center)(\d+)/, use the 2nd back reference for further processing
		var myid = "icon" + $(this).attr('id').match(/(center)(\d+)/)[2];

		// loop over all layers, if id match what we wanted, open the popup bounded
		mymap.eachLayer(function(marker){
		 if ($(marker._icon).attr('id') == myid) {
	 		marker.openPopup();
	 		}
		});
	});
	// end of handler //

})
.fail(function(){
	$('.list').append('<p>Failed to retrieve data from server!</p>');
});



/* focus to map and zoom in to location when popup clicked */
mymap.on('popupopen', function(centerMarker){
	mymap.setView(centerMarker.popup._latlng, 16);
	$('#mapid').focus();
});

/* reset map location when clicking title*/
$('.reset').on("click", function(){
	mymap.closePopup()
			 .setView([22.62595,120.32554],12);
});

