const questions = [
    {
        img: "images/مدير.png", // Make sure the image exists in the specified directory
        text: 'وزعت المدرسة 677 بطاقة دعوة لحضور الحفل الختامي في المدرسة، فإذا كان عدد مقاعد الحفل 800 مقعد، فما عدد المقاعد المتبقية؟',
        correct: 'طرح'
    },
    {
        img: "images/saad.png", // Make sure the image exists in the specified directory
        text: 'جمع سعد 711 صدفة، وجمع سعود 25 صدفة زيادة على سعد، فكم صدفة جمع سعود؟',
        correct: 'جمع'
    },
    {
        img: "images/sara.png", // Make sure the image exists in the specified directory
        text: 'تحتاج سارة 225 طابع تذكاري جمعت حتى الآن 147 طابعًا، فكم طابعًا ينقصها؟',
        correct: 'طرح'
    }
];

let currentQuestion = 0;

// Preload audio files with relative paths
const correctSound = new Audio("sounds/correct-sound.mp3"); // Adjust this path as needed
const wrongSound = new Audio("sounds/wrong-sound.mp3"); // Adjust this path as needed
const soundtrack = new Audio("sounds/soundtrack.mp3"); // Make sure the soundtrack is in the sounds folder

// Set the audio to loop
soundtrack.loop = true;

document.addEventListener('DOMContentLoaded', () => {
    // Start playing the soundtrack
    soundtrack.play().catch(error => {
        console.error("Error playing soundtrack:", error);
    });

    loadQuestion();

    document.getElementById('choice1').addEventListener('click', () => checkAnswer('جمع'));
    document.getElementById('choice2').addEventListener('click', () => checkAnswer('طرح'));
    document.getElementById('play-again').addEventListener('click', () => {
        currentQuestion = 0;
        document.getElementById('game-end').classList.add('hidden');
        loadQuestion();
    });
});

function loadQuestion() {
    const question = questions[currentQuestion];
    const questionBox = document.querySelector('.question-box');

    // Show loading screen
    document.getElementById('loading').style.display = 'flex';

    // Create image element for preload
    const characterImg = new Image();
    characterImg.src = question.img;

    characterImg.onload = () => {
        // Slide out old question
        questionBox.classList.remove('slideIn');
        questionBox.classList.add('slideOut');

        setTimeout(() => {
            // Update question content after the animation
            document.getElementById('character-img').src = characterImg.src;
            document.getElementById('question-text').textContent = question.text;

            // Slide in new question
            questionBox.classList.remove('slideOut');
            questionBox.classList.add('slideIn');

            // Clear feedback message
            document.getElementById('feedback').textContent = '';
            document.getElementById('feedback').style.opacity = 0; // Set opacity to 0

            // Hide loading screen
            document.getElementById('loading').style.display = 'none';
        }, 500); // Delay matches animation duration
    };

    characterImg.onerror = () => {
        console.error("Image failed to load");
        // Hide loading screen on error
        document.getElementById('loading').style.display = 'none';
    };
}

function checkAnswer(answer) {
    const feedback = document.getElementById('feedback');

    if (answer === questions[currentQuestion].correct) {
        correctSound.play();
        feedback.textContent = 'إجابة صحيحة!'; // Display feedback
        feedback.style.color = 'green'; // Set feedback color
    } else {
        wrongSound.play();
        feedback.textContent = 'إجابة خاطئة!'; // Display feedback
        feedback.style.color = 'red'; // Set feedback color
    }

    feedback.style.opacity = 1; // Set opacity to 1 for visibility
    feedback.classList.remove('fadeOut'); // Ensure fadeOut class is removed

    // Fade out the feedback after 1.5 seconds
    setTimeout(() => {
        feedback.classList.add('fadeOut'); // Add fadeOut class
        feedback.style.opacity = 0; // Fade out the feedback

        // Wait for 1 second before loading the next question
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                // Show game end message
                document.getElementById('game-end').classList.remove('hidden');
            }
        }, 1000); // Delay before loading the next question
    }, 1500); // Delay for feedback visibility
}
