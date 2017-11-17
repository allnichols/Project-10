$(document).ready(function () {

  var card     = document.getElementsByClassName("member");


  $.getJSON('https://randomuser.me/api/?results=12&inc=picture,name,email,location,cell,dob,nat&nat=us'
                , function (data) {
    var statusHTML = '<div class="member">';
    $.each(data,function (index, employee) {
      statusHTML += '<img src="' + employee.results.picture.large + '">';
    $('#wrapper').html(statusHTML)
  }); // end getJSON
  });
}); // end ready