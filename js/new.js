$(document).ready(() =>{


var memberTotal = 12;

$.ajax({
	url: 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,cell,dob,nat&nat=us',
	dataType: 'json',
	success: function(data) {


		 memberData(data.results);

		 for (var i = 0; i < details.length; i++) {
		 	console.log(details[i].cell);
		 }
			
		}
	})//end of ajax


	function employeeCard(data){
		let cardHtml = '<div class="member">';
			cardHtml += '<img src="' + data.picture.large + '">';
			cardHtml += '</div>';

			$("#wrapper").append(cardHtml);


	}


});

