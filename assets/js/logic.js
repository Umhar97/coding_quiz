let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

let timerElement = document.getElementById("time");
let questionsElement = document.getElementById("questions");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialsElement = document.getElementById("initials");
let feedbackElement = document.getElementById("feedback");

let sxfCorrect = new Audio("assets/sfx/correct.wav");


function getQuestion() {

}

function questionClick() {

}

function startQuiz() {
let startScreenElement = document.getElementById ("start-screen");
    startScreenElement.setAttribute("class", "hide" );
}

function quizEnd() {

}

function clockTick() {

}

function saveHighScore() {

}

function checkForEnter() {

}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialsElement.addEventListener("keyup", checkForEnter);