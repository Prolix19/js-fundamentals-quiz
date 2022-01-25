// Declare and maybe initialize some global variables
var lastPage = 6;
var highScores = [];
var localStor = "Scores";

// Throw event listeners onto the non-answer buttons
document.getElementById("highScoresBtn").addEventListener("click", displayHighScores);
document.getElementById("backBtn").addEventListener("click", goBack);
document.getElementById("clearScoresBtn").addEventListener("click", clearHighscores);
document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("initialsBtn").addEventListener("click", saveInitials);

// And function for event listeners on the answer buttons
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

setAnswerButtons(); // add event listeners to all answer buttons
