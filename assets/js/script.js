
        
        const whiteBeltQuestions = [
            {
                question: "What is the name of the front stance in Shotokan Karate?",
                options: ["Kiba Dachi", "Zenkutsu Dachi", "Kokutsu Dachi", "Neko Ashi Dachi"],
                answer: "Zenkutsu Dachi"
            },
            {
                question: "How do you execute a basic middle punch in Shotokan?",
                options: ["Extend your arm while standing still", "Rotate your hips and extend your arm forward with a twist", "Jump and punch","Kick and punch"],
                answer: "Rotate your hips and extend your arm forward with a twist"
            },
            {
                question: "What is the purpose of Gedan Barai (downward block) in Shotokan?",
                options: ["To block high attacks", "To block attacks aimed at the lower body", "To strike the opponent", "To evade an attack"],
                answer: "To block attacks aimed at the lower body"
            },
            {
                question: "How do you perform a front kick (Mae Geri) in Shotokan?",
                options: ["Strike with your heel", "Raise your knee and extend your foot forward", "striking with the ball of the foot", "Swing your leg to the side"],
                answer: "Raise your knee and extend your foot forward"
            }
        ];

        // Yellow Belt Questions
        const yellowBeltQuestions = [
            {
                question: "What is the first move in the kata Heian Shodan?",
                options: ["A punch", "A downward block (Gedan Barai)", "A side kick", "A front kick"],
                answer: "A downward block (Gedan Barai)"
            },
            {
                question: "How do you perform an upper block (Jodan Uke)?",
                options: ["Raise your arm to the side", "Raise your arm above your head with palm facing outward", "Keep your arm down", "Jump and block"],
                answer: "Raise your arm above your head with palm facing outward"
            },
            {
                question: "What is the purpose of a side kick (Yoko Geri) in Shotokan?",
                options: ["To strike an opponent from the front", "To strike an opponent from the side", "To block attacks", "To evade"],
                answer: "To strike an opponent from the side"
            },
            {
                question: "How do you change from a front stance (Zenkutsu Dachi) to a back stance (Kokutsu Dachi)?",
                options: ["Jump", "Shift your weight back and turn your front foot sideways", "Keep your legs straight", "Spin around"],
                answer: "Shift your weight back and turn your front foot sideways"
            }
        ];

        // Green Belt Questions
        const greenBeltQuestions = [
            {
                question: "In Heian Nidan, what does the low block (Gedan Barai) teach you?",
                options: ["Defense against high attacks", "Defense against low attacks", "How to kick", "How to punch"],
                answer: "Defense against low attacks"
            },
            {
                question: "How do you perform an outside block (Soto Uke)?",
                options: ["Extend your arm outward with palm facing inward", "Extend your arm outward with palm facing away", "Swing your arm backward", "Raise your hand above your head"],
                answer: "Extend your arm outward with palm facing away"
            },
            {
                question: "What is a knife hand block (Shuto Uke)?",
                options: ["A fist punch", "A block using the side of your hand", "A low kick", "A jump"],
                answer: "A block using the side of your hand"
            },
            {
                question: "How do you keep your balance when performing a front kick?",
                options: ["Lean back", "Focus on your supporting leg and engage your core", "Close your eyes", "Jump before kicking"],
                answer: "Focus on your supporting leg and engage your core"
            }
        ];

        // Blue Belt Questions
        const blueBeltQuestions = [
            {
                question: "What is the focus of the kata Heian Sandan?",
                options: ["Emphasizing jumping techniques", "Balance, transitions, and combination techniques", "Only blocking techniques", "Only kicking techniques"],
                answer: "Balance, transitions, and combination techniques"
            },
            {
                question: "How do you perform a back kick (Ushiro Geri) correctly?",
                options: ["Turn your body and kick straight back", "Lift your knee and kick upward", "Kick sideways", "Jump then kick"],
                answer: "Lift your knee and kick upward"
            },
            {
                question: "How do you block a punch with an upper block and counterattack?",
                options: ["Perform the upper block and then run away", "Perform the upper block and immediately follow with a punch", "Ignore the punch", "Jump and punch"],
                answer: "Perform the upper block and immediately follow with a punch"
            },
            {
                question: "What is the key to generating power in a reverse punch (Gyaku-zuki)?",
                options: ["Just using your arm", "Rotating your hips and shoulders while driving from your back leg", "Punching faster", "Kicking first"],
                answer: "Rotating your hips and shoulders while driving from your back leg"
            }
        ];

        // Brown Belt Questions
        const brownBeltQuestions = [
            {
                question: "What are the main stances in Shotokan Karate and how are they used?",
                options: ["They are all the same", "They help with mobility and balance", "They are only for show", "They are used for dancing"],
                answer: "They help with mobility and balance"
            },
            {
                question: "How do you perform a Hidari Mae Geri (left front kick)?",
                options: ["Chamber your left leg and extend it forward", "Kick backward", "Kick to the side", "Jump and kick"],
                answer: "Chamber your left leg and extend it forward"
            },
            {
                question: "What is the sequence of movements in Heian Yondan?",
                options: ["It includes only kicks", "It includes various blocks and punches", "It is a dance", "It only includes jumps"],
                answer: "It includes various blocks and punches"
            },
            {
                question: "How do you combine a block and a punch in a single movement?",
                options: ["Do them separately", "Execute a block while delivering a punch with the other hand", "Use both hands to block", "Kick and punch together"],
                answer: "Execute a block while delivering a punch with the other hand"
            }
        ];

        // Black Belt Questions
        const blackBeltQuestions = [
            {
                question: "How does Kata reflect the principles of self-defense in Shotokan?",
                options: ["It teaches only how to attack", "It incorporates both defensive and offensive movements", "It is just a workout", "It teaches meditation"],
                answer: "It incorporates both defensive and offensive movements"
            },
            {
                question: "In Kanku Dai, what are the key techniques and their applications?",
                options: ["It focuses on punching only", "It includes blocks, strikes, and stances that demonstrate adaptability", "It is a warm-up exercise", "It is about stretching"],
                answer: "It includes blocks, strikes, and stances that demonstrate adaptability"
            },
            {
                question: "How do you analyze your opponent’s movements in sparring?",
                options: ["Ignore them", "Observe their stance, rhythm, and patterns", "Just go for a punch", "Just kick them"],
                answer: "Observe their stance, rhythm, and patterns"
            },
            {
                question: "What is the importance of breathing in advanced Shotokan techniques?",
                options: ["It’s not important", "Proper breathing increases power and control in techniques", "It is only for meditation", "You should hold your breath"],
                answer: "Proper breathing increases power and control in techniques"
            }
        ];


