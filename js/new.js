$(document).ready(() =>{


//AJAX variables
var randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us&inc=name,email,location,picture,username,cell,dob'
var options = {
	datatype: 'json'
}
// end of Ajax Variables
					
					var cardWrapper = document.getElementById("wrapper");
					var overlay 	= document.getElementById('modal');					
					var close 		= document.getElementsByClassName('close')[0];
					var modal 		= document.getElementById('modal-content');
					var info		= [];
					
				
					
					

					function getMemberData(data){
							let member = data.results
						for (var i = 0; i < member.length; i++) {	
								let person  = member[i];
								let name    = person.name.first + " " + person.name.last;
								let image   = person.picture.large;
								let email   = person.email;
								let city    = person.location.city;
								let address = person.location.street + " " + ", " +person.location.state + " " + person.location.postcode;
								
								memberCard(person);
								//modalContent(person);
								 // console.log(person.dob);

								info.push({
									"index" 	: i,
									"img"		: image,
									"name"		: name,
									"email" 	: email,
									"city"		: city,
									"address" 	: address
								})
															 
						}													
					}
					
						//creates the members card
					function memberCard(data){

						let cardHtml = '<div class="member">';
							cardHtml += '<img id="image" src="' + data.picture.large + '">';
							cardHtml += '<p>' + data.name.first + " " + data.name.last + '</p>';
							cardHtml += '<p>' + data.email + '</p>';
							cardHtml += '<p>' + data.location.city + '</p>';
							cardHtml += '<p class="hidden">' + data.cell + '</p>';	
							cardHtml += '<p class="hidden">' + data.location.street + " " + ", " + data.location.state + " " + data.location.postcode + '</p>';
							cardHtml += '<p class="hidden">' + data.dob + '</p>';
							cardHtml += '</div>';


						$("#wrapper").append(cardHtml);								
					}
					//end of card creation

	

				cardWrapper.addEventListener('click', (e) =>{
					if(e.target.className == 'member') {
						let targetImg		= e.target.querySelector("img");
						let image			= targetImg.src;

						let targetName 		= e.target.querySelectorAll("p")[0];
						let name 			= targetName.innerHTML;

						let targetEmail 	= e.target.querySelectorAll("p")[1];
						let email 			= targetEmail.innerHTML;

						let targetCity 		= e.target.querySelectorAll("p")[2];
						let city 			= targetCity.innerHTML;

						let targetCell		= e.target.querySelectorAll("p")[3];
						let cell 			= targetCell.innerHTML;

						let targetAdd		= e.target.querySelectorAll("p")[4];
						let address 		= targetAdd.innerHTML;

						overlay.style.display = "block";
						
						
						
						let	modalHtml = '<img src="' + image + '">';
							modalHtml += '<p>' + name + '</p>';
							modalHtml += '<p>' + email + '</p>';
						 	modalHtml += '<p>' + city + '</p>';
						 	modalHtml += '<hr>';
						 	modalHtml += '<p>' + cell + '</p>';
						 	modalHtml += '<p>' + address + '</p>';


						$("#modal-content").append(modalHtml);

						console.log(image);
						}
						
					});

					//closing the modal overlay.
					close.addEventListener("click", function(){
						overlay.style.display = "none";
						modal.innerHTML = '';
					}); 


			

$.getJSON(randomUserAPI, options, getMemberData);
});

