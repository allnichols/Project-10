$(document).ready(function(){
	

	var randomUserAPI = 'https://randomuser.me/api/?results=3&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};//end AJAX
	 function showData(data){
	 		

	 		$.each(data.results, function(i, picture){
	 			var image = data.results[i].picture;
	 			console.log(image);
	 			
	 		});// end of the EACH
	 		// $('#employee-card').html(userPhoto);
	 		console.log(data);
	 		
	 		
	 }
	$.getJSON(randomUserAPI, randomUserOptions, showData);
});