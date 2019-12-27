// Functions 

$("#header-bars").on("click", function(evt){
    $('aside').css('width','30%');
    $('main').css('transform', 'translateX(-30%)');
    $('.fa-bars').css({'opacity': '0', 'transform': 'rotate(360deg)'});
    $("#aside").addClass("opened");
    evt.stopPropagation();
})


$("#close").on("click", function(){
    $('aside').css('width','0%');
    $('main').css('transform', 'translateX(0%)');
    $('.fa-bars').css({'opacity': '1'});
})





$(document.body).on("click", function(evt){
  if ($("#aside").hasClass('opened')) {  // ← verifies target is desired element
      $("#aside").removeClass('opened')     
      $('aside').css('width','0%');
      $('main').css('transform', 'translateX(0%)');
      $('.fa-bars').css({'opacity': '1'});
      
}
})

$('.gallery header ul li').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});


//for WOW
  new WOW().init();

//for lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

// for smooth scroll :


var scroll = new SmoothScroll('a[href*="#"]', {

  offset: 800 // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  
  });

  // for mixitup
  // var mixer = mixitup('.images');
  var mixer = mixitup(".images", {
    selectors: {
        target: '.box'
    },
    animation: {
        duration: 100
    }
});
  
// filtering li active
// $('.filter-btn').on("click", function () {
//   if ($(this).hasClass('active')) {
//       $(this).removeClass('active');
//   } else {
//       $(this).addClass('active');
//       $(this).siblings().removeClass('active');
//   }
// });

// https://codepen.io/GeorgePark/pen/vdqYom : for zooming effect on images
/*https://github.com/kswedberg/jquery-smooth-scroll*/
/*https://wowjs.uk/*/
/*https://raw.githubusercontent.com/daneden/animate.css/master/animate.css*/


