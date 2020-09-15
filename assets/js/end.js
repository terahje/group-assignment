var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var max_highScores = 5;


finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    
    console.log(username.value);

   saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    console.log('save button clicked!');

    var score = {
        score: mostRecentScore,
        name: username.value,
    };
    console.log(score);

    highScores.push(score);//add highscore to array

    highScores.sort((a, b) => {
        return b.score - a.score; //sort the array with the greatest score on top
    });

    highScores.splice(5); //removes everything after index 5 in the array

    localStorage.setItem('highScores', JSON.stringify(highScores)); //update local storage--have to convert to string so that it's saved
    window.location.assign('./index.html');

};