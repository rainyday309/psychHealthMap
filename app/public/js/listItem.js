$.getJSON("public/json/rehab.json")
.done(function(data){

	/* handle each object by appending into table */
	$.each(data, function(key,val){

		/* add center data to the table */
		$("<tr></tr>").append("<td>"+val['id']+"</td>")
									.append("<td>"+val['name']+"</td>")
								  .append("<td>"+val['address']+"</td>")
								  .append("<td>"+val['tel']+"</td>")
								  .attr('id', 'center' + val['id'])
								  .appendTo("#contact");
		/* add marker to the map 

		L.marker(val['coordinate'], {
			title: val['name']
		});
*/

	});

})
.fail(function(){
	$('.list').append('<p>Failed to retrieve data from server!</p>');
})