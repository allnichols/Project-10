$(document).ready(function(){
	
	var photos = [];
	const names = [];
	const number = [];
	const emails = [];
	const cities = [];
	const residence = [];
	
	const details = {
		image: photos,
		name: names,
		numbers: number,
		city:cities
	};
	
	console.log(details);

	var randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};//end AJAX

	 function employeeData(data){
	 		
		let employeeDetails = data.results;
		//console.log(employeeDetails);
		for(let i=0; i< employeeDetails.length; i++){
			let member = employeeDetails[i];
			let image = member.picture.large;
			let firstName = member.name.first;
			let lastName = member.name.last;
			let Name = firstName + ' ' + lastName;
			let phone = member.phone;
			let email = member.email;
			let city = member.location.city;
			let street = member.location.street;
			let state = member.location.state;
			let zip = member.location.postcode;
			let address = street +', ' + state + ' ' + zip;
			photos.push(image);
			names.push(Name);
			number.push(phone);
			emails.push(email);
			cities.push(city);
			residence.push(address);
		};

		// function employeeCard(){
		// 	for (var i = 0; i < length; i++) {
				
		// 	}
		// }

	function test(){
		for(var i = 0; i < photos.length; i++){
			console.log(photos[i]);
		}
	}

	//test();
	
			
	 }// end of employeeData.

	$.getJSON(randomUserAPI, randomUserOptions, employeeData);
});

