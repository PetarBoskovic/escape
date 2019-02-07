// scroll header
$(document).scroll(function() {
    if($(document).scrollTop() > 100) {
      $('header').addClass('active');
      $('.header-holder').addClass('active');
      $('.burger').addClass('active');
    }
    else {
      $('header').removeClass('active');
      $('.header-holder').removeClass('active');
      $('.burger').removeClass('active');
    }
  })
// scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  $('.scroll-to-top').on('click', function() {
    $('html, body').animate({scrollTop : 0}, 900);
  });  
// click scroll
$(".scroll").click(function(){
  $("body, html").animate({ "scrollTop":$("#team").offset().top - 50 }
    ,1000);
});
// burger
var burger = document.querySelector('.burger');

burger && burger.addEventListener('click', function(event){
  event.preventDefault();
  this.classList.toggle('burger__active');
});
// menu slide
$('.burger').click (function(){
	$('.nav ul').toggleClass('active');
	$('.nav ul li').toggleClass('active');
});
