
/*$(document).ready(function(){
  $('.clamp-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
      arrows: true,
  });
});*/

$( ".instron-link" ).click(function() {
  location.href="instron.html"
});



$( ".GE-link" ).click(function() {
  location.href="experience.html#go-to-ge"
});

$( ".REU-link" ).click(function() {
  location.href="experience.html#go-to-reu"
});

/*$( ".REU-link" ).click(function() {
  location.href="experience.html#ge-exp-card"
});*/
/*
$( ".raw-link" ).click(function() {
    window.open('http://rawtours.org/');
});


$( ".bess-link" ).click(function() {
    window.open('http://nuweb2.neu.edu/bess/');
});
*/

$( ".mlh-link" ).click(function() {
  location.href="mlh.html"
});

$( ".3dp-link" ).click(function() {
  location.href="3dp.html"
});

$( ".wiz-link" ).click(function() {
  location.href="wiz.html"
});

$( ".unprod-link" ).click(function() {
    /*window.open('https://xiifulminata.github.io/Popcorn-Time-Clone/');*/
    location.href="#"
});

$( document ).ready(function() {
    $( "#qrc2" ).hide();
    $( "#qrc3" ).hide();
    $( "#qrc4" ).hide();
    $( "#qrc5" ).hide();
});

function clearQRC() {
    $( "#qrc1" ).hide();
    $( "#qrc2" ).hide();
    $( "#qrc3" ).hide();
    $( "#qrc4" ).hide();
    $( "#qrc5" ).hide();
}

$( "#qrc1-f" ).click(function() {
    clearQRC();
    $( "#qrc1" ).show();
});

$( "#qrc2-f" ).click(function() {
    clearQRC();
    $( "#qrc2" ).show();
});

$( "#qrc3-f" ).click(function() {
    clearQRC();
    $( "#qrc3" ).show();
});

$( "#qrc4-f" ).click(function() {
    clearQRC();
    $( "#qrc4" ).show();
});

$( "#qrc5-f" ).click(function() {
    clearQRC();
    $( "#qrc5" ).show();
});
