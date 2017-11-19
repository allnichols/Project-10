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
					var memberTotal = 12;
					console.log(info);
				
					
					

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
								// console.log(address);

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
							cardHtml += '<img src="' + data.picture.large + '">';
							cardHtml += '<p>' + data.name.first + " " + data.name.last + '</p>';
							cardHtml += '<p>' + data.email + '</p>';
							cardHtml += '<p>' + data.location.city + '</p>';
							cardHtml += '</div>';


						$("#wrapper").append(cardHtml);								
					}
					//end of card creation

				

					function modalContent(data){
							let cardHtml = '<div class="member">';
							cardHtml += '<img src="' + data.picture.large + '">';
							cardHtml += '<p>' + data.name.first + " " + data.name.last + '</p>';
							cardHtml += '<p>' + data.email + '</p>';
							cardHtml += '<p>' + data.location.city + '</p>';
							cardHtml += '</div>';
		
							$("#modal-content").append(cardHtml);
					}	
					//opening the modal 

				cardWrapper.addEventListener('click', (e) =>{
					if(e.target.className == 'member') {
						let target = e.target;
						let targetID = $(target).html();
						//modalContent(info[targetID]);
						console.log(targetID);
					} 

				})

					
								
				
					
														

					//closing the modal overlay.
					close.addEventListener("click", ()=> overlay.style.display = "none");


			

$.getJSON(randomUserAPI, options, getMemberData);
});

