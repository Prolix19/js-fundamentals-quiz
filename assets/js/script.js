// Creating array of quiz question & answer objects
var quizArray = [
    {
        question: "Commonly used data types DO NOT include:",
        responses: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correct: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        responses: ["1. quotes", "2. curly braces", "3. parentheses", "4. square brackets"],
        correct: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        responses: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: "4"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        responses: ["1. commas", "2. curly braces", "3. quotes", "4. parentheses"],
        correct: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        response: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: "4"
    }
];

// Declare & initialize some global variables for tracking the time remaining, score, and number of questions
var quizTimer = 75;
var score = 0;
var currentQuestion = 0;
var last = 4;

// Bringing in some elements from the HTML
var headerElement = document.querySelector("#head");
var quizHTML = document.querySelector("#quizarea");
var startQuizButton = document.querySelector("#startquizbutton");
var timerElement = document.querySelector("#timer");

// Build out buttons for the four possible responses to each question
var answerButton1 = document.createElement("button");
answerButton1.setAttribute("type", "button");
answerButton1.setAttribute("class", "btn");
answerButton1.setAttribute("id", "btn0");
answerButton1.setAttribute("data-num", "1");

var answerButton2 = document.createElement("button");
answerButton2.setAttribute("type", "button");
answerButton2.setAttribute("class", "btn");
answerButton2.setAttribute("id", "btn1");
answerButton1.setAttribute("data-num", "2");

var answerButton3 = document.createElement("button");
answerButton3.setAttribute("type", "button");
answerButton3.setAttribute("class", "btn");
answerButton3.setAttribute("id", "btn2");
answerButton1.setAttribute("data-num", "3");

var answerButton4 = document.createElement("button");
answerButton4.setAttribute("type", "button");
answerButton4.setAttribute("class", "btn");
answerButton4.setAttribute("id", "btn3");
answerButton1.setAttribute("data-num", "4");

// Populate the initial HTML -- heading, description of the quiz, and a button to start it
var pageH1 = document.createElement("h1");
pageH1.setAttribute("id", "h1");
pageH1.textContent = "Coding Quiz Challenge";
quizHTML.appendChild(pageH1);

var pageP = document.createElement("p");
pageP.setAttribute("id", "text");
pageP.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
quizHTML.appendChild(pageP);

var startQuizButton = document.createElement("button");
startQuizButton.setAttribute("type", "button");
startQuizButton.setAttribute("class", "btn");
startQuizButton.setAttribute("id", "start");
startQuizButton.textContent = "Start Quiz";
quizHTML.appendChild(startQuizButton);

// This setInterval function keeps track of the time remaining and ends the game as needed.
function countdown() {
    var timeInterval = setInterval(function () {
        timerElement.textContent = "Time: " + quizTimer;
        quizTimer--;
        if (quizTimer <= 0) {
            timerElement.textContent = "Time: 0";
            clearInterval(timeInterval);
            endQuiz();
        } else if (currentQuestion === last) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function makeAnswerBtns() {
    var qtemp = quizArray[currentQuestion];
    var answers = document.createElement("div");
    answers.setAttribute("id", "answers");
    quizHTML.appendChild(answers);
    var answersDiv = document.querySelector("#answers");
    answersDiv.appendChild(answerButton1);
    answersDiv.appendChild(answerButton2);
    answersDiv.appendChild(answerButton3);
    answersDiv.appendChild(answerButton4);
    var textSpan;
    for (var i = 0; i < qtemp.responses.length; i++) {
        textSpan = document.createElement("span");
        textSpan.setAttribute("data-answer", "option" + i);
        textSpan.setAttribute("id", "option" + i);
        document.querySelector(("#btn" + i)).appendChild(textSpan);
    };
};

function showQuestion() {
    var qtemp = quizArray[currentQuestion];
    pageH1.textContent = qtemp.question;
    for (var i = 0; i < qtemp.responses.length; i++) {
        document.querySelector("#option" + i).textContent = qtem.responses[i];
    }
};

var startQuiz = function(event) {
    // Preempt default event handling and hide a couple elements
    event.preventDefault;
    document.querySelector("#text").style.display = "none";
    document.querySelector("#start").style.display = "none";

    // Start the timer, make answer buttons, and show the first question
    countdown();
    makeAnswerBtns();
    showQuestion();

    // Add event listeners to the answer buttons
    var answerList = document.querySelectorAll(".answers");
    for (var i = 0; i < answerList.length; i++) {
        answerList[i].addEventListener('click', checkAnswer)
    };
}

startQuizButton.addEventListener("click", startQuiz);

