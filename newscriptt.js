const questions=[

  
  {
    question: "Which keyword is used to establish an inheritance relationship between classes in Java? ",

    answers:[

      {text:"implement",correct:false},
      {text:"extends",correct:true},
      {text:"inherit",correct:false},
      {text:"interface",correct:false},
    ]
  },


  {
    question :"Inheritance in Java allows a class to:" ,

    answers:[

      {text:"Acquire properties and methods from another class ",correct:true},
      {text:"Create an entirely new class ",correct:false},
      {text:"Hide the implementation details of a class ",correct:false},
      {text:"Implement interfaces",correct:false},
    ]
  },
  

  {
    question :"	Which sorting algorithm has the best average-case time complexity and is often used as a subroutine in other sorting algorithms?",

    answers:[

      
      {text:"Insetion sort",correct:false},
      {text:"Bubble sort",correct:false},
      {text:"Selection sort",correct:false},
      {text:"Merge sort",correct:true},
    ]
  },
  

  {
    question :"Which operation on arrays is NOT performed in constant time?" ,

    answers:[

      {text:"Accessing an element",correct:false},
      {text:"Deleting an element",correct:false},
      {text:"Inserting an element at the end",correct:false},
      {text:"Finding the length of the array",correct:true},
    ]
  },
  
  {
    question :"What is the purpose of the stack in the expression evaluation algorithm?" ,

    answers:[

      {text:"To store operators",correct:false},
      {text:"To store operands",correct:false},
      {text:"To store both operators and operands",correct:false},
      {text:"To store intermediate results",correct:true},
    ]
  },
  
  {
    question :"Which data structure is often used to implement a stack?" ,

    answers:[

      {text:"Linked List",correct:false},
      {text:"Array",correct:true},
      {text:"Tree",correct:false},
      {text:"Queue",correct:false},
    ]
  },

  {
    question :"What is the purpose of the front and rear pointers in a queue?" ,

    answers:[

      {text:"To mark the start and end of the queue",correct:true},
      {text:"To implement priority in the queue",correct:false},
      {text:"To track the size of the queue",correct:false},
      {text:"To manage linked lists",correct:false},
    ]
  },

  {
    question :"Which of the following is true for a binary search tree (BST)?" ,

    answers:[

      {text:"Left subtree of a node contains nodes with smaller values",correct:false},
      {text:"Right subtree of a node contains nodes with larger values",correct:false},
      {text:"Both A and B",correct:true},
      {text:"Neither A nor B",correct:false},
    ]
  },

  {
    question :"What is the shape property of a binary heap?" ,

    answers:[

      {text:"Complete Binary Tree",correct:true},
      {text:"Full Binary Tree",correct:false},
      {text:"Perfect Binary Tree",correct:false},
      {text:"Balanced Binary Tree",correct:false},
    ]
  },

  {
    question :"What is the worst-case time complexity of inserting an element into a hash table with open addressing?" ,

    answers:[

      {text:"O(1)",correct:false},
      {text:"O(log N)",correct:false},
      {text:"O(N)",correct:true},
      {text:"O(N^2)",correct:false},
    ]
  }


  

  

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
