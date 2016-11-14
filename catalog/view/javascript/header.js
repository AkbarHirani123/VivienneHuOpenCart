// // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
// var mainbottom = $('#main').offset().top + $('#main').height()-100;
// //console.log(mainbottom);
// // on scroll, 
// $(window).on('scroll',function(){

//     // we round here to reduce a little workload
//     var stop = Math.round($(window).scrollTop());

//     if (stop > mainbottom) {
//      console.log("entered");
//         $('.navbar.navbar-inverse.navbar-fixed-top').addClass('navbar-smaller');
//         $('.nav-justified').addClass('nav-align');
//         $('.logo-name').addClass('hidden');
//     } else {
//         $('.navbar.navbar-inverse.navbar-fixed-top').removeClass('navbar-smaller');
//         $('.nav-justified').removeClass('nav-align');
//         $('.logo-name').removeClass('hidden');
//     }
// });

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('navbar-smaller');
    $('.nav-justified').addClass('nav-align');
    $('.logo-name').addClass('hidden');
    $('.breadcrumbs').addClass('breadcrumbsScroll');
  } else {
    $('nav').removeClass('navbar-smaller');
    $('.nav-justified').removeClass('nav-align');
    $('.logo-name').removeClass('hidden');
    $('.breadcrumbs').removeClass('breadcrumbsScroll');
  }
});

$('.navbar-lower').affix({
  offset: {top: 10}
});

//Function
function checkSize(){
    // If small screen
    if ($("body").css("margin-top") != "100px" ){

      $('.dropdown-toggle').attr('data-toggle','');

      // Add slideDown animation to dropdown
      $('.dropdown').hover(function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown('slow');
      });

      // Add slideUp animation to dropdown
      $('.dropdown').mouseleave('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp('slow');
      });

    } else {

      $('.dropdown-toggle').attr('data-toggle','dropdown');

    }
}

