var blogs = "";
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

 // $(document).ready(function(){
  $("#icon-0").click(function(){
    $(".icon").toggleClass("no-translate")
  });
  readFeed();
  var pageSize = 3;
//});
function readFeed() {
    
    $.ajax({
        type: 'GET',
        url: "http://blog.vishnuvp.me/feeds/posts/summary?alt=json-in-script",
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (json) {
            //localStorage.setItem("blogList", json.feed.entry);
            blogs = json.feed.entry;
            var numberOfPages = Math.ceil(blogs.length/pageSize);
            var line = "";
            for (var i = 1; i <= numberOfPages; i++) {
              line += "<a href='#feed-container' data='"+i+"' class='blog-pages'>"+i+"</a>"
            };
            $("#page-nos").html(line);
            $(".blog-pages").first().addClass('clicked');
            renderBlogList(blogs.slice(0,pageSize));  
          }

    });
}

$(document.body).on('click','.blog-pages',function (e) {
      //e.preventDefault();
      $('.blog-pages').removeClass('clicked');
      $(this).addClass('clicked');
      var start = ($(this).attr("data")-1)*pageSize;
      renderBlogList(blogs.slice(start,start+pageSize));
  });
function renderBlogList(data) {
    $('#feed-container ul').hide().html("").fadeIn();
    var monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
            ], days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    for (var i = 0; i < data.length; i++) {
          var post = data[i],
              title = post.title.$t,
              summary = post.summary.$t,
              date = post.published.$t;

              date = new Date(date);
              date = days[date.getDay()] +", "+date.getDate() +" "+ monthNames[date.getMonth()] +" "+ date.getFullYear();                
              if (summary.length > 128) {
                summary = summary.substr(0,128) + '...';
              }
              if (title.length > 64 ) {
                title = title.substr(0,64) + '...';
              };
              $('#feed-container ul').append('<li><div class="blog-title">'+title+'</div><div class="blog-date">'+date+'</div><div class="blog-summary">'+summary+'</div><div class="blog-link"><a href="'+post.link[4].href+'" target="_blank">Read this article</div></li>');
          
        }
}


});






