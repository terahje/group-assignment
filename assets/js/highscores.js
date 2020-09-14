var highScoresList = document.getElementById('highScoresList');
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;//using map to take an array of items and convert to something else (an HTML string)
    })
    .join("");
