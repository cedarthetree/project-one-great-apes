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

// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

$('.clickme').click(function(){
    $('audio#orangutan')[0].play()

})

$('.pauseme').click(function(){
  $('audio#orangutan')[0].pause()
})

$('.restartme').click(function(){
  $('audio#orangutan')[0].currentTime = 0
  $('audio#orangutan')[0].play()
})








// End of Your Code . Don't delete that line below!!
});
