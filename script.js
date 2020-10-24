//we need select everything from html and store in var
//need a function to start quiz
//first add class hide then remove class hide from second div
//start timer
//run second function quiz/questions: inside this function render questions with array of objects with questions
//from the array use for each to render questions
//keep score on choices selection. if correct add score. if incorrect deduct time
//end quiz function, inside function calculate score and end timer(if and else 0 run end)
//function for saving score and push to localstorage

var startButton = document.getElementById("start-button");
var submitEl = document.getElementById("submit-button");
var highScoresEl = document.getElementById("high-Scores");
var questionEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("endScreen");
var finalScoreEL = document.getElementById("finalScore");
var timeEl = document.getElementById("time ml-auto");
var timer = 60;
var timerInterval;
var questionIndex = 0;
//Quiz questions with objects
var questions = [
  {
    title: "What does the sign # mean?",
    choices: ["id tag", "class tag", "stop tag", "enter tag"],
    answer: "id tag",
  },
  {
    title:
      "Which method is used to remove the first element of an array and return that element?",
    choices: ["unshift", "pop", "push", "shift"],
    answer: "shift",
  },
  {
    title:
      "How is a class expressed in javascprit when performing getElementId?",
    choices: [".element", "#element", "?element", "!element"],
    answer: ".element",
  },
  {
    title: "What property evaluates the array length?",
    choices: [".log", "console.log", ".textContent", ".length"],
    answer: ".length",
  },
  {
    title: "Which command will give a user a choice between cancel and ok?",
    choices: ["alert", "confirm", "prompt", "console.log"],
    answer: "confirm",
  },
];

function setTime() {
  timerInterval = setInterval(function () {
    timer--;
    timeEl.textContent = timer;
    if (timer === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startQuiz() {
  var startButtonEl = document.getElementById("start-button");
  var timeEl = document.getElementById("time");
  var finalScoreEl = document.getElementById("finalScore");
  var quizArea = document.getElementById("quizArea");
  quizArea.innerHTML = "";
}

function getQuestion() {
  var currentQuestion = questions[questionIndex];
  var titleEl = document.getElementById("questionTitle");
  titleEl.textContent = currentQuestion.title;
  titleEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    choiceButton.setAttribute("class", "choiceButton");
    choiceButton.textContent = choice;
    choiceButton.onclick = checkQuestion;
    choicesEl.appendChild(choiceButton);
  });
}

function checkQuestion() {
    answer = event.target.textContent;
    var correct = questions[questionIndex].answer;
  if (correct === answer) {
    result.textContent = "Correct";
}
else {
    timer -= 10;
    result.textContent = "Sorry wrong answer :(";
}

  questionIndex++;
  if (questionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startQuiz();
  setTime();
  console.log(event);
});

highScoresEl.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(event);
});

submitEl.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(event);
});
