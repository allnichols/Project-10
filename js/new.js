$(document).ready(function(){
	
	
	

	

	var randomUserAPI = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,cell,dob,nat&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};
	//end AJAX

					
					 function employeeData(results){
					 		//getting employess data
					 		let data = results.results;	
					 		
					 		var cardHtml = '';
					 		var modalHtml = '';

	 				for (var i = 0; i < data.length; i++) {
					 	let member = data[i];
					 	cardHtml += '<div class="member" id="modal-card">';
					 	cardHtml += '<img src="' + member.picture.large + '">';
					 	cardHtml += '<h2>' + member.name.first + " " + member.name.last + '</h2>';
					 	cardHtml += '<p>' + member.email + '</p>';
					 	cardHtml += '</div>';
					 	cardHtml += '<div class="extra">';
					 	cardHtml += '<hr>';
					 	cardHtml += '<p>' + member.cell + '</p>';
					 	cardHtml += '</div>';


					 }
					 //console.log(modalHtml);

					document.getElementById("wrapper").innerHTML = cardHtml;

					var card = document.getElementsByClassName("member");
					var overlay = document.getElementById("modal");
					var close = document.getElementsByClassName("close")[0];
					var content = document.getElementsByClassName("modal-content")[0];
					var extra = document.getElementById("extra-info");
					var information = document.getElementById("info");
					var extra = document.getElementsByClassName("extra");
					
					


					for (var i = 0; i < card.length; i++) {
						let cardInfo = card[i].innerHTML;

						card[i].addEventListener("click", function(){
							overlay.style.display = "block";
							content.style.display = "block";
							content.innerHTML = cardInfo; 

					});

						
					}

					
					

					


					// closing the modal
					close.addEventListener("click", () => overlay.style.display = "none");

					 };// end of employeeData.
				



//AJAX
	
	
	$.getJSON(randomUserAPI, randomUserOptions, employeeData);
});

