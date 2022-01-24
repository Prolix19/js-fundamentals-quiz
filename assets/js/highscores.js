// Add code to:
// - Parse local storage and display the objects in a high scores table
// - Go back button to reload index.html
// - Clear local storage when a "Clear high scores" button is clicked

var sampleHighScore = {
    ABC: 19
};

localStorage.setItem("scores", JSON.stringify(sampleHighScore));

var scoresList = document.querySelector(".highscoreslist");

var clearScores = document.querySelector("#clearhighscoresbutton");

scoresList.innerHTML = "<li>" + localStorage.getItem("scores") + "</li>";

clearScores.addEventListener("click", function() {
    localStorage.clear();
    scoresList.innerHTML = "";
});