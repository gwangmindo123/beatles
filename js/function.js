$(function(){
    // --------------------------------------------------------
    // [1] FullPage.js 설정 (스크롤 담당)
    // --------------------------------------------------------
    $('#fullpage').fullpage({
        autoScrolling: true,      // 한 페이지씩 딱딱 넘어감
        fitToSection: true,       // 섹션에 딱 맞게 멈춤
        scrollingSpeed: 1200,      // 넘어가는 속도
        scrollBar: false,         // 스크롤바 숨김 (깔끔하게)
        easing: 'easeInOutCubic',
        
        // 네비게이션 (오른쪽 점) 필요하면 true로 변경
        navigation: true, 
        navigationPosition: 'right',
        
        // 반응형 설정 (화면 작아져도 풀페이지 유지)
        responsiveWidth: 0,
        responsiveHeight: 0,

        // 섹션 내부가 길 경우 처리 (필요시 true, scrolloverflow.min.js 필요)
        scrollOverflow: false, 
        
        // 디자인 보정
        verticalCentered: true,   // 내용 수직 중앙 정렬
        
        // 페이지 로드 후 실행할 것들
        afterRender: function(){
            // 슬라이드 초기화 등이 필요하면 여기에 작성
        }
    });

    // --------------------------------------------------------
    // [2] 기존 팀플 기능 유지 (슬라이드, 탭, 갤러리)
    // --------------------------------------------------------
    
    var nowIdx = 0; // 슬라이드용 순서 변수

    // --- Functions (슬라이드 움직이는 함수들) ---
    function sliderMove(index){
        var $slider = $('.cont_0 .bg .slides ul');
        var slideWidth = $slider.find('li').outerWidth(true);
        $slider.stop().css('transform', 'translateX(' + (-(index * slideWidth)) + 'px)');
    }

    function frameMove(index){
        var $frame = $('.cont_2 .bg .frame .frame_img ul');
        var frameWidth = $frame.find('li').outerWidth(true);
        var txt = $('.cont_2 .bg .frame .frame_img li').eq(index).find('a').attr('title');

        $('.cont_2 .bg .my-member-name').text(txt);
        $frame.stop().css('transform', 'translateX(' + (-(index * frameWidth)) + 'px)');
    }

    // (주의) pageAni 함수는 FullPage.js와 충돌나므로 삭제했습니다.

    // --- Event Handlers (클릭 이벤트들) ---

    // History Slider (cont_0: 비틀즈 역사 슬라이드)
    $(document).on('click', '.cont_0 .bg .prev', function(){
        nowIdx = (nowIdx > 0) ? nowIdx - 1 : 2;
        sliderMove(nowIdx);
    });

    $(document).on('click', '.cont_0 .bg .next', function(){
        nowIdx = (nowIdx < 2) ? nowIdx + 1 : 0;
        sliderMove(nowIdx);
    });

    // Iconic Albums (cont_1: 앨범 클릭)
    $(document).on('click', '.cont_1 .bg ul.thumb li a', function(e){
    e.preventDefault(); 
    e.stopPropagation();

    var src = $(this).attr('href');
    var title = $(this).attr('title');

    // [수정] a태그가 아니라 부모인 li태그에 'on'을 붙여야 CSS가 작동함
    $('.cont_1 .bg ul.thumb li').removeClass('on'); // 형제들 끄기
    $(this).parent('li').addClass('on');            // 나(li) 켜기

    // 메인 이미지 변경
    var $mainImg = $('.cont_1 .bg .main-album-display img.current-album-cover');
    var $mainTxt = $('.cont_1 .bg .main-album-display p.current-album-title');

    $mainImg.stop().fadeOut(100, function(){
        $(this).attr('src', src).fadeIn(300);
    });
    
    $mainTxt.text(title);
  });

    // Members Slider (cont_2: 멤버 소개 슬라이드)
    $(document).on('click', '.cont_2 .bg .prev', function(){
        nowIdx = (nowIdx > 0) ? nowIdx - 1 : 3;
        frameMove(nowIdx);
    });

    $(document).on('click', '.cont_2 .bg .next', function(){
        nowIdx = (nowIdx < 3) ? nowIdx + 1 : 0;
        frameMove(nowIdx);
    });

    // Legacy Gallery (cont_4: 유산 갤러리)
    $(document).on('click', '.cont_4 .bg .thumb li a', function(event){
        event.preventDefault();
        var src = $(this).attr('href');
        var cont = $(this).attr('title');

        $('.cont_4 .bg .legacy-image-display img.main-legacy-image').attr('src', src);
        $('.cont_4 .bg .legacy-image-display p.legacy-caption').text(cont);

        $('.cont_4 .bg .thumb li a').removeClass('active');
        $(this).addClass('active');
    });

    // (주의) $(window).on('load') 부분도 삭제했습니다. (FullPage가 알아서 처리함)
});