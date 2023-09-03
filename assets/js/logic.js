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

