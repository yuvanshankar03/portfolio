$(document).ready(function(){
    $('#menu').click(function()
    {$(this).toggleClass('fa-items');
    $('header').toggleClass('toggle');
});
$(window).on('scroll load',function(){
    $('#menu').removeClass('fa-items');
    $('header').removeClass('toggle');

    if($(window).scrollTop()>0){
        $('.top').show();
    }
    else{
        $('.top').hide();
    }
});
// scroll top button
$('a[href*="#"]').on('click',function(e){
  e.preventDefault();

  $('html,body').animate({
    scrollTop:$($(this).attr('href')).offset().top,
  },
  500,'linear'
  );
});
});
// image carousel
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}