$(document).ready(function(){
	
	

	var randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};//end AJAX
	 function employeeData(data){
	 		
		let employeeDetails = data.results;
		console.log(employeeDetails);
		for(let i=0; i<employeeDetails.length; i++){
			let member = employeeDetails[i];
			let image = member.picture.large;
			let firstName = member.name.first;
			let lastName = member.name.last;
			let Name = firstName + '' + lastName;
			console.log(Name);
		};
	 		
	 		
	 		
	 }
	$.getJSON(randomUserAPI, randomUserOptions, employeeData);
});