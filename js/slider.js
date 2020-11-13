// Auto slider
var set_interval = setInterval(function(){ 
    $('.slider-button.slider-next').click();
  }, 7000);
  
  
  
  // Click nex - prev button
  $('.slider-button').on('click', function (e) {
    e.preventDefault();
    
    clearInterval(set_interval);
    
    var current_slider = $('.item.active');
    var count_slider = $('.slider-content .item').length;
    var change_slider = 0;
    
    if ( $(this).hasClass('slider-next') ) {
          change_slider = 1;
    } else {
      change_slider = -1;
    }
    
    var new_slider = parseInt(current_slider.data('slider')) + change_slider;
    if ( new_slider == 0 ) {
      new_slider = count_slider
    } else if ( new_slider > count_slider ) {
      new_slider = 1;
    }
      current_slider.fadeToggle('slow').toggleClass('active');
    
    $('.slider-content .item[data-slider="'+ new_slider +'"]').fadeToggle('slow').toggleClass('active');
    
    // number
    $('.slider-page').find('ul li a.active').toggleClass('active');
    $('.slider-page ul li a[data-slider="'+ new_slider +'"]').toggleClass('active');
  
    
    set_interval = setInterval(function(){ 
      $('.slider-button.slider-next').click();
    }, 5000);
    
  });
  
  // Click on number
  $('.slider-page a').on('click', function (e) {
    e.preventDefault();
    
    clearInterval(set_interval);
    
    var current_slider = $('.item.active');
    var count_slider = $('.slider-content .item').length;
    var click_slider = $(this).data('slider');
       
    current_slider.fadeToggle('slow').toggleClass('active');
    
    $('.slider-content .item[data-slider="'+ click_slider +'"]').fadeToggle('slow').toggleClass('active');
    
   
   
    
    
  });