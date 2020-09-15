const questionEl = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('collection-item'));
let questionCounter = 0;

let correctEl = document.getElementById('correctAnswer');
let incorrectEl = document.getElementById('incorrectAnswer');

const questionCounterText = document.getElementById('question-counter');
let questionCount = 0;

const scoreText = document.getElementById('score');
let score = 0;

let acceptingAnswers = false; //keeps the user from selecting answers prior to the page loading.


let currentQues = {};
let activeQuestion = [];//temp array that holds active questions
let questions = [];//returned array from the API.

let max_questions = 10; //total number of questions given via the API
let correct_bonus = 10;
let penalty = -1;





var getMathQuestions = function() {

    fetch('https://opentdb.com/api.php?amount=10&category=19&type=multiple')

        .then(function (response) {
            return response.json();
        })
        .then((returnedQuestions) => {

            questions = returnedQuestions.results.map((retQues) => {

                const formatQuestion = {
                    question: retQues.question,

                };

                const answerChoices = [...retQues.incorrect_answers];
                formatQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formatQuestion.answer - 1,
                    0,
                    retQues.correct_answer

                );

                answerChoices.forEach((choices, index) => {
                    formatQuestion[(index + 1)] = choices;
                });

                return formatQuestion;

            }); console.log(questions)

            startGame();

        })

        .catch((err) => {
            console.error(err);
        });

}
var getScienceQuestions = function() {
    fetch('https://opentdb.com/api.php?amount=10&category=17&type=multiple')
        .then(function (response) {
            return response.json();
        })
        .then((returnedQuestions) => {
            questions = returnedQuestions.results.map((retQues) => {
                const formatQuestion = {
                    question: retQues.question,
                };
                const answerChoices = [...retQues.incorrect_answers];
                formatQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formatQuestion.answer - 1,
                    0,
                    retQues.correct_answer
                );
                answerChoices.forEach((choices, index) => {
                    formatQuestion[(index + 1)] = choices;
                });
                return formatQuestion;
            }); console.log(questions)
            startGame();
        })
        .catch((err) => {
            console.error(err);
        });
}
var getGeographyQuestions = function() {
    fetch('https://opentdb.com/api.php?amount=10&category=22&type=multiple')
        .then(function (response) {
            return response.json();
        })
        .then((returnedQuestions) => {
            questions = returnedQuestions.results.map((retQues) => {
                const formatQuestion = {
                    question: retQues.question,
                };
                const answerChoices = [...retQues.incorrect_answers];
                formatQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formatQuestion.answer - 1,
                    0,
                    retQues.correct_answer
                );
                answerChoices.forEach((choices, index) => {
                    formatQuestion[(index + 1)] = choices;
                });
                return formatQuestion;
            }); console.log(questions)
            startGame();
        })
        .catch((err) => {
            console.error(err);
        });
}
var getRandomQuestions = function() {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then(function (response) {
            return response.json();
        })
        .then((returnedQuestions) => {
            questions = returnedQuestions.results.map((retQues) => {
                const formatQuestion = {
                    question: retQues.question,
                };
                const answerChoices = [...retQues.incorrect_answers];
                formatQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formatQuestion.answer - 1,
                    0,
                    retQues.correct_answer
                );
                answerChoices.forEach((choices, index) => {
                    formatQuestion[(index + 1)] = choices;
                });
                return formatQuestion;
            }); console.log(questions)
            startGame();
        })
        .catch((err) => {
            console.error(err);
        });
}






getMathQuestions();
getScienceQuestions();
getGeographyQuestions();
getRandomQuestions();





function startGame() {
    if()
    questionCount = 0;
    score = 0;
    activeQuestion = [...questions];

    displayQuestions();
};


function displayQuestions() {

    if (/*questions.length === 0 ||*/ questionCount >= max_questions) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./end.html');
    }

    questionCount++;
    questionCounterText.innerText = `${questionCount}/${max_questions}`;

    const quesIndex = Math.floor(Math.random() * questions.length);
    currentQues = questions[quesIndex];


    questionEl.innerHTML = currentQues.question;

    choices.forEach(choices => {
        let number = choices.dataset['number'];
        choices.innerText = currentQues[number];
    });

    activeQuestion.splice(quesIndex, 1);

    acceptingAnswers = true;


}

choices.forEach((choices) => {
    choices.addEventListener('click', (event) => {
        ///if (!acceptingAnswers) return;

        //acceptingAnswers = false;


        let selectedChoice = event.target;
        let selectedAnswer1 = selectedChoice.dataset['number'];

        let selectedAnswer = parseInt(selectedAnswer1, 10);




        console.log(selectedChoice);
        console.log(selectedAnswer);
        console.log(currentQues.answer);


        if (selectedAnswer === currentQues.answer) {

            console.log(currentQues.answer);

            correctEl.innerText = 'Correct!';
            correctEl.className = 'correct';
            incrementScore(correct_bonus);//add a bonus to every correct answer


        } else {
            incorrectEl.innerText = 'Incorrect!';
            incorrectEl.className = 'incorrect';
            incrementScore(penalty);
        }
        setTimeout(() => {
            correctEl = '';
            incorrectEl = '';
            displayQuestions();

        }, 500);

    });

});

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}




