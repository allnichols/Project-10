$(document).ready(() =>{


//AJAX variables
var randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us,gb&inc=name,email,location,picture,username,cell,dob'
var options = {
	datatype: 'json'
}
// end of Ajax Variables

					var card 		= document.getElementsByClassName("member");
					var overlay 	= document.getElementById('modal');					
					var close 		= document.getElementsByClassName('close')[0];
					var modalCard   = document.getElementsByClassName('modalContent');

					function memberData(data){
						let member = data.results;
						for (var i = 0; i < member.length; i++) {
							 // console.log(member[i].email);
							 
							 memberCard(member[i]);
							
						}	
					}

					//creates the members card
					function memberCard(data){
						let cardHtml = '<div class="member">';
						cardHtml += '<img src="' + data.picture.large + '">';
						cardHtml += '<p>' + data.name.first + " " + data.name.last + '</p>';
						cardHtml += '<p>' + data.email + '</p>';
						cardHtml += '<p>' + data.location.city + '</p>';
						cardHtml += '</div>';

						//adding a click event to each member card.
						for (var i = 0; i < card.length; i++) {
							card[i].addEventListener("click", function(){
								overlay.style.display = "block";
						});
						};

							$("#wrapper").append(cardHtml);

							

					}
					//end of card creation

		

					




					//closing the modal overlay.
					close.addEventListener("click", ()=> overlay.style.display = "none");


			

$.getJSON(randomUserAPI, options, memberData);
});

