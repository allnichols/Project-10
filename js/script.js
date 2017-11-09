$(document).ready(function(){
	

	var randomUserAPI = 'https://randomuser.me/api/?results=3&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};//end AJAX
	 function showData(data){
	 		var userPhoto = '<img src="'+ data.results[0].picture.large +'">';
	 		$('#employee-card').html(userPhoto);

	 		console.log(data);
	 }
	$.getJSON(randomUserAPI, randomUserOptions, showData);
});