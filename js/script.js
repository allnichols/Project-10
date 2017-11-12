$(document).ready(function(){
	
	
	var randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};//end AJAX

	 function employeeData(data){
	 	//getting employee info
		
		let employeeDetails = data.results;
		let cardHTML = '<section>';
		
		for(let i=0; i< employeeDetails.length; i++){
			let member = employeeDetails[i];
			cardHTML += '<div class="member">';
			cardHTML += '<img src="' + member.picture.large + '">';
			cardHTML += '<h3>' + member.name.first + " " + member.name.last + '</h3>';
			cardHTML += '<p>' + member.email + '</p>';
			cardHTML += '<p>' + member.location.city + '</p>';
			cardHTML += '</div>';
			console.log(member);

		};
		cardHTML += '</section>';
		document.getElementById("wrapper").innerHTML = cardHTML;

		
			
	 }// end of employeeData.
	 	

	$.getJSON(randomUserAPI, randomUserOptions, employeeData);
});

