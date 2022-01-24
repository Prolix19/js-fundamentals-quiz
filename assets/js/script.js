// Add code to:
// Start a countdown timer from 75 seconds when "Start Quiz" button is clicked
// Parse click events on each answer, evaluating correct/incorrect, applying time penalty if incorrect, loading next question or quiz end as appropriate, providing feedback on last response.
// Handle form to submit final score and initials
// Throw high score data into local storage
// Your score = time remaining
// Penalty is -10 seconds from time remaining per incorrect answer
// Five questions, multiple choice with four answers apiece

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

var quizTimer = 75;

var startQuizButton = document.querySelector("#startquizbutton");

var timerElement = document.querySelector("#timer");

var quizHTML = document.querySelector("#quizarea");

var highScore = {
    initials: "ABC",
    score: "19"
};

function countdown() {
    var timeInterval = setInterval(function () {
      if (quizTimer > 0) {
        timerElement.textContent = "Time: " + quizTimer;
        quizTimer--;
      } else {
        timerElement.textContent = "Time: 0";
        clearInterval(timeInterval);
        // Call func to end game
        // return false;
      }
    }, 1000);
  }

// function countdown() {
//     var updateTimer = setInterval(function() {
//         // if (quizTimer > 0) {
//         //     timerElement.textContent = "Time: " + quizTimer;
//         //     quizTimer--;
//         // } else {
//         //     timerElement.textContent = "Time: 0";
//         // }
//         while(quizTimer > 0) {
//             timerElement.textContent = "Time: " + quizTimer;
//             quizTimer--;
//         }

//         clearInterval(updateTimer);
//     }, 1000);
// }

// var presentQuestion = function(int) {
//     quizHTML.innerHTML = "<h1>" + quizArray[int].Question + "</h1><button class='btn' type='button' id='1' data-num='1'>" + quizArray[int].Response1 + "</button><br/><button class='btn' type='button' id='2' data-num='2'>" + quizArray[int].Response2 + "</button><br/><button class='btn' type='button' id='3' data-num='3'>" + quizArray[int].Response3 + "</button><br/><button class='btn' type='button' id='4' data-num='4'>" + quizArray[int].Response4;
// }

var startQuiz = function() {
    countdown();
    // for (var i = 0; i < quizArray.length; i++) {
    //     presentQuestion(i);
    // }
    quizHTML.innerHTML = "<h1>" + quizArray[0].Question + "</h1><button class='btn' type='button' id='1' data-num='1'>" + quizArray[0].Response1 + "</button><br/><button class='btn' type='button' id='2' data-num='2'>" + quizArray[0].Response2 + "</button><br/><button class='btn' type='button' id='3' data-num='3'>" + quizArray[0].Response3 + "</button><br/><button class='btn' type='button' id='4' data-num='4'>" + quizArray[0].Response4;
    // var btn1 = document.querySelector("#1");
    // var btn2 = document.querySelector("#2");
    // var btn3 = document.querySelector("#3");
    // var btn4 = document.querySelector("#4");
    // quizHTML.addEventListener('click', event => {
    //     if (event.target.id === "1") {
    //         alert("1");
    //     }
    // });
    // btn1.addEventListener("click", alert("1"));
    // btn2.addEventListener("click", alert("2"));
    // btn3.addEventListener("click", alert("3"));
    // btn4.addEventListener("click", alert("4"));
}

startQuizButton.addEventListener("click", startQuiz);