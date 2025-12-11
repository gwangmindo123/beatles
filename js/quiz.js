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
});