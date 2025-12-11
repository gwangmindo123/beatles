$(function(){
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

      let resultText = '';
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainer.css('color', 'lightgreen');
        resultText = `<div class="explanation correct">정답! ${currentQuestion.explanation}</div>`;
      } else {
        answerContainer.css('color', 'red');
        resultText = `<div class="explanation incorrect">오답! 정답은 ${currentQuestion.correctAnswer.toUpperCase()} (${currentQuestion.answers[currentQuestion.correctAnswer]}) 입니다. ${currentQuestion.explanation}</div>`;
      }
      answerContainer.append(resultText); // Append explanation after answers
    });

    $('#quiz-results').html(`${quizData.length} 문제 중 ${numCorrect}개 정답!`);
  }

  buildQuiz();

  $('#submit-quiz').on('click', showResults);
});