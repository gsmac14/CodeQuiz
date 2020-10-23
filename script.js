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
