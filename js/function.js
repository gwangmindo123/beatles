$(function(){
  //var
  var $slider = $('.cont_0>.bg>.slides>ul');
  var $sliderPrev = $('.cont_0>.bg>.prev');
  var $sliderNext = $('.cont_0>.bg>.next');
  var $thumb = $('.cont_1 .bg ul li a');
  var $frame = $('.cont_2>.bg>.frame>.frame_img>ul');
  var $framePrev = $('.cont_2>.bg>.prev');
  var $frameNext = $('.cont_2>.bg>.next');
  var $gallOpen = $('.gallOpen');
  var $thmubs = $('.cont_4 .bg .thumb li a');
  var nowIdx = 0;

  var arrTopVal = [];
  $('.cont').each(function(idx){
    arrTopVal[idx] = $(this).offset().top
  });

  //function
  function sliderMove(){
    var slideWidth = $slider.find('li').outerWidth(true); // Get actual width of a single slide (li)
    $slider.stop().css('transform', 'translateX(' + (-(nowIdx*slideWidth)) + 'px)');
  }

  function frameMove(){
    var frameWidth = $frame.find('li').outerWidth(true); // Get actual width of a single frame slide (li)
    var txt = $('.cont_2 li>a').eq(nowIdx).attr('title');

    $('.cont_2 .bg .frame .current-member-name').text(txt); // Updated class name
    $frame.stop().css('transform', 'translateX(' + (-(nowIdx*frameWidth)) + 'px)');
  }

  function pageAni(topVal) {
    $('html,body').stop().animate({
      scrollTop: topVal
    },1500,'easeInOutCubic');
  }

  $sliderPrev.on('click',function(){
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 2;
    }

    sliderMove();
  });

  $sliderNext.on('click',function(){
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    sliderMove();
  });//end of cont0 - slide

  $thumb.on('click',function(event){
    event.preventDefault();
    var src = $(this).attr('href');
    var cont = $(this).attr('title');

    // Updated selectors for .cont_1
    $('.cont_1 .bg .main-album-display img.current-album-cover').attr('src', src);
    $('.cont_1 .bg .main-album-display p.current-album-title').text(cont);

    nowIdx = $thumb.index(this);
    $thumb.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  });//end of cont1 - photogallery

  $framePrev.on('click',function(){
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 3;
    }

    frameMove();
  });

  $frameNext.on('click',function(){
    if(nowIdx<3){
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    frameMove();
  });//end of cont2 - frame event

  $gallOpen.on('click',function(event){
    event.preventDefault();
    var src = $(this).attr('href');
    
    $('.gall .gallcontent').css({
      backgroundImage:'url('+src+')'
    }).parent().fadeIn();
  });

  $('.gallClose').on('click',function(event){
    event.preventDefault();
    $('.gall').fadeOut();
  });
  
  $('.gall').on('click',function(){
    $(this).fadeOut();
  });//end of cont3 - light box

  $thmubs.on('click',function(event){
    event.preventDefault();

    var src = $(this).attr('href');
    var cont = $(this).attr('title');

    // Updated selectors for .cont_4
    $('.cont_4 .bg .legacy-image-display img.main-legacy-image').attr('src', src);
    $('.cont_4 .bg .legacy-image-display p.legacy-caption').text(cont);


    nowIdx = $thmubs.index(this);
    $thmubs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  });//end of cont4 - photogallery

  $(window).on('load',function(){
    pageAni(arrTopVal[nowIdx]);
  });
});