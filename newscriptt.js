const questions=[

  
  {
    question: "hum charo me sbse chutiya kon hai?",

    answers:[

      {text:"shruti",correct:false},
      {text:"varshney",correct:true},
      {text:"garvit",correct:false},
      {text:"satya",correct:false},
    ]
  },


  {
    question :"sabse cute kon hai?" ,

    answers:[

      {text:"shruti",correct:false},
      {text:"satya",correct:true},
      {text:"varshney",correct:false},
      {text:"garvit",correct:false},
    ]
  },
  

  {
    question :"sabse sundar kon?",

    answers:[

      
      {text:"shruti",correct:true},
      {text:"garvit",correct:false},
      {text:"varshney",correct:false},
      {text:"satya",correct:false},
    ]
  },
  

  {
    question :"sabse jyada preshan kon krta?" ,

    answers:[

      {text:"garvit",correct:true},
      {text:"shruti",correct:false},
      {text:"satya",correct:false},
      {text:"varshney",correct:false},
    ]
  },
  
  {
    question :"hmara mentor kon hai?" ,

    answers:[

      {text:"gaurav nigam",correct:false},
      {text:"ashish",correct:false},
      {text:"sajaivir",correct:true},
      {text:"ajit tomar",correct:false},
    ]
  },
  

  

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer.correct, button));
    answerButtons.appendChild(button);
  });

  nextButton.style.display = "block"; // Display the Next button after rendering the options
}

function selectAnswer(correct, button) {
  nextButton.style.display = "block"; // Ensure Next button is always visible after an answer is selected

  if (correct) {
    button.classList.add("correct");
    score += 4; // Add 4 for correct answers
  } else {
    button.classList.add("incorrect");
    score-=1;
    // Highlight the correct answer
    const correctButton = Array.from(answerButtons.children).find(
      (btn) => btn.dataset.correct === "true"
    );
    correctButton.classList.add("correct");
    score -= 1; // Subtract 1 for incorrect answers
  }

  // Disable all buttons after choosing an answer
  Array.from(answerButtons.children).forEach((btn) => {
    btn.disabled = true;
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length * 4}!`;
  nextButton.innerHTML = "Play Again";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();