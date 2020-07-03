(function(){
  function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} dari ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "01. Dalam film The Matrix, karakter Neo mengambil pil berwarna ...",
      
        answers: {
          a: "Biru",
          b: "Putih",
          c: "Merah",
          d: "Hitam"
        },
      
      correctAnswer: "c"
    },
    {
      question: "02. Siapakah pemeran pemilik taman hiburan Jurassic Park dalam film Jurassic Park ?",
      answers: {
        a: "Chriss Pratt",
        b: "Jeff Goldblum",
        c: "Richard Attenborough",
        d: "Naomi Watts"
      },
      correctAnswer: "c"
    },
    {
      question: "03. Patronus dari Harry Potter mengambil bentuk hewan ?",
      answers: {
        a: "Elang",
        b: "Burung Hantu",
        c: "Singa",
        d: "Rusa"
      },
      correctAnswer: "d"
    },
    {
      question: "04. Artis korea yang menikah karena dipersatukan dalam film Descendants of the Sun adalah :",
      answers: {
        a: "Song Joong-ki dan Song Hye-kyo",
        b: "Kim Ji-won dan Jin Goo",
        c: "Bae Kyung-soo dan Yoo Jong-seon",
        d: "Uhm Jun-seong dan Kim Si-hyeong"
      },
      correctAnswer: "a"
    },
    {
      question: "05. Siapakah satu-satunya aktor pemenang Oscar dalam trilogi The Lord of The Ring ?",
      answers: {
        a: "Orlando Bloom",
        b: "Elijah Wood",
        c: "Ian McKellen",
        d: "Christopher Lee"
      },
      correctAnswer: "c"
    },
  ];

  buildQuiz();

  submitButton.addEventListener('click', showResults());
})();