// Setup variables and build out heading, ordered list for high scores
var section = document.querySelector("#highscoresarea")

var header = document.createElement("h1")
header.textContent = "High scores"
section.appendChild(header);

var olElement = document.createElement("ol")
olElement.setAttribute("id", "scores")
section.appendChild(olElement);
var list = document.querySelector("#scores");

// Add any stored scores to the list
var highScoreList = JSON.parse(localStorage.getItem("scores"));

if (highScoreList == null) {
    highScoreList = [];
} else {
    for (var i = 0; i < highScoreList.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.setAttribute("id", i);
        scoreItem.textContent = highScoreList[i].initials + ": " + highScoreList[i].score
        list.appendChild(scoreItem);
    }
}

// Set up buttons and then add listeners to navigate back home or clear the list & stored scores
var backBtn = document.createElement("button");
backBtn.setAttribute("class", "btn");
backBtn.setAttribute("id", "goback");
backBtn.textContent = "Go Back"
document.querySelector("#highscoresarea").appendChild(backBtn);

var clearBtn = document.createElement("button");
clearBtn.setAttribute("class", "btn");
clearBtn.setAttribute("id", "clear");
clearBtn.textContent = "Clear List"
document.querySelector("#highscoresarea").appendChild(clearBtn);

document.querySelector("#goback").addEventListener("click", function () {
    location.href = "index.html";
});

document.querySelector("#clear").addEventListener("click", function () {
    olElement.innerHTML = "";
    // while (list.firstChild) {
    //     list.removeChild(list.firstChild);
    // }
    localStorage.clear();
});