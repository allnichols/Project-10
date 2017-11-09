$(document).ready(function(){
	

	var randomUserAPI = 'https://randomuser.me/api/?nat=us?results=2';
	var randomUserOptions = {
		dataType: 'json'
	};
	 function showData(data){
	 		var userPhoto = '<img src="'+ data.results[0].picture.large +'">';
	 		$('#employee-card').html(userPhoto);

	 		console.log(data);
	 }
	$.getJSON(randomUserAPI, randomUserOptions, showData);
});