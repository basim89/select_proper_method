const questions = [
    {
        img: "C:/Users/bloma/Desktop/select_proper_method/images/مدير.png",
        text: 'وزعت المدرسة 677 بطاقة دعوة لحضور الحفل الختامي في المدرسة، فإذا كان عدد مقاعد الحفل 800 مقعد، فما عدد المقاعد المتبقية؟',
        correct: 'طرح'
    },
    {
        img: "C:/Users/bloma/Desktop/select_proper_method/images/saad.png",
        text: 'جمع سعد 711 صدفة، وجمع سعود 25 صدفة زيادة على سعد، فكم صدفة جمع سعود؟',
        correct: 'جمع'
    },
    {
        img: "C:/Users/bloma/Desktop/select_proper_method/images/sara.png",
        text: 'تحتاج سارة 225 طابع تذكاري جمعت حتى الآن 147 طابعًا، فكم طابعًا ينقصها؟',
        correct: 'طرح'
    }
];

let currentQuestion = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();

    document.getElementById('choice1').addEventListener('click', () => checkAnswer('جمع'));
    document.getElementById('choice2').addEventListener('click', () => checkAnswer('طرح'));
});

function loadQuestion() {
    const question = questions[currentQuestion];
    const questionBox = document.querySelector('.question-box');
    
    // Slide out old question
    questionBox.classList.remove('slideIn');
    questionBox.classList.add('slideOut');

    setTimeout(() => {
        // Update question content after the animation
        document.getElementById('character-img').src = question.img;
        document.getElementById('question-text').textContent = question.text;

        // Slide in new question
        questionBox.classList.remove('slideOut');
        questionBox.classList.add('slideIn');
    }, 500); // Delay matches animation duration
}

function checkAnswer(answer) {
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    
    if (answer === questions[currentQuestion].correct) {
        correctSound.play();
        alert('إجابة صحيحة!');
    } else {
        wrongSound.play();
        alert('إجابة خاطئة!');
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert('انتهت اللعبة!');
        currentQuestion = 0;
        loadQuestion();
    }
}
