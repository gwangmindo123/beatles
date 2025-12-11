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
    $slider.stop().animate({left:-(nowIdx*1100)});
  }

  function frameMove(){
    var txt = $('.cont_2 li>a').eq(nowIdx).attr('title');

    $('.cont_2 .bg .frame .txt').text(txt);
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

    $('.cont_1 .bg .screen').css({
      backgroundImage : 'url('+src+')'
    });

    $('.cont_1 .bg .txt').text(cont);

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

    $('.cont_4 .bg .screen').css({
      backgroundImage : 'url('+src+')'
    });

    $('.cont_4 .bg .txt').text(cont);

    nowIdx = $thmubs.index(this);
    $thmubs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  });//end of cont4 - photogallery

  $(window).on('load',function(){
    pageAni(arrTopVal[nowIdx]);
  });

  // ==========================================================
  // Quiz Section
  // ==========================================================
  const quizData = [
    {
      question: "비틀즈의 원래 이름은 무엇이었을까요?",
      answers: {
        a: "더 쿼리멘",
        b: "실버 비틀즈",
        c: "조니 앤 더 문독스"
      },
      correctAnswer: "a"
    },
    {
      question: "비틀즈가 투어를 중단하고 스튜디오 녹음에 집중하기 시작한 해는 언제일까요?",
      answers: {
        a: "1964년",
        b: "1966년",
        c: "1969년"
      },
      correctAnswer: "b"
    },
    {
      question: "비틀즈는 영국에서 몇 장의 정규 앨범을 발매했을까요?",
      answers: {
        a: "10장",
        b: "12장",
        c: "14장"
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (const letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
             ${letter} :
             ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      output.push(
        `<div class="quiz-question"> ${currentQuestion.question} </div>
         <div class="quiz-answers"> ${answers.join('')} </div>`
      );
    });
    $('#quiz').html(output.join(''));
  }

  function showResults() {
    const answerContainers = $('#quiz .quiz-answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
      const answerContainer = $(answerContainers[questionNumber]);
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.find(selector).val() || {});

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        $(answerContainers[questionNumber]).css('color', 'lightgreen');
      } else {
        $(answerContainers[questionNumber]).css('color', 'red');
      }
    });

    $('#quiz-results').html(`${quizData.length} 문제 중 ${numCorrect}개 정답!`);
  }

  buildQuiz();

  $('#submit-quiz').on('click', showResults);


  // ==========================================================
  // Music Recommendation Section
  // ==========================================================
  const recommendations = {
    happy: {
      song: "Here Comes The Sun",
      album: "Abbey Road",
      youtube: "https://www.youtube.com/embed/KQetemT1sWc"
    },
    sad: {
      song: "Yesterday",
      album: "Help!",
      youtube: "https://www.youtube.com/embed/NrgmdOz227I"
    },
    energetic: {
      song: "Twist and Shout",
      album: "Please Please Me",
      youtube: "https://www.youtube.com/embed/eFW2s1g3_9o"
    },
    calm: {
      song: "Blackbird",
      album: "The Beatles (White Album)",
      youtube: "https://www.youtube.com/embed/Man4Xw8Xypo"
    }
  };

  $('#recommend-btn').on('click', function(){
    const mood = $('#mood').val();
    const result = recommendations[mood];
    const resultHtml = `
      <h3>${result.song}</h3>
      <p>앨범: ${result.album}</p>
      <iframe width="560" height="315" src="${result.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
    $('#recommend-result').html(resultHtml);
  });
});