
const startQuizButton =document.getElementById('start-quiz');
const mainContainer =document.getElementById('main-container');
const quizContainer =document.getElementById('quiz-container');
const restartQuizButton =document.getElementById('restart-quiz');
const beltSelect= document.getElementById('belt-select');
const answerInput =document.getElementById('answer-input');
const submitButton =document.getElementById('submit-button');
const resultContainer =document.getElementById('result-container');

startQuizButton.addEventListener('click', function() {
    mainContainer.style.display = 'none';  
    quizContainer.style.display = 'block';
    
});


restartQuizButton.addEventListener('click', function() {
    quizContainer.style.display = 'none';
    mainContainer.style.display = 'block';
});


const whiteBeltQuestions = [
    { question: "What is the name of the front stance in Shotokan Karate?", answer: "B" },
    { question: "How do you execute a basic middle punch in Shotokan?", answer: "B" },
    { question: "What is the purpose of Gedan Barai (downward block) in Shotokan?", answer: "B" },
    { question: "How do you perform a front kick (Mae Geri) in Shotokan?", answer: "B" }
];

let currentQuestionIndex = 0;
let score = 0;

startQuizButton.addEventListener('click', function() {
    if (beltSelect.value === 'white') {
        mainContainer.style.display = 'none';  
        quizContainer.style.display = 'block'; 
        showQuestion();
   
    }
    const selectedBelt = beltSelect.value;
    if (selectedBelt === 'white') {
        currentBeltQuestions = karateQuestions.whiteBelt;
    } else if (selectedBelt === 'yellow') {
        currentBeltQuestions = karateQuestions.yellowBelt;
    } else if (selectedBelt === 'green') {
        currentBeltQuestions = karateQuestions.greenBelt;
    } else if (selectedBelt === 'blue') {
        currentBeltQuestions = karateQuestions.blueBelt;
    } else if (selectedBelt === 'brown') {
        currentBeltQuestions = karateQuestions.brownBelt;
    } else if (selectedBelt === 'black') {
        currentBeltQuestions = karateQuestions.blackBelt;
    }  else {
        alert('select a belt to start the your traning.');
});

submitButton.addEventListener('click', function() {
    const userAnswer = answerInput.value.toUpperCase();
    const correctAnswer = whiteBeltQuestions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) score++;
    
    currentQuestionIndex++;

    if (currentQuestionIndex < whiteBeltQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartQuizButton.addEventListener('click', function() {
    resetQuiz();
});

function showQuestion() {
    resultContainer.textContent = whiteBeltQuestions[currentQuestionIndex].question;
    answerInput.value = '';  
}

function showResult() {
    resultContainer.innerHTML = `<p>Quiz finished! Your score: ${score}/${whiteBeltQuestions.length}</p>`;
    submitButton.style.display = 'none'; 
}

function resetQuiz() {
    quizContainer.style.display = 'none';
    mainContainer.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    submitButton.style.display = 'inline-block';
    resultContainer.textContent = '';
}
