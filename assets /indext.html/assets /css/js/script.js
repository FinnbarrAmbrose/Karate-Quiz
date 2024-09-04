document.addEventListener("DOMContentLoaded", function() {
    const startQuizButton = document.getElementById("start-quiz");
    const restartQuizButton = document.getElementById("restart-quiz");
    const answerInput = document.getElementById("answer-input");
    const submitButton = document.getElementById("submit-button");
    const beltSelect = document.getElementById("belt-select");
    const quizContainer = document.querySelector(".quiz-container");
    const resultContainer = document.getElementById("result-container");

    // Hide the answer and result sections initially
    quizContainer.style.display = "none";
    resultContainer.style.display = "none";

    // Start Quiz button event
    startQuizButton.addEventListener("click", function() {
        const selectedBelt = beltSelect.value;
        if (selectedBelt) {
            quizContainer.style.display = "block"; // Show the question input
            startQuizButton.style.display = "none"; // Hide the start button
        } else {
            alert("Please choose a belt to start the quiz.");
        }
    });

    // Submit Answer button event
    submitButton.addEventListener("click", function() {
        const userAnswer = answerInput.value.trim();
        if (userAnswer) {
            quizContainer.style.display = "none"; // Hide the question input
            resultContainer.style.display = "block"; // Show the result
            resultContainer.innerHTML = `<p>You answered: ${userAnswer}</p>`;
        } else {
            alert("Please enter an answer.");
        }
    });

    // Restart Quiz button event
    restartQuizButton.addEventListener("click", function() {
        quizContainer.style.display = "none"; // Hide the question input
        resultContainer.style.display = "none"; // Hide the result
        startQuizButton.style.display = "block"; // Show the start button
        answerInput.value = ""; // Clear the answer input
        beltSelect.value = ""; // Reset the belt selection
    });
});
