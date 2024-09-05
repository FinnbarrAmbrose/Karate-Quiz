
const startQuizButton = document.getElementById('start-quiz');
const mainContainer = document.getElementById('main-container');
const quizContainer = document.getElementById('quiz-container');
const restartQuizButton = document.getElementById('restart-quiz');


startQuizButton.addEventListener('click', function() {
    mainContainer.style.display = 'none';  // Hide the main container
    quizContainer.style.display = 'block'; // Show the quiz container
});


restartQuizButton.addEventListener('click', function() {
    quizContainer.style.display = 'none';  // Hide the quiz container
    mainContainer.style.display = 'block'; // Show the main container
});
