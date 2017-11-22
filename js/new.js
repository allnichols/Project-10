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
							cardHtml += '<img class="image" src="' + data.picture.large + '">';
							cardHtml += '<ul class="info">';
							cardHtml += '<li class="name">' + data.name.first + " " + data.name.last + '</li>';
							cardHtml += '<li class="email">' + data.email + '</li>';
							cardHtml += '<li class="city">' + data.location.city + '</li>';	
							cardHtml += '</ul>';
							cardHtml += '<ul class="hidden">';
							cardHtml += '<li>' + data.login.username + '</li>';
							cardHtml += '<li>' + data.cell + '</li>';	
							cardHtml += '<li>' + data.location.street + " " + ", " + data.location.state + " " + data.location.postcode + '</li>';
							cardHtml += '<li>' + data.dob.substring(0, 10).replace(/-/g, "/", -1) + '</li>';
							cardHtml += '</ul>';
							cardHtml += '</div>';


						$("#wrapper").append(cardHtml);								
					}
					//end of card creation

	
					//opening and adding content to the modal
				cardWrapper.addEventListener('click', (e) =>{
				
					
					let target = e.target;
					

					let modalHtml = '';

					if(target.className == 'member') {
						
						overlay.style.display = "block";

						let targetImg		= e.target.querySelector("img");
						let image			= targetImg.src;

						let targetName 		= e.target.firstChild.nextSibling.innerHTML;
						let targetInfo		= e.target.firstChild.nextSibling.nextSibling.innerHTML;

							 modalHtml += '<img src="' + image + '">';
							 modalHtml += '<ul class="modal-info">';
							 modalHtml += targetName;
							 modalHtml += '</ul>';
							 modalHtml += '<hr>';
							 modalHtml += '<ul class="new-info">';
							 modalHtml += targetInfo;
							 modalHtml += '</ul>';


						 	$("#modal-content").append(modalHtml);
						}
					else if(target.parentElement.className == "member"){

						overlay.style.display = "block";

						let image 		= target.src;
						let tName 		= target.nextSibling.innerHTML;
						let tInfo 		= target.nextSibling.nextSibling.innerHTML;

						modalHtml += '<img src="' + image + '">';
						modalHtml += '<ul class="modal-info">';
						modalHtml += tName;
						modalHtml += '</ul>';
						modalHtml += '<hr>';
						modalHtml += '<ul class="new-info">';
						modalHtml += tInfo;
						modalHtml += '</ul>';
	
						
						$("#modal-content").append(modalHtml);	
					} else if(target.parentElement.className == "info"){

						let tInfo 	= target.parentElement.innerHTML;
						let image 	= target.parentElement.previousSibling.src;
						let tExtra 	= target.parentElement.nextSibling.innerHTML;
						overlay.style.display = "block";

						modalHtml += '<img src="' + image + '">';
						modalHtml += '<ul class="modal-info">';
						modalHtml += tInfo;
						modalHtml += '</ul>';
						modalHtml += '<hr>';
						modalHtml += '<ul class="new-info">';
						modalHtml +=  tExtra;
						modalHtml +=  '</ul>';

						$("#modal-content").append(modalHtml);
						
					} else {
						console.log("wrapper clicked");
					}
	
					});

					//closing the modal overlay.
					close.addEventListener("click", function(){
						overlay.style.display = "none";
						modal.innerHTML = '';
					}); 

$.getJSON(randomUserAPI, options, getMemberData);
});

