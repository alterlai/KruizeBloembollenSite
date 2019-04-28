$(document).ready(function(){
  let isActive = false;
  let windowsize = $(window).width();
  
  $('.menu-wrapper, .overlay').on('click', function() {
    $('.mobile-nav').toggleClass("menu-active");
		$('.hamburger-menu').toggleClass('animate');
    $('.overlay').fadeToggle(300);
	})

// Fade in scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50 && $(window).width() < 786) {
      $('totop').fadeIn();
    }
    else {
      $('totop').fadeOut();
    }
  });

  $('totop').click(function() {
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 500);
  });


// Slider
  var $item = $('.carousel-item'); 
  var $wHeight = $(window).height()/3*2;
  $item.eq(0).addClass('active');
  $item.height($wHeight); 
  $item.addClass('full-screen');

  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  $(window).on('resize', function (){
    $wHeight = $(window).height()/3*2;
    $item.height($wHeight);
  });

  $('.carousel').carousel({
    interval: 60000,
    pause: "false"
  });


  // Pages Image gallery.
  $(".imageGallery1 > div:gt(0)").hide();

  setInterval(function() { 
    $('.imageGallery1 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.imageGallery1');
    },  4000);


});