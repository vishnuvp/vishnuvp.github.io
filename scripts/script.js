$(document).ready(function(){
  
  $("#name-hider").show().animate({width: "0%"},2500);
  $("#my-name").fadeOut('slow').fadeIn('slow');

  $(window).scroll(function(){
   // $("#sticky-name").text(($(this).scrollTop()));
    if(($(this).scrollTop()) > 390) 
      $("#sticky-name,#up-nav").fadeIn();
    else
      $("#sticky-name,#up-nav").fadeOut();
  });

  jQuery('a.menu-link').click(function(e){
    e.preventDefault();
    var href= jQuery(this).attr("to");
    jQuery('html, body').animate({
      scrollTop: jQuery(href).offset().top - 150}, 1000); }); 

jQuery('.inline-icon').mouseenter(function(){
   $('.layer-1',this).animate({transform: 'translate(-60px, -60px) rotate(-45deg)'});
 });
  jQuery('.inline-icon').mouseleave(function(){
   $('.layer-1',this).animate({transform: 'translate(0px, 0px) rotate(0deg)'});
 });

  $('.school-name,.org-name').mouseover(function() {
    $('.display-pic',this).fadeIn('slow');
  }).mouseleave(function () { $('.display-pic',this).fadeOut(); });

  //$('#welcome-overlay').mouseenter(function() { $('#dp-f').fadeIn();}).mouseleave(function() { $('#dp-f').fadeOut();});

  $(document).ready(function(){
  $("#icon-0").click(function(){
    $(".icon").toggleClass("no-translate")
  });
});
  
});