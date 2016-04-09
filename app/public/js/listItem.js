$.getJSON("public/json/rehab.json")
.done(function(data){
	
	/* 
	console.log('data retrieved');
	console.log(data);
	*/
})
.fail(function(){
	$('.list').append('<p>Failed to retrieve data from server!</p>');
})