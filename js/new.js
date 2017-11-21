$(document).ready(() =>{


//AJAX variables
var randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us&inc=name,email,location,picture,login,cell,dob'
var options = {
	datatype: 'json'
}
// end of Ajax Variables
					
					var cardWrapper = document.getElementById("wrapper");
					var overlay 	= document.getElementById('modal');					
					var close 		= document.getElementsByClassName('close')[0];
					var modal 		= document.getElementById('modal-content');
					
					
				
					
					

					function getMemberData(data){
							let member = data.results
						for (var i = 0; i < member.length; i++) {	
								let person  = member[i];
								memberCard(person);
								 					 
						}													
					}
					
						//creates the members card
					function memberCard(data){

						let cardHtml = '<div class="member">';
							cardHtml += '<img id="image" src="' + data.picture.large + '">';
							cardHtml += '<ul class="info">';
							cardHtml += '<li class="name">' + data.name.first + " " + data.name.last + '</li>';
							cardHtml += '<li class="email">' + data.email + '</li>';
							cardHtml += '<li class="city">' + data.location.city + '</li>';	
							cardHtml += '</ul>';
							cardHtml += '<p class="hidden">' + data.login.username + '</p>';
							cardHtml += '<p class="hidden">' + data.cell + '</p>';	
							cardHtml += '<p class="hidden">' + data.location.street + " " + ", " + data.location.state + " " + data.location.postcode + '</p>';
							cardHtml += '<p class="hidden">' + data.dob.substring(0, 10).replace(/-/g, "/", -1) + '</p>';
							cardHtml += '</div>';


						$("#wrapper").append(cardHtml);								
					}
					//end of card creation

	

				cardWrapper.addEventListener('click', (e) =>{
					if(e.target.className == 'member') {
						let targetImg		= e.target.querySelector("img");
						let image			= targetImg.src;

						let targetName 		= e.target.querySelectorAll("li")[0];
						let name 			= targetName.innerHTML;

						let targetEmail 	= e.target.querySelectorAll("li")[1];
						let email 			= targetEmail.innerHTML;

						let targetCity 		= e.target.querySelectorAll("li")[2];
						let city 			= targetCity.innerHTML;

						let targetLogin 	= e.target.querySelectorAll("p")[0];
						let login 			= targetLogin.innerHTML;

						let targetCell		= e.target.querySelectorAll("p")[1];
						let cell 			= targetCell.innerHTML;

						let targetAdd		= e.target.querySelectorAll("p")[2];
						let address 		= targetAdd.innerHTML;

						let targetDOB		= e.target.querySelectorAll("p")[3];
						let dob 			= targetDOB.innerHTML;

						overlay.style.display = "block";
						
						
						
						let	modalHtml = '<img src="' + image + '">';
							modalHtml += '<p class="modal-name">' + name + '</p>';
							modalHtml += '<p>' + email + '</p>';
							modalHtml += '<p class="login">' + login + '</p>';
						 	modalHtml += '<p>' + city + '</p>';
						 	modalHtml += '<hr>';
						 	modalHtml += '<p>' + cell + '</p>';
						 	modalHtml += '<p>' + address + '</p>';
						 	modalHtml += '<p>Birthday: ' + dob + '</p>';


						$("#modal-content").append(modalHtml);

						
						}
						
					});

					//closing the modal overlay.
					close.addEventListener("click", function(){
						overlay.style.display = "none";
						modal.innerHTML = '';
					}); 

					


			

$.getJSON(randomUserAPI, options, getMemberData);
});

