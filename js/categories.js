var makeWinHeight = function(){
	var vh = $(window).height();
	var projects = vh/2;
	$('#scene, .layer.main').height(vh);
	$('#scene .col a, #scene .col').height(projects);
}
$(document).ready(function(){
	makeWinHeight();

});
$(window).resize(function(){
	makeWinHeight();
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


document.addEventListener("DOMContentLoaded", function(){
    var el = document.querySelector(".button-bird");
    var text = document.querySelector(".button-bird__text");
        el.addEventListener('click', function() {
          el.classList.toggle('active');

          if(el.classList.contains('active')){
              console.log('true');
              text.innerHTML = 'DONE';
          }else{
              text.innerHTML = 'SEND';
          }
      });
  });
