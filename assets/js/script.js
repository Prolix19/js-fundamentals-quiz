// Declare and maybe initialize some global variables
var timerVal = 0;
var interval;
var lastPage = 6;
var highScores = [];
var localStor = "Scores";

// Here's how I'll manipulate the HTML, turning off sections and only showing a relevant one
var hideAll = function() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].hidden = true;
    }
}

// Function to put high scores into local storage
var setHighScores = function() {
    localStorage.setItem(localStor, JSON.stringify(highScores));
}

// Cleans up high score list items
var clearHighScoresList = function() {
    var highscoresList = document.querySelector("#highscoreList");
    while (highscoresList.childNodes.length > 0) {
        highscoresList.removeChild(highscoresList.childNodes[0]);
    }
}

var goToPage = function(nextPg) {
    if (nextPg === lastPage) {
        clearInterval(interval);
        document.getElementById("finalScore").textContent = timerVal.toString();
    }
    hideAll();
    document.getElementsByName(nextPg.toString())[0].hidden = false;
}

var updateTimer = function() {
    if (timerVal <= 0) {
        goToPage(lastPage);
        alert("Time's up!");
        timerVal = 0;
    } else {
        timerVal--;
        document.getElementById("timerValue").textContent = timerVal.toString();
    }
}

// Defining some of these click event-launched function since I'll use them soon, and I'm writing function expressions instead of declarations that would be hoisted. I also placed some function expressions above for functions that are called by _these_ functions!
var displayHighScores = function() {
    var highscoresSection = document.querySelector("#highscores");
    var highscoresList = document.querySelector("#highscoreList");
    clearInterval(interval);
    clearHighScoresList();
    for (var i = 0; i < highScores.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = highScores[i];
        highscoresList.appendChild(newLi);
    }
    hideAll();
    document.querySelector("nav").hidden = true;
    highscoresSection.hidden = false;
}

var saveScore = function() {
    var initialsInput = document.getElementById("initials");
    var score = 0;
    var newIndex = 0;
    // Save the score into the appropriate spot in highScores
    for (newIndex = 0; newIndex < highScores.length; newIndex++) {
        score = parseInt(highScores[newIndex].substr(-2));
        if (timerVal > score) {
            break;
        }
    }
    highScores.splice(newIndex, 0, initialsInput.value + " - " + timerVal.toString());
    initialsInput.value = "";
    setHighScores();
    displayHighScores();
}

// Hides all then reveals only the starting page HTML, to "go back" from the high scores page
var goBack = function() {
    timerVal = 0;
    document.getElementById("timerValue").textContent = timerVal.toString();
    hideAll();
    document.querySelector("nav").hidden = false;
    document.getElementById("intro").hidden = false;
}

var clearHighScores = function() {
    clearHighScoresList();
    highScores = [];
    setHighScores();
}

var startQuiz = function() {
    hideAll();
    document.getElementById("page1").hidden = false;
    timerVal = 75;
    clearInterval(interval);
    interval = setInterval(updateTimer, 1000);
}

// Throw event listeners onto the non-answer buttons; funcs that will be called on click are expressed above
document.querySelector("#highScoresBtn").addEventListener("click", displayHighScores);
document.querySelector("#backBtn").addEventListener("click", goBack);
document.querySelector("#clearScoresBtn").addEventListener("click", clearHighScores);
document.querySelector("#startBtn").addEventListener("click", startQuiz);
document.querySelector("#initialsBtn").addEventListener("click", saveScore);

// Function to handle what to do on an answer button event
var answerButtons = function(event) {
    var currentPage = event.target.parentElement.getAttribute("name");
    var nextPage = parseInt(currentPage) + 1;
    var correctAnswer = event.target.parentElement.getAttribute("value");
    var userAnswer = event.target.value;
    if (userAnswer === correctAnswer) {
        document.getElementById("correct").hidden = false;
    } else {
        document.getElementById("incorrect").hidden = false;
        timerVal -= 10;
    }
    if (timerVal <= 0) {
        nextPage = lastPage;
    }
    goToPage(nextPage);
}

// Function to put event listeners on the answer buttons, and run the above when an answer is clicked
var setAnswerButtons = function() {
    var btns = document.getElementsByClassName("answerBtn")
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", answerButtons);
    }
}

// Function to retrieve high scores from local storage, if any
var getHighScores = function() {
    var scoreList = JSON.parse(localStorage.getItem(localStor));
    if (scoreList) {
        highScores = scoreList;
    }
}

// Finish page setup by executing the above two functions, finishing the implementation of listeners and the loading of anything already in local storage
setAnswerButtons();
getHighScores();