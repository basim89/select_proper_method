let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const questions = [
    {
        question: "ماذا يكون 5 + 3؟",
        correctAnswer: "جمع",
        characterImg: "C:/Users/bloma/Desktop/select_proper_method/images/school.png"
    },
    {
        question: "ماذا يكون 8 - 4؟",
        correctAnswer: "طرح",
        characterImg: "C:/Users/bloma/Desktop/select_proper_method/images/saad.png"
    },
    {
        question: "ماذا يكون 10 - 6؟",
        correctAnswer: "طرح",
        characterImg: "C:/Users/bloma/Desktop/select_proper_method/images/sara.png"
    }
];

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.question;
    document.getElementById('character-img').src = currentQuestion.characterImg;
    document.getElementById('feedback').innerText = ''; // Clear feedback
    updateProgressBar();
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');

    if (selectedAnswer === currentQuestion.correctAnswer) {
        correctAnswers++;
        feedbackElement.innerText = "اجابة صحيحيخة";
        feedbackElement.style.color = "green";
        document.getElementById("correct-sound").play();
    } else {
        wrongAnswers++;
        feedbackElement.innerText = "اجابة خاطة";
        feedbackElement.style.color = "red";
        document.getElementById("wrong-sound").play();
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 1000); // Wait 1 second before loading the next question
}

function endGame() {
    document.querySelector('.game-container').classList.add('hidden');
    const gameEndElement = document.getElementById('game-end');
    gameEndElement.classList.remove('hidden');
    gameEndElement.innerHTML += `<p>إجابات صحيحة: ${correctAnswers}</p>`;
    gameEndElement.innerHTML += `<p>إجابات خاطئة: ${wrongAnswers}</p>`;
}

function updateProgressBar() {
    // Logic for updating progress bar can be added here
}

document.addEventListener('DOMContentLoaded', loadQuestion);
