$(document).ready(function() {
    
    // When the button is clicked make the lightbox fade in in the span of 1 second, hide itself and start the video
    $("#button").on("click", function() {
      $("#lightbox").fadeIn(1000);
      $(this).hide();
      var videoURL = $('#video').prop('src');
      videoURL += "?autoplay=1";
      $('#video').prop('src',videoURL);
    });
    
    // When the close button is clicked make the lightbox fade out in the span of 0.5 seconds and show the play button
    $("#close-btn").on("click", function() {
      $("#lightbox").fadeOut(500);
      $("#button").show(250);
    });
  });






  // ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 1500) {        // If page is scrolled more than 1500px
      $('#return-to-top').css({"right": "20px", "display": "block"});    // Fade in the arrow
  } else {
      $('#return-to-top').css("right", "-50px");   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});







