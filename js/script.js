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
			cardHTML += '<div class="member" id="overlay">';
			cardHTML += '<img src="' + member.picture.large + '">';
			cardHTML += '<h2>' + member.name.first + " " + member.name.last + '</h2>';
			cardHTML += '<p>' + member.email + '</p>';
			cardHTML += '<p>' + member.location.city + '</p>';
			cardHTML += '</div>';
			

		};
		cardHTML += '</section>';
		document.getElementById("wrapper").innerHTML = cardHTML;

		var overlay = document.getElementById("overlay");
		var modal = document.getElementsByClassName("modal")[0];
		overlay.onclick = function() {
			modal.style.display = "block";
		}


		// for (var i = 0; i < employeeDetails.length; i++) {
		// 	console.log(employeeDetails[i]);
		// }

		
			
	 }// end of employeeData.
	 	

	$.getJSON(randomUserAPI, randomUserOptions, employeeData);
});