// Grab elements from the DOM
const startQuizButton = document.getElementById('start-quiz');
const mainContainer = document.getElementById('main-container');
const quizContainer = document.getElementById('quiz-container');
const restartQuizButton = document.getElementById('restart-quiz');
const beltSelect = document.getElementById('belt-select');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options-container');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');
const timerElement = document.getElementById('timer');
const alertMessage = document.getElementById('alertMessage');

// Variables for quiz state management
let currentQuestionIndex = 0;
let score = 0;
let currentBeltQuestions = [];
let selectedAnswer = "";
let timeRemaining = 30; // Timer 30 seconds
let timerInterval;

// Function to load a question
function loadQuestion() {
    const currentQuestion = currentBeltQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Clear previous options
    optionsElement.innerHTML = "";

    // Generate the options dynamically for each question
    currentQuestion.options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement('br'));
    });

    // Reset selectedAnswer
    selectedAnswer = "";

     // Clear alert box
    alertMessage.innerText = "";

    // Add event listeners to update selectedAnswer when the user selects an option
    document.querySelectorAll('input[name="option"]').forEach(option => {
        option.addEventListener('change', function () {
            selectedAnswer = this.value;
        });
    });
}

// Function to start the timer
function startTimer() {
    timerElement.innerHTML = timeRemaining; // Initialize display
    timerInterval = setInterval(function () {
        timeRemaining--;
        timerElement.innerHTML = timeRemaining;

        // time hits zero, stop quiz
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            showResult(); //show result when time stops
        }
    }, 1000); // interval 1 second
}

// Start quiz event listener
startQuizButton.addEventListener('click', function () {
    const selectedBelt = beltSelect.value;

    // Ensure a belt is selected
    if (!selectedBelt) {
        alertMessage.innerText = 'Please select a belt to start the quiz.'; // Show alert message
        return;
    }

    // Set questions based on belt selection
    if (selectedBelt === 'white') {
        currentBeltQuestions = whiteBeltQuestions;
    } else if (selectedBelt === 'yellow') {
        currentBeltQuestions = yellowBeltQuestions;
    } else if (selectedBelt === 'green') {
        currentBeltQuestions = greenBeltQuestions;
    } else if (selectedBelt === 'blue') {
        currentBeltQuestions = blueBeltQuestions;
    } else if (selectedBelt === 'brown') {
        currentBeltQuestions = brownBeltQuestions;
    } else if (selectedBelt === 'black') {
        currentBeltQuestions = blackBeltQuestions;
    }

    mainContainer.style.display = 'none'; // Hide main container
    quizContainer.style.display = 'block'; // Show quiz container
    loadQuestion();

    // Start the timer
    timeRemaining = 30; // reset timer
    startTimer(); // start countdown
});

// Submit button event listener
submitButton.addEventListener('click', function () {

    
    // Check if the user has selected an answer
    if (!selectedAnswer) {
        alertMessage.innerText = "Please select an answer!"; // Show message on the page
        return;
    }
    const correctAnswer = currentBeltQuestions[currentQuestionIndex].answer;

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    // load the next part
    if (currentQuestionIndex < currentBeltQuestions.length) {
        loadQuestion();
    } else {
        //show the result
        showResult();
    }
});

// Restart quiz event listener
restartQuizButton.addEventListener('click', function () {
    resetQuiz();
    mainContainer.style.display = 'block'; // main container
    quizContainer.style.display = 'none'; // hide quiz container
    clearInterval(timerInterval); // stop timer
});
// Function to show the final score after the quiz
function showResult() {
    clearInterval(timerInterval); // stop the timer
    resultContainer.innerHTML = `<p>Quiz finished! Your score: ${score}/${currentBeltQuestions.length}</p>`;
    submitButton.style.display = 'none'; // submit button 
    restartQuizButton.style.display = 'inline-block'; //restart button
}

// function to reset the quiz to the initial state
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = "";
    submitButton.style.display = 'inline-block'; 
    resultContainer.innerText = ''; 
    timeRemaining = 30; 
    }