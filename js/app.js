
$(document).ready(function(){
  $('.clamp-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
      arrows: true,
  });
});

$( ".instron-link" ).click(function() {
  location.href="instron.html"
});