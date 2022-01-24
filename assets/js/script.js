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
        "Question": "Commonly used data types DO NOT include:",
        "Response1": "1. strings",
        "Response2": "2. booleans",
        "Response3": "3. alerts",
        "Response4": "4. numbers",
        "Correct": "3"
    },
    {
        "Question": "The condition in an if / else statement is enclosed with _____.",
        "Response1": "1. quotes",
        "Response2": "2. curly braces",
        "Response3": "3. parentheses",
        "Response4": "4. square brackets",
        "Correct": "3"
    },
    {
        "Question": "Arrays in JavaScript can be used to store _____.",
        "Response1": "1. numbers and strings",
        "Response2": "2. other arrays",
        "Response3": "3. booleans",
        "Response4": "4. all of the above",
        "Correct": "4"
    },
    {
        "Question": "String values must be enclosed within _____ when being assigned to variables.",
        "Response1": "1. commas",
        "Response2": "2. curly braces",
        "Response3": "3. quotes",
        "Response4": "4. parentheses",
        "Correct": "3"
    },
    {
        "Question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "Response1": "1. JavaScript",
        "Response2": "2. terminal/bash",
        "Response3": "3. for loops",
        "Response4": "4. console.log",
        "Correct": "4"
    }
];

var quizTimer = 75;

var startQuizButton = document.querySelector("#startquizbutton");

var timerElement = document.querySelector("#timer");

var quizHTML = document.querySelector("#quizarea");

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

var startQuiz = function() {
    countdown();
    quizHTML.innerHTML = "<h1>" + quizArray[0].Question + "</h1><button class='btn' type='button' id='1' data-num='1'>" + quizArray[0].Response1 + "</button><br/><button class='btn' type='button' id='2' data-num='2'>" + quizArray[0].Response2 + "</button><br/><button class='btn' type='button' id='3' data-num='3'>" + quizArray[0].Response3 + "</button><br/><button class='btn' type='button' id='4' data-num='4'>" + quizArray[0].Response4;
    var btn1 = document.querySelector("#1");
    var btn2 = document.querySelector("#2");
    var btn3 = document.querySelector("#3");
    var btn4 = document.querySelector("#4");
    quizHTML.addEventListener('click', event => {
        if (event.target.id === "1") {
            alert("1");
        }
    });
    btn1.addEventListener("click", alert("1"));
    btn2.addEventListener("click", alert("2"));
    btn3.addEventListener("click", alert("3"));
    btn4.addEventListener("click", alert("4"));
}


startQuizButton.addEventListener("click", startQuiz);