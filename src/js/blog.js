$('.more').on('click', function() {
    var $avatar = $(this).parent().parent().parent().find('.avatar');
    $(this).parent().parent().parent().animate({height: 250}, 450);
    
    if($avatar.hasClass('animated')) {  
      $avatar.removeClass('animated bounce'); 
    } else {  
      $avatar.addClass('animated bounce');
    }
  }) 
  
  $('.send').on('click', function() {
    $('.post').last();
    var $entry = $('body').find('.entry');
    var $first = $('body').find('.post').first();
    var $last = $('body').find('.post').last();
    
    //$entry.before($v).hide().fadeIn('slow');
    //$v.before($entry).hide().fadeIn('slow');
    //$v.appendTo(last).hide().fadeIn('slow');
    //$entry.before($v)
    //$first.addClass('animated fadeOutUp');
    //$first.remove();
    
    var $cosa = $last.clone();
    $cosa.find('.avatar').hide();
    //$cosa.addClass('fadeInDown')
    $cosa.css('min-height', '0px').css('height', '0px')
    $cosa.insertAfter($last).animate({height: (110 + Math.random() * 40)}, 450);
    
    $cosa.insertAfter($last);
    $cosa.find('.avatar').show()
    $cosa.find('.avatar').addClass('animated bounceInLeft');
    /*$entry.fadeOut('slow', function() {
         $entry.before($v);
         $entry.fadeIn('slow');
       });
    */
  $('.sidebar').on({ 
    mouseenter: function() {
      var top = parseInt($(this).find('.avatar').css('top'));
      $(this).find('.avatar').animate({top: 36}, 450);
      $(this).find('#socialize').removeClass();
      $(this).find('#socialize').addClass('animated fadeInDown');
    },
    mouseleave: function() {
      var top = parseInt($(this).css('top'));
      $(this).find('.avatar').animate({top: '50%'}, 450);
      $(this).find('#socialize').addClass('animated fadeOutUp');
    }
  })
  });
  
  $('.sidebar').on({ 
    mouseenter: function() {
      var top = parseInt($(this).find('.avatar').css('top'));
      $(this).find('.avatar').animate({top: 36}, 250);
      $(this).find('#socialize').removeClass();
      $(this).find('#socialize').addClass('animated fadeInDown');
    },
    mouseleave: function() {
      var top = parseInt($(this).css('top'));
      $(this).find('.avatar').animate({top: '50%'}, 250);
      $(this).find('#socialize').addClass('animated fadeOutUp');
    }
  })
  
  .mouseleave(function() {
    $(this).parent().find('#socialize').addClass('animated fadeOutUp');
  });