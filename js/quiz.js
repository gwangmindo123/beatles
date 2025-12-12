$(function(){
  const quizData = [
    {
      question: "비틀즈의 원래 이름은 무엇이었을까요?",
      answers: {
        a: "더 쿼리멘",
        b: "실버 비틀즈",
        c: "조니 앤 더 문독스"
      },
      correctAnswer: "a",
      explanation: "비틀즈는 1957년 존 레논이 결성한 '더 쿼리멘'이라는 스키플 밴드로 시작했습니다. 이후 여러 멤버 변화를 거쳐 '비틀즈'가 됩니다."
    },
    {
      question: "비틀즈가 투어를 중단하고 스튜디오 녹음에 집중하기 시작한 해는 언제일까요?",
      answers: {
        a: "1964년",
        b: "1966년",
        c: "1969년"
      },
      correctAnswer: "b",
      explanation: "비틀즈는 1966년 샌프란시스코의 캔들스틱 파크 공연을 마지막으로 라이브 투어를 중단하고 스튜디오 작업에만 몰두하게 됩니다. 이 시기 'Sgt. Pepper's Lonely Hearts Club Band'와 같은 명반들이 탄생했습니다."
    },
    {
      question: "비틀즈는 영국에서 몇 장의 정규 앨범을 발매했을까요?",
      answers: {
        a: "10장",
        b: "12장",
        c: "14장"
      },
      correctAnswer: "b",
      explanation: "비틀즈는 영국에서 총 12장의 정규 스튜디오 앨범을 발매했습니다. (Please Please Me부터 Let It Be까지)"
    },
    {
        question: "다음 중 비틀즈의 멤버가 아닌 사람은 누구일까요?",
        answers: {
            a: "존 레논",
            b: "폴 매카트니",
            c: "브라이언 엡스타인"
        },
        correctAnswer: "c",
        explanation: "브라이언 엡스타인은 비틀즈의 매니저였습니다. 그는 비틀즈의 성공에 큰 역할을 했지만, 밴드의 멤버는 아니었습니다."
    },
    {
        question: "비틀즈의 마지막 앨범은 무엇일까요?",
        answers: {
            a: "Abbey Road",
            b: "Let It Be",
            c: "The White Album"
        },
        correctAnswer: "b",
        explanation: "'Let It Be'는 1970년에 발매된 비틀즈의 마지막 앨범입니다. 하지만 녹음 시기상으로는 'Abbey Road'가 마지막입니다."
    }
  ];

  let currentQuestionIndex = 0;
  let userAnswers = {};

  function displayQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const answers = [];
    for (const letter in questionData.answers) {
      const userAnswer = userAnswers[currentQuestionIndex];
      answers.push(
        `<label>
           <input type="radio" name="question${currentQuestionIndex}" value="${letter}" ${userAnswer === letter ? 'checked' : ''}>
           ${letter} :
           ${questionData.answers[letter]}
         </label>`
      );
    }

    $('#quiz').html(
      `<div class="quiz-question">${currentQuestionIndex + 1}. ${questionData.question}</div>
       <div class="quiz-answers">${answers.join('')}</div>`
    );

    $('#previous-quiz').toggle(currentQuestionIndex > 0);
    if (currentQuestionIndex === quizData.length - 1) {
      $('#next-quiz').hide();
      $('#submit-quiz').show();
    } else {
      $('#next-quiz').show();
      $('#submit-quiz').hide();
    }
  }

  function saveAnswer() {
    const selected = $(`input[name=question${currentQuestionIndex}]:checked`).val();
    if (selected) {
      userAnswers[currentQuestionIndex] = selected;
    }
  }

  function showResults() {
    $('#quiz').hide();
    $('.quiz-navigation').hide();

    let numCorrect = 0;
    const resultsOutput = [];

    quizData.forEach((currentQuestion, questionNumber) => {
      const userAnswer = userAnswers[questionNumber];
      let resultText = '';
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        resultText = `<div class="explanation correct"><b>${questionNumber + 1}번 문제: 정답!</b> ${currentQuestion.explanation}</div>`;
      } else {
        const correctAnswerText = currentQuestion.answers[currentQuestion.correctAnswer];
        resultText = `<div class="explanation incorrect"><b>${questionNumber + 1}번 문제: 오답!</b> 정답은 ${currentQuestion.correctAnswer.toUpperCase()} (${correctAnswerText}) 입니다. ${currentQuestion.explanation}</div>`;
      }
      resultsOutput.push(resultText);
    });

    $('#quiz-results').html(
      `<h2>결과: ${quizData.length} 문제 중 ${numCorrect}개 정답!</h2>
       ${resultsOutput.join('')}`
    );

    $('#play-again-quiz').show();
  }
  
  function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    
    $('#quiz-results').empty();
    $('#play-again-quiz').hide();
    
    $('#quiz').show();
    $('.quiz-navigation').show();
    
    displayQuestion();
  }

  $('#next-quiz').on('click', function() {
    saveAnswer();
    currentQuestionIndex++;
    displayQuestion();
  });

  $('#previous-quiz').on('click', function() {
    saveAnswer();
    currentQuestionIndex--;
    displayQuestion();
  });

  $('#submit-quiz').on('click', function() {
    saveAnswer();
    showResults();
  });
  
  $('#play-again-quiz').on('click', resetQuiz);

  // Initial load
  displayQuestion();
});
