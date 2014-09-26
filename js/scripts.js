jQuery(document).ready(function($){
 /*
  $('.home .three-features .thumbnail').hover(function(){
    $(this).find('caption').animate({bottom:0px;});
  },
  function () {
   $(this).find('caption').animate({bottom:-75px;});
  })
  */
 // $('.home .three-features .thumbnail').mouseenter(function(){
 	
 	// $(this).find('.caption').stop().animate({'bottom':'0px'});
 // });

  // $('.home .three-features .thumbnail').mouseleave(function(){
  	
 	// $(this).find('.caption').stop().animate({'bottom':'-75px'});
 // });
    $('.tendina-dropdown').tendina({
        // This is a setup made only
        // to show which options you can use,
        // it doesn't actually make sense!
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300,
        activeMenu: $('.gin-lemon'),
        openCallback: function(clickedEl) {
          console.log('Hey dude!');
        },
        closeCallback: function(clickedEl) {
          console.log('Bye dude!');
        }
      });

   $('.row1').adipoli({
                'startEffect' : 'overlay',
                'hoverEffect' : 'popout'
            });
});