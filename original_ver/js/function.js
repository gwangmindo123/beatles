$(function(){
  //var
  var $indicator = $('nav>.gnb>li>a');
  var $slider = $('.cont_0>.bg>.slide>ul');
  var $sliderPrev = $('.cont_0>.bg>.prev');
  var $sliderNext = $('.cont_0>.bg>.next');
  var $thumb = $('.cont_1>.bg>ul>li>a');
  var $frame = $('.cont_2>.bg>.frame>.frame_img>ul');
  var $framePrev = $('.cont_2>.bg>.prev');
  var $frameNext = $('.cont_2>.bg>.next');
  var $gallOpen = $('.gallOpen');
  var $thmubs = $('.cont_4>.bg>.thumb>li>a');
  var nowIdx = 0;

  var arrTopVal = [];
  $('.cont').each(function(idx){
    arrTopVal[idx] = $(this).offset().top
  });

  //function
  function sliderMove(){
    $slider.stop().animate({left:-(nowIdx*1100)});
  }

  function frameMove(){
    var frameWidth = 300;
    var txt = $('.cont_2>.bg>.frame>.frame_img>ul>li>a').eq(nowIdx).attr('title');

    $('.cont_2>.bg>.frame>.txt').text(txt);
    $frame.stop().animate({left:-(nowIdx*355)});
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

    $('.cont_1>.bg>.screen').css({
      backgroundImage : 'url('+src+')'
    });

    $('.cont_1>.bg>.txt').text(cont);

    nowIdx = $thumb.index(this);
    $thumb.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  });//end of cont1 - photogallery

  $framePrev.on('click',function(){
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 4;
    }

    frameMove();
  });

  $frameNext.on('click',function(){
    if(nowIdx<4){
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    frameMove();
  });//end of cont2 - frame event

  $gallOpen.on('click',function(event){
    event.preventDefault();
    var src = $(this).attr('href');
    
    $('.gall>.gallcontent').css({
      backgroundImage:'url('+src+')'
    }).parent().fadeIn();
  });

  $('.gallClose').on('click',function(event){
    event.preventDefault();
    $('.gall').fadeOut();
  });

  $('.gall').on('click',function(){
    $(this).fadeOut();
  });
  //end of cont3 - light box


  $thmubs.on('click',function(event){
    event.preventDefault();

    var src = $(this).attr('href');
    var cont = $(this).attr('title');

    $('.cont_4>.bg>.screen').css({
      backgroundImage : 'url('+src+')'
    });

    $('.cont_4>.bg>.txt').text(cont);

    nowIdx = $thmubs.index(this);
    $thmubs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  });//end of cont4 - photogallery

  $indicator.on('click',function(event){
    event.preventDefault();
    nowIdx = $indicator.index(this);

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    pageAni(arrTopVal[nowIdx]);
  });//end of indicator

  $(window).on('load',function(){
    pageAni(arrTopVal[nowIdx]);
  });

  $(window).on('scroll',function(){
    var scrollTop = $(window).scrollTop();

    $indicator.each(function(idx){
      if(scrollTop>=arrTopVal[idx]){
        $indicator.eq(idx).parent().addClass('on').siblings().removeClass('on')
      }
    });
  });//end of scroll event

});