// quiz.js

let correctAnswers = 0;
let wrongAnswers = 0;

function checkAnswer(choice, correctAnswer, feedbackElement, progressElement, correctCountElement, wrongCountElement) {
    let isCorrect = (choice === correctAnswer);

    if (isCorrect) {
        document.getElementById('correctSound').play();
        feedbackElement.textContent = "صحيح! تحتاج 78 طابعًا.";
        feedbackElement.style.color = "green"; // Set feedback text to green
        correctAnswers++;
        correctCountElement.textContent = correctAnswers; // Update correct answers counter

        // Animate progress bar
        let newWidth = (correctAnswers / 3) * 100; // Assume 3 total questions
        progressElement.style.width = newWidth + '%'; // Update width
        progressElement.style.transition = 'width 1s ease'; // Animate width change
    } else {
        document.getElementById('wrongSound').play();
        feedbackElement.textContent = "خطأ! حاول مرة أخرى.";
        feedbackElement.style.color = "red"; // Set feedback text to red
        wrongAnswers++;
        wrongCountElement.textContent = wrongAnswers; // Update wrong answers counter
    }

    // Store counts in local storage
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);

    // Redirect to final results page after 2 seconds
    setTimeout(function () {
        window.location.href = "results.html";
    }, 2000);
}

function displayResults() {
    let finalCorrectCount = localStorage.getItem('correctAnswers') || 0;
    let finalWrongCount = localStorage.getItem('wrongAnswers') || 0;

    document.getElementById('finalCorrectCount').textContent = finalCorrectCount;
    document.getElementById('finalWrongCount').textContent = finalWrongCount;
}

