
        
        const whiteBeltQuestions = [
            {
                question: "What is the name of the front stance in Shotokan Karate?",
                options: ["A) Kiba Dachi", "B) Zenkutsu Dachi", "C) Kokutsu Dachi", "D) Neko Ashi Dachi"],
                answer: "B"
            },
            {
                question: "How do you execute a basic middle punch in Shotokan?",
                options: ["A) Extend your arm while standing still", "B) Rotate your hips and extend your arm forward with a twist", "C) Jump and punch", "D) Kick and punch"],
                answer: "B"
            },
            {
                question: "What is the purpose of Gedan Barai (downward block) in Shotokan?",
                options: ["A) To block high attacks", "B) To block attacks aimed at the lower body", "C) To strike the opponent", "D) To evade an attack"],
                answer: "B"
            },
            {
                question: "How do you perform a front kick (Mae Geri) in Shotokan?",
                options: ["A) Strike with your heel", "B) Raise your knee and extend your foot forward, striking with the ball of the foot", "C) Kick backward", "D) Swing your leg to the side"],
                answer: "B"
            }
        ];

        // Yellow Belt Questions
        const yellowBeltQuestions = [
            {
                question: "What is the first move in the kata Heian Shodan?",
                options: ["A) A punch", "B) A downward block (Gedan Barai)", "C) A side kick", "D) A front kick"],
                answer: "B"
            },
            {
                question: "How do you perform an upper block (Jodan Uke)?",
                options: ["A) Raise your arm to the side", "B) Raise your arm above your head with palm facing outward", "C) Keep your arm down", "D) Jump and block"],
                answer: "B"
            },
            {
                question: "What is the purpose of a side kick (Yoko Geri) in Shotokan?",
                options: ["A) To strike an opponent from the front", "B) To strike an opponent from the side", "C) To block attacks", "D) To evade"],
                answer: "B"
            },
            {
                question: "How do you change from a front stance (Zenkutsu Dachi) to a back stance (Kokutsu Dachi)?",
                options: ["A) Jump", "B) Shift your weight back and turn your front foot sideways", "C) Keep your legs straight", "D) Spin around"],
                answer: "B"
            }
        ];

        // Green Belt Questions
        const greenBeltQuestions = [
            {
                question: "In Heian Nidan, what does the low block (Gedan Barai) teach you?",
                options: ["A) Defense against high attacks", "B) Defense against low attacks", "C) How to kick", "D) How to punch"],
                answer: "B"
            },
            {
                question: "How do you perform an outside block (Soto Uke)?",
                options: ["A) Extend your arm outward with palm facing inward", "B) Extend your arm outward with palm facing away", "C) Swing your arm backward", "D) Raise your hand above your head"],
                answer: "B"
            },
            {
                question: "What is a knife hand block (Shuto Uke)?",
                options: ["A) A fist punch", "B) A block using the side of your hand", "C) A low kick", "D) A jump"],
                answer: "B"
            },
            {
                question: "How do you keep your balance when performing a front kick?",
                options: ["A) Lean back", "B) Focus on your supporting leg and engage your core", "C) Close your eyes", "D) Jump before kicking"],
                answer: "B"
            }
        ];

        // Blue Belt Questions
        const blueBeltQuestions = [
            {
                question: "What is the focus of the kata Heian Sandan?",
                options: ["A) Emphasizing jumping techniques", "B) Balance, transitions, and combination techniques", "C) Only blocking techniques", "D) Only kicking techniques"],
                answer: "B"
            },
            {
                question: "How do you perform a back kick (Ushiro Geri) correctly?",
                options: ["A) Turn your body and kick straight back", "B) Lift your knee and kick upward", "C) Kick sideways", "D) Jump then kick"],
                answer: "A"
            },
            {
                question: "How do you block a punch with an upper block and counterattack?",
                options: ["A) Perform the upper block and then run away", "B) Perform the upper block and immediately follow with a punch", "C) Ignore the punch", "D) Jump and punch"],
                answer: "B"
            },
            {
                question: "What is the key to generating power in a reverse punch (Gyaku-zuki)?",
                options: ["A) Just using your arm", "B) Rotating your hips and shoulders while driving from your back leg", "C) Punching faster", "D) Kicking first"],
                answer: "B"
            }
        ];

        // Brown Belt Questions
        const brownBeltQuestions = [
            {
                question: "What are the main stances in Shotokan Karate and how are they used?",
                options: ["A) They are all the same", "B) They help with mobility and balance", "C) They are only for show", "D) They are used for dancing"],
                answer: "B"
            },
            {
                question: "How do you perform a Hidari Mae Geri (left front kick)?",
                options: ["A) Chamber your left leg and extend it forward", "B) Kick backward", "C) Kick to the side", "D) Jump and kick"],
                answer: "A"
            },
            {
                question: "What is the sequence of movements in Heian Yondan?",
                options: ["A) It includes only kicks", "B) It includes various blocks and punches", "C) It is a dance", "D) It only includes jumps"],
                answer: "B"
            },
            {
                question: "How do you combine a block and a punch in a single movement?",
                options: ["A) Do them separately", "B) Execute a block while delivering a punch with the other hand", "C) Use both hands to block", "D) Kick and punch together"],
                answer: "B"
            }
        ];

        // Black Belt Questions
        const blackBeltQuestions = [
            {
                question: "How does Kata reflect the principles of self-defense in Shotokan?",
                options: ["A) It teaches only how to attack", "B) It incorporates both defensive and offensive movements", "C) It is just a workout", "D) It teaches meditation"],
                answer: "B"
            },
            {
                question: "In Kanku Dai, what are the key techniques and their applications?",
                options: ["A) It focuses on punching only", "B) It includes blocks, strikes, and stances that demonstrate adaptability", "C) It is a warm-up exercise", "D) It is about stretching"],
                answer: "B"
            },
            {
                question: "How do you analyze your opponent’s movements in sparring?",
                options: ["A) Ignore them", "B) Observe their stance, rhythm, and patterns", "C) Just go for a punch", "D) Just kick them"],
                answer: "B"
            },
            {
                question: "What is the importance of breathing in advanced Shotokan techniques?",
                options: ["A) It’s not important", "B) Proper breathing increases power and control in techniques", "C) It is only for meditation", "D) You should hold your breath"],
                answer: "B"
            }
        ];

        // Grabbing necessary elements
        const startQuizButton = document.getElementById('start-quiz');
        const mainContainer = document.getElementById('main-container');
        const quizContainer = document.getElementById('quiz-container');
        const restartQuizButton = document.getElementById('restart-quiz');
        const beltSelect = document.getElementById('belt-select');
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const submitButton = document.getElementById('submit-button');
        const resultContainer = document.getElementById('result-container');

        // Variables for quiz state management
        let currentQuestionIndex = 0;
        let score = 0;
        let currentBeltQuestions = [];
        let selectedAnswer = "";

        // Start quiz event listener
        startQuizButton.addEventListener('click', function () {
            const selectedBelt = beltSelect.value;

            // Ensure a belt is selected
            if (!selectedBelt) {
                alert('Please select a belt to start the quiz.');
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

            resetQuiz();
            mainContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            showQuestion();
        });

        // Submit answer event listener
        submitButton.addEventListener('click', function () {
            if (!selectedAnswer) {
                alert("Please select an answer!");
                return;
            }
            const correctAnswer = currentBeltQuestions[currentQuestionIndex].answer;

            // Check if the answer is correct
            if (selectedAnswer === correctAnswer) {
                score++;
            }

            currentQuestionIndex++;

            // Show next question or result
            if (currentQuestionIndex < currentBeltQuestions.length) {
                showQuestion();
            } else {
                showResult();
            }
        });

        // Restart quiz event listener
        restartQuizButton.addEventListener('click', function () {
            resetQuiz();
            mainContainer.style.display = 'block';
            quizContainer.style.display = 'none';
        });

        // Function to display the current question and options
        function showQuestion() {
            const currentQuestion = currentBeltQuestions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;

            // Clear previous options
            optionsElement.innerHTML = "";

            // Generate the options
            currentQuestion.options.forEach((option, index) => {
                const li = document.createElement('li');
                li.innerHTML = `<label><input type="radio" name="option" value="${option.charAt(0)}"> ${option}</label>`;
                optionsElement.appendChild(li);
            });

            // Reset selectedAnswer
            selectedAnswer = "";

            // Add event listeners to update selectedAnswer when the user selects an option
            document.querySelectorAll('input[name="option"]').forEach(option => {
                option.addEventListener('change', function () {
                    selectedAnswer = this.value;
                });
            });
        }

        // Function to show final score after quiz
        function showResult() {
            resultContainer.innerHTML = `<p>Quiz finished! Your score: ${score}/${currentBeltQuestions.length}</p>`;
            submitButton.style.display = 'none'; // Hide submit button after quiz ends
            restartQuizButton.style.display = 'inline-block'; // Show restart button
        }

        // Reset quiz to initial state
        function resetQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            selectedAnswer = "";
            submitButton.style.display = 'inline-block'; // Show submit button
            resultContainer.textContent = ''; // Clear result text
            restartQuizButton.style.display = 'none'; // Hide restart button
        }