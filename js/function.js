$(function(){
  var nowIdx = 0;

  var arrTopVal = [];
  $('.cont').each(function(idx){
    arrTopVal[idx] = $(this).offset().top
  });

  // --- Functions ---

  function sliderMove(index){
    var $slider = $('.cont_0 .bg .slides ul');
    var slideWidth = $slider.find('li').outerWidth(true);
    $slider.stop().css('transform', 'translateX(' + (-(index * slideWidth)) + 'px)');
  }

  function frameMove(index){
    var $frame = $('.cont_2 .bg .frame .frame_img ul');
    var frameWidth = $frame.find('li').outerWidth(true);
    var txt = $('.cont_2 .bg .frame .frame_img li').eq(index).find('a').attr('title');

    $('.cont_2 .bg .frame .current-member-name').text(txt);
    $frame.stop().css('transform', 'translateX(' + (-(index * frameWidth)) + 'px)');
  }

  function pageAni(topVal) {
    $('html,body').stop().animate({
      scrollTop: topVal
    },1500,'easeInOutCubic');
  }

  // --- Event Handlers (Delegated) ---

  // History Slider (cont_0)
  $(document).on('click', '.cont_0 .bg .prev', function(){
    nowIdx = (nowIdx > 0) ? nowIdx - 1 : 2;
    sliderMove(nowIdx);
  });

  $(document).on('click', '.cont_0 .bg .next', function(){
    nowIdx = (nowIdx < 2) ? nowIdx + 1 : 0;
    sliderMove(nowIdx);
  });

  // Iconic Albums (cont_1)
  $(document).on('click', '.cont_1 .bg ul.thumb li a', function(event){
    event.preventDefault();
    console.log("Thumbnail clicked! (delegated)");

    var src = $(this).attr('href');
    var cont = $(this).attr('title');
    console.log("Image source (href): " + src);
    console.log("Album title: " + cont);

    $('.cont_1 .bg ul.thumb li a').removeClass('active');
    $(this).addClass('active');
    console.log("Applied .active class to the clicked thumbnail.");

    $('.cont_1 .bg .main-album-display img.current-album-cover').attr('src', src);
    $('.cont_1 .bg .main-album-display p.current-album-title').text(cont);
    console.log("Updated main image and title.");
  });

  // Members Slider (cont_2)
  $(document).on('click', '.cont_2 .bg .prev', function(){
    nowIdx = (nowIdx > 0) ? nowIdx - 1 : 3;
    frameMove(nowIdx);
  });

  $(document).on('click', '.cont_2 .bg .next', function(){
    nowIdx = (nowIdx < 3) ? nowIdx + 1 : 0;
    frameMove(nowIdx);
  });

  // Famous Songs Lightbox (cont_3)
  $(document).on('click', '.cont_3 .song-item', function(event){
    event.preventDefault();
    var src = $(this).attr('href');
    $('.gall .gallcontent').css({
      backgroundImage:'url('+src+')'
    }).parent().fadeIn();
  });

  $(document).on('click', '.gall, .gallClose', function(event){
    event.preventDefault();
    $('.gall').fadeOut();
  });

  // Legacy Gallery (cont_4)
  $(document).on('click', '.cont_4 .bg .thumb li a', function(event){
    event.preventDefault();
    var src = $(this).attr('href');
    var cont = $(this).attr('title');

    $('.cont_4 .bg .legacy-image-display img.main-legacy-image').attr('src', src);
    $('.cont_4 .bg .legacy-image-display p.legacy-caption').text(cont);

    $('.cont_4 .bg .thumb li a').removeClass('active');
    $(this).addClass('active');
  });

  // Initial animation on load
  $(window).on('load',function(){
    pageAni(arrTopVal[nowIdx]);
  });
});
