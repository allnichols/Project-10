$(document).ready(function(){
	const employeesContainer = document.getElementById("wrapper");
		
	
	
	
					// closing the modal
					var close = document.getElementsByClassName("close")[0];

					close.addEventListener("click", () => content.style.display = "none");

					 function employeeData(results){
					 		//getting employess data

					 		let employeeDetails = results.results;										
								for (var i = 0; i < employeeDetails.length ; i++) {
									let member = employeeDetails[i];
									let picture = member.picture.large;
									let image = '<img src="'+ picture +'">';
									let fullName = member.name.first + " " + member.name.last;
									let email = member.email;
									let cell = member.cell;
									let street = member.location.street;
									let city = member.location.city;
									let state = member.location.state;
									let postcode = member.location.postcode;


									employeeInfo.push({
								"image": picture,
								"name": fullName,
								"email" : email,
								"cell" : cell,
								"street" : street,
								"city" : city,
								"state" : state,
								"postcode" : postcode
							});
					
								}
					 }// end of employeeData.

	const employeeInfo = [];
	console.log(employeeInfo);
	console.log(employeeInfo[0]);



	//AJAX
	var randomUserAPI = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,cell,dob,nat&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};
	//end AJAX

	$.getJSON(randomUserAPI, randomUserOptions, employeeData);
});

