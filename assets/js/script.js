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

// Cleans up high score list items
function clearHighscoresList() {
    var highscoresList = document.querySelector("#highscoreList");
    while (highscoresList.childNodes.length > 0) {
        highscoresList.removeChild(highscoresList.childNodes[0]);
    }
}

// Defining some of these click event-launched function since I'll use them soon, and I'm writing function expressions instead of declarations that would be hoisted. I also placed some function expressions above for functions that are called by _these_ functions!
var displayHighScores = function() {
    var highscoresSection = document.querySelector("#highscores");
    var highscoresList = document.querySelector("#highscoreList");
    clearInterval(interval);
    clearHighscoresList();
    for (var i = 0; i < highScores.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = highScores[i];
        highscoresList.appendChild(newLi);
    }
    hideAll();
    document.querySelector("nav").hidden = true;
    highscoresSection.hidden = false;
}

// Hides all then reveals only the starting page HTML, to "go back" from the high scores page
function goBack() {
    timerVal = 0;
    document.getElementById("timerValue").textContent = timerVal.toString();
    hideAll();
    document.querySelector("nav").hidden = false;
    document.getElementById("intro").hidden = false;
}

// Throw event listeners onto the non-answer buttons
document.querySelector("#highScoresBtn").addEventListener("click", displayHighScores);
document.querySelector("#backBtn").addEventListener("click", goBack);
document.querySelector("#clearScoresBtn").addEventListener("click", clearHighscores);
document.querySelector("#startBtn").addEventListener("click", startQuiz);
document.querySelector("#initialsBtn").addEventListener("click", saveInitials);

// Put event listeners on the answer buttons
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

// Continue setup by executing the above functions
getHighScores();

setAnswerButtons();

// To-do: startQuiz function, displayHighScores, save initials, etc.


