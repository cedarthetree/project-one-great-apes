$('.orangutan-link').mouseover(function() {
  $('.leaf1').css('animation-play-state','running')
  $('.leaf2').css('animation-play-state','running')
  $('.leaf3').css('animation-play-state','running')
  $('.leaf4').css('animation-play-state','running')
  $('.leaf5').css('animation-play-state','running')
  $('.leaf6').css('animation-play-state','running')
  $('.leaf7').css('animation-play-state','running')
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




