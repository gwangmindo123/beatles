$(function(){
    // --------------------------------------------------------
    // [1] FullPage.js 설정 (스크롤 담당)
    // --------------------------------------------------------
    $('#fullpage').fullpage({
        fixedElements: 'header',
        autoScrolling: true,
        fitToSection: true,
        scrollingSpeed: 1200,
        scrollBar: false,
        easing: 'easeInOutCubic',
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 0,
        responsiveHeight: 0,
        scrollOverflow: false, 
        verticalCentered: true,
        afterRender: function(){
            // 슬라이드 초기화: 각 슬라이더의 현재 인덱스를 0으로 설정
            $('.slides').data('current-index', 0);
            $('.album-slider').data('current-index', 0);
            $('.frame').data('current-index', 0);
        }
    });

    // --------------------------------------------------------
    // [2] 슬라이더 기능
    // --------------------------------------------------------

    // History Slider (cont_0)
    $(document).on('click', '.cont_0 .bg .next, .cont_0 .bg .prev', function(e){
        var slider = $('.cont_0 .slides');
        var currentIndex = slider.data('current-index');
        var maxIndex = slider.find('ul li').length - 1;
        
        if ($(this).hasClass('next')) {
            currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
        } else {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
        }
        slider.data('current-index', currentIndex);
        
        var slideWidth = slider.find('li').outerWidth(true);
        slider.find('ul').stop().css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
    });

    // Iconic Albums Slider (cont_1)
    $(document).on('click', '.cont_1 .bg .next, .cont_1 .bg .prev', function(e){
        var slider = $('.cont_1 .album-slider');
        var currentIndex = slider.data('current-index');
        var maxIndex = slider.find('ul li').length - 1;
        
        if ($(this).hasClass('next')) {
            currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
        } else {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
        }
        slider.data('current-index', currentIndex);
        
        var slideWidth = slider.find('li').outerWidth(true);
        slider.find('ul').stop().css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
    });

    // Members Slider (cont_2)
    $(document).on('click', '.member-intro-wrapper .next, .member-intro-wrapper .prev', function(e){
        var frame = $('.cont_2 .frame');
        var currentIndex = frame.data('current-index');
        var maxIndex = frame.find('.frame_img ul li').length - 1;

        if ($(this).hasClass('next')) {
            currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
        } else {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
        }
        frame.data('current-index', currentIndex);

        var txt = frame.find('.frame_img li').eq(currentIndex).find('a').attr('title');
        $('.my-member-name').text(txt);
        
        var frameWidth = frame.find('li').outerWidth(true);
        frame.find('.frame_img ul').stop().css('transform', 'translateX(' + (-currentIndex * frameWidth) + 'px)');
    });

    // Legacy Gallery (cont_4) - This is a thumbnail click gallery, not a slider
    $(document).on('click', '.cont_4 .bg .thumb li a', function(event){
        event.preventDefault();
        var src = $(this).attr('href');
        var cont = $(this).attr('title');

        $('.cont_4 .bg .legacy-image-display img.main-legacy-image').attr('src', src);
        $('.cont_4 .bg .legacy-image-display p.legacy-caption').text(cont);

        $('.cont_4 .bg .thumb li').removeClass('on');
        $(this).parent('li').addClass('on');
    });
});
