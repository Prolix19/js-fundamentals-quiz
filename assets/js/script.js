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

var headerElement = document.querySelector("#head");
var quizHTML = document.querySelector("#quizarea");

var quizTimer = 75;

var startQuizButton = document.querySelector("#startquizbutton");

var timerElement = document.querySelector("#timer");

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


var startQuiz = function(event) {
    event.preventDefault;
    countdown();
    var currentQuestion = 0;
    quizHTML.innerHTML = "<h1>" + quizArray[currentQuestion].question + "</h1>";
    quizHTML.appendChild()
    function showAnswers() {
        var question = quizArray[currentQuestion];
        var answers = createEle
    }


    function createElement(element, type, value, text) {
        var tmp = document.createElement(element);
        tmp.setAttribute(type, value);
        tmp.textContent = text;
        return tmp;
    };
}

startQuizButton.addEventListener("click", startQuiz);