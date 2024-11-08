// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to the start button
    document.getElementById("start-button").addEventListener("click", function () {
        // Hide the start container
        document.getElementById("start-container").style.display = "none";

        // Show the questions page
        document.getElementById("questions-page").style.display = "flex";
        loadQuestion(); // Start with the first question
    });
});

// Example questions array (in French)
const questions = [
    // Easy Level
    {
        question: "Quel mot complète correctement la phrase : 'Je ____ au marché ce matin.' ?",
        options: ["vas", "vais", "va", "alle"],
        correctAnswer: "vais",
        feedbackCorrect: "Bien joué ! 'Je vais' est correct.",
        feedbackIncorrect: "Non, la bonne réponse est 'vais'."
    },
    {
        question: "Quelle est la forme correcte du pluriel de 'cheval' ?",
        options: ["chevals", "chevaux", "chevauxs", "chevales"],
        correctAnswer: "chevaux",
        feedbackCorrect: "Exact ! Le pluriel de 'cheval' est 'chevaux'.",
        feedbackIncorrect: "Pas tout à fait ! La bonne réponse est 'chevaux'."
    },
    {
        question: "Quelle préposition complète la phrase : 'Je vais ____ France en été.' ?",
        options: ["à", "en", "au", "aux"],
        correctAnswer: "en",
        feedbackCorrect: "Bien joué ! La bonne préposition est 'en'.",
        feedbackIncorrect: "Non, il faut dire 'en France'."
    },
    {
        question: "Choisissez le bon article : '____ arbre est grand.'",
        options: ["Le", "La", "Un", "Une"],
        correctAnswer: "Le",
        feedbackCorrect: "Correct ! On dit 'Le arbre' car 'arbre' est masculin.",
        feedbackIncorrect: "Non, c'est 'Le arbre'."
    },
    {
        question: "Quel mot est un synonyme de 'content' ?",
        options: ["Triste", "Heureux", "Malheureux", "Fatigué"],
        correctAnswer: "Heureux",
        feedbackCorrect: "Bravo ! 'Heureux' est synonyme de 'content'.",
        feedbackIncorrect: "Non, la bonne réponse est 'heureux'."
    },

    // Medium Level
    {
        question: "Quelle est la conjugaison correcte du verbe 'faire' à la première personne du singulier au passé composé ?",
        options: ["J'ai fais", "J'ai fait", "Je faisais", "Je ferai"],
        correctAnswer: "J'ai fait",
        feedbackCorrect: "Exact ! La conjugaison correcte est 'J'ai fait'.",
        feedbackIncorrect: "Pas tout à fait. La bonne réponse est 'J'ai fait'."
    },
    {
        question: "Dans quel ordre sont placés les adjectifs dans cette phrase : 'Une ____ maison ____.' ?",
        options: ["grande, rouge", "rouge, grande", "maison grande, rouge", "grande, maison rouge"],
        correctAnswer: "grande, rouge",
        feedbackCorrect: "Correct ! 'Une grande maison rouge' est l'ordre correct.",
        feedbackIncorrect: "Non, c'est 'grande, rouge'."
    },
    {
        question: "Quel est le participe passé du verbe 'venir' ?",
        options: ["Venu", "Venait", "Viens", "Venant"],
        correctAnswer: "Venu",
        feedbackCorrect: "Bravo ! Le participe passé de 'venir' est 'venu'.",
        feedbackIncorrect: "Non, la bonne réponse est 'venu'."
    },
    {
        question: "Que signifie l'expression 'avoir le cafard' ?",
        options: ["Être joyeux", "Être triste", "Avoir peur", "Être en colère"],
        correctAnswer: "Être triste",
        feedbackCorrect: "Bien joué ! 'Avoir le cafard' signifie être triste.",
        feedbackIncorrect: "Non, cela signifie 'être triste'."
    },
    {
        question: "Quel est l'antonyme de 'facile' ?",
        options: ["Difficile", "Léger", "Aisé", "Petit"],
        correctAnswer: "Difficile",
        feedbackCorrect: "Exact ! L'antonyme de 'facile' est 'difficile'.",
        feedbackIncorrect: "Non, la bonne réponse est 'difficile'."
    },
    {
        question: "Quelle est la fonction de 'manger' dans cette phrase : 'J'aime manger des fruits.' ?",
        options: ["Sujet", "Complément", "Verbe à l'infinitif", "Adjectif"],
        correctAnswer: "Verbe à l'infinitif",
        feedbackCorrect: "Bien joué ! 'manger' est un verbe à l'infinitif.",
        feedbackIncorrect: "Non, 'manger' est un verbe à l'infinitif."
    },

    // Hard Level
    {
        question: "Lequel de ces mots est un homophone de 'ver' ?",
        options: ["Vert", "Vair", "Verre", "Tous les trois"],
        correctAnswer: "Tous les trois",
        feedbackCorrect: "Bravo ! 'Ver', 'vert', 'vair' et 'verre' sont des homophones.",
        feedbackIncorrect: "Non, la bonne réponse est 'Tous les trois'."
    },
    {
        question: "Quel est le subjonctif présent de 'être' à la première personne du singulier ?",
        options: ["Suis", "Soit", "Suisse", "Sois"],
        correctAnswer: "Sois",
        feedbackCorrect: "Exact ! La bonne réponse est 'sois'.",
        feedbackIncorrect: "Non, c'est 'sois'."
    },
    {
        question: "Quelle est la forme correcte du pronom relatif : 'C'est la ville ____ j'ai grandi.' ?",
        options: ["où", "dont", "qui", "que"],
        correctAnswer: "où",
        feedbackCorrect: "Correct ! On utilise 'où' pour les lieux.",
        feedbackIncorrect: "Non, la bonne réponse est 'où'."
    },
    {
        question: "Comment s'appelle le mode verbal qui exprime une action incertaine ou souhaitée ?",
        options: ["L'indicatif", "Le subjonctif", "L'impératif", "Le conditionnel"],
        correctAnswer: "Le subjonctif",
        feedbackCorrect: "Bien joué ! Le subjonctif exprime une action incertaine.",
        feedbackIncorrect: "Non, c'est le subjonctif."
    },
    {
        question: "Quel est le synonyme de 'nébuleux' ?",
        options: ["Clair", "Troublé", "Limpide", "Brillant"],
        correctAnswer: "Troublé",
        feedbackCorrect: "Bravo ! 'Nébuleux' signifie 'troublé'.",
        feedbackIncorrect: "Non, la bonne réponse est 'troublé'."
    },
    {
        question: "Quel mot doit-on utiliser dans la phrase : 'Je crains ____ il pleuve demain.' ?",
        options: ["si", "que", "quand", "comme"],
        correctAnswer: "que",
        feedbackCorrect: "Exact ! On dit 'Je crains qu'il pleuve'.",
        feedbackIncorrect: "Non, c'est 'que'."
    },
    {
        question: "Quel est le participe présent du verbe 'avoir' ?",
        options: ["Ayant", "Eus", "Avoir", "Eu"],
        correctAnswer: "Ayant",
        feedbackCorrect: "Correct ! Le participe présent est 'ayant'.",
        feedbackIncorrect: "Non, c'est 'ayant'."
    },
    {
        question: "Que signifie 'désuet' ?",
        options: ["Moderne", "Démodé", "Rapide", "Éphémère"],
        correctAnswer: "Démodé",
        feedbackCorrect: "Bien joué ! 'Désuet' signifie 'démodé'.",
        feedbackIncorrect: "Non, la bonne réponse est 'démodé'."
    }
];


// State variables
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let timer;
let timeRemaining = 20;
let totalAnswerTime = 0;
let timeTakenForQuestion = 0;
let answeredQuestions = 0;

// Load the current question
function loadQuestion() {
    const questionContainer = document.querySelector(".question-box p");
    const buttonsContainer = document.querySelector(".buttons");
    const counterElement = document.getElementById("counter");
    const feedbackElement = document.getElementById("feedback");

    // Hide feedback and reset button styles
    feedbackElement.classList.add("hide");
    buttonsContainer.style.display = "flex";

    // Set question text
    const questionData = questions[currentQuestionIndex];
    questionContainer.textContent = questionData.question;

    // Clear previous answer buttons
    buttonsContainer.innerHTML = "";

    // Generate answer buttons
    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-option");
        button.addEventListener("click", () => handleAnswerSelection(option, button));
        buttonsContainer.appendChild(button);
    });

    // Enable all buttons
    buttonsContainer.querySelectorAll("button").forEach(button => button.disabled = false);

    // Update question counter
    counterElement.textContent = currentQuestionIndex + 1;

    // Reset and start the timer
    timeRemaining = 20;
    startTimer();
}

// Handle answer selection
function handleAnswerSelection(selectedAnswer, selectedButton) {
    if (timer) {
        clearInterval(timer); // Stop the countdown
        timer = null; // Prevent further timer execution
    }

    const questionData = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById("feedback");
    const buttons = document.querySelectorAll(".answer-option");

    // Update total time taken and increment the count of answered questions
    totalAnswerTime += timeTakenForQuestion;
    answeredQuestions++;

    // Disable all buttons
    buttons.forEach(button => button.disabled = true);

    // Check if the selected answer is correct
    if (selectedAnswer === questionData.correctAnswer) {
        feedbackElement.textContent = questionData.feedbackCorrect;
        feedbackElement.style.color = "green";
        selectedButton.classList.add("correct-answer");
        correctAnswersCount++;
    } else {
        feedbackElement.textContent = questionData.feedbackIncorrect;
        feedbackElement.style.color = "red";
        selectedButton.classList.add("incorrect-answer");
    }

    // Highlight the correct answer
    buttons.forEach(button => {
        if (button.textContent === questionData.correctAnswer) {
            button.classList.add("correct-answer");
        }
    });

    // Show feedback and automatically proceed to the next question after a delay
    feedbackElement.classList.remove("hide");
    setTimeout(loadNextQuestion, 3000);
}

// Start the countdown timer
function startTimer() {
    const timeDisplay = document.getElementById("time");
    timeTakenForQuestion = 0;

    timer = setInterval(() => {
        timeDisplay.textContent = `00:${timeRemaining < 10 ? '0' : ''}${timeRemaining}`;
        timeRemaining--;
        timeTakenForQuestion++;

        if (timeRemaining < 0) {
            clearInterval(timer);
            timer = null;
            lockAnswers();
        }
    }, 1000);
}

// Lock answers if time runs out
function lockAnswers() {
    const questionData = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById("feedback");
    const buttons = document.querySelectorAll(".answer-option");

    feedbackElement.textContent = `Le temps est écoulé ! La bonne réponse est ${questionData.correctAnswer}.`;
    feedbackElement.classList.remove("hide");

    // Highlight the correct answer
    buttons.forEach(button => {
        if (button.textContent === questionData.correctAnswer) {
            button.classList.add("correct-answer");
        } else {
            button.classList.add("incorrect-answer");
        }
        button.disabled = true; // Disable all buttons
    });

    // Automatically proceed to the next question after a delay
    setTimeout(loadNextQuestion, 3000);
}

// Load the next question or end the quiz
function loadNextQuestion() {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.classList.add("hide"); // Hide feedback before loading next question

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// End quiz and show results page
function endQuiz() {
    const resultsPage = document.getElementById("results-page");
    const questionsPage = document.getElementById("questions-page");
    const congratulationsMessage = document.getElementById("congratulations-message");
    const levelMessage = document.getElementById("level-message");
    const congratulationsText = document.getElementById("congratulations-text");

    // Hide questions page and show results page
    questionsPage.style.display = "none";
    resultsPage.style.display = "flex";

    // Calculate score and determine level
    const totalQuestions = questions.length;
    const score = correctAnswersCount;
    let level = '';
    let message = '';

    if (score <= 2) {
        level = 'Niveau A1';
        message = "Ne vous découragez pas ! Continuez à pratiquer.";
    } else if (score <= 4) {
        level = 'Niveau A2';
        message = "Bon travail ! Vous avez des bases solides.";
    } else if (score <= 6) {
        level = 'Niveau B1';
        message = "Bien joué ! Vous êtes en bonne voie.";
    } else if (score <= 8) {
        level = 'Niveau B2';
        message = "Très bien ! Bonne compréhension.";
    } else if (score <= 9) {
        level = 'Niveau C1';
        message = "Excellent ! Vous êtes presque un expert.";
    } else {
        level = 'Niveau C2';
        message = "Parfait ! Maîtrise complète du sujet.";
    }

    // Update results page content
    congratulationsMessage.textContent = "Félicitations !";
    levelMessage.textContent = `Votre score est de ${score} sur ${totalQuestions} - ${level}`;
    congratulationsText.textContent = message;

    // Add event listeners for the buttons when the results page is shown
    const restartButton = document.getElementById("restart-button");
    const downloadResultsButton = document.getElementById("download-results-button");

    restartButton.addEventListener("click", restartQuiz);
    downloadResultsButton.addEventListener("click", generatePDF);
}

// testing
function restartQuiz() {
    // Reset state variables
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    totalAnswerTime = 0;
    answeredQuestions = 0;

    // Hide results page and show start container
    document.getElementById("results-page").style.display = "none";
    document.getElementById("start-container").style.display = "flex";

    // Reset UI elements (if needed)
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.classList.add("hide");

    // Clear any existing timers
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // Optionally reset timer UI
    document.getElementById("time").textContent = "00:20";

    // Reset the question page view
    document.getElementById("questions-page").style.display = "none";

    // Reset any UI elements as necessary for a fresh quiz start
}

// Add the event listener to restart the quiz when clicking the restart button
document.getElementById("restart-button").addEventListener("click", restartQuiz);

// 2nd test

function generateAndDownloadPDF() {
    // Import jsPDF from the global window object (works with jsPDF 2.4.0+)
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title and Basic Info
    doc.setFontSize(16);
    doc.text("Quiz Results", 20, 20);
    doc.setFontSize(12);
    doc.text(`Score: ${correctAnswersCount} out of ${questions.length}`, 20, 30);
    doc.text(`Total Time Taken: ${totalAnswerTime} seconds`, 20, 40);
    doc.text(`Average Time Per Question: ${(totalAnswerTime / answeredQuestions).toFixed(2)} seconds`, 20, 50);
    doc.line(20, 55, 190, 55); // Add a horizontal line to separate content

    // Iterate over each question to show details
    let yOffset = 70; // Initial y-axis offset for text placement
    questions.forEach((question, index) => {
        if (yOffset > 270) { // Check for page overflow, and add a new page if needed
            doc.addPage();
            yOffset = 20; // Reset yOffset for new page
        }

        // Question details
        doc.setFontSize(12);
        doc.text(`Question ${index + 1}: ${question.question}`, 20, yOffset);
        yOffset += 10;

        // User's answer
        const userAnswer = userAnswers && userAnswers[index] ? userAnswers[index] : "No answer selected";
        doc.text(`Your Answer: ${userAnswer}`, 20, yOffset);
        yOffset += 10;

        // Correct answer if the user was wrong
        if (userAnswer !== question.correctAnswer) {
            doc.text(`Correct Answer: ${question.correctAnswer}`, 20, yOffset);
            yOffset += 10;
        }

        // Space between questions
        yOffset += 10;
    });

    // Save the PDF
    doc.save("quiz-results.pdf");
}

// Add event listener to the "My Results" button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("download-results-button").addEventListener("click", generateAndDownloadPDF);
});


// testing 
// Save a result to localStorage
function saveQuizResult(correctAnswers) {
    // Determine the user's level based on the number of correct answers
    let level = '';
    if (correctAnswers <= 2) {
        level = 'A1';
    } else if (correctAnswers <= 4) {
        level = 'A2';
    } else if (correctAnswers <= 6) {
        level = 'B1';
    } else if (correctAnswers <= 8) {
        level = 'B2';
    } else if (correctAnswers <= 9) {
        level = 'C1';
    } else {
        level = 'C2';
    }

    // Retrieve existing results from localStorage or initialize an empty array
    let resultsHistory = JSON.parse(localStorage.getItem('quizResults')) || [];

    // Add the new result at the start of the array
    resultsHistory.unshift({ correctAnswers, level });

    // Keep only the latest 3 results
    if (resultsHistory.length > 3) {
        resultsHistory = resultsHistory.slice(0, 3);
    }

    // Save the updated results array back to localStorage
    localStorage.setItem('quizResults', JSON.stringify(resultsHistory));
}

// Function to show the latest results
function showLatestResults() {
    // Retrieve results from localStorage
    const resultsHistory = JSON.parse(localStorage.getItem('quizResults')) || [];

    // Create a container for displaying results
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "results-overlay";
    resultsContainer.style.position = "fixed";
    resultsContainer.style.top = "50%";
    resultsContainer.style.left = "50%";
    resultsContainer.style.transform = "translate(-50%, -50%)";
    resultsContainer.style.width = "80%";
    resultsContainer.style.maxWidth = "400px";
    resultsContainer.style.backgroundColor = "#fff";
    resultsContainer.style.padding = "20px";
    resultsContainer.style.border = "1px solid #ccc";
    resultsContainer.style.borderRadius = "8px";
    resultsContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    resultsContainer.style.zIndex = "1000";

    // Generate the results content
    let content = '<h2>Derniers Résultats</h2>';
    if (resultsHistory.length === 0) {
        content += '<p>Aucun résultat disponible.</p>';
    } else {
        resultsHistory.forEach((result, index) => {
            content += `<p><strong>Résultat ${index + 1} :</strong> ${result.correctAnswers} bonnes réponses - Niveau ${result.level}</p>`;
        });
    }
    content += '<button id="close-results-button">Fermer</button>';

    resultsContainer.innerHTML = content;
    document.body.appendChild(resultsContainer);

    // Add event listener to close the results window
    document.getElementById("close-results-button").addEventListener("click", () => {
        document.body.removeChild(resultsContainer);
    });
}

// Add event listener to the new button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("show-results-button").addEventListener("click", showLatestResults);
});

// save
// Function to save the latest quiz result
function saveQuizResult(correctAnswersCount) {
    let level = '';
    if (correctAnswersCount <= 2) {
        level = 'A1';
    } else if (correctAnswersCount <= 4) {
        level = 'A2';
    } else if (correctAnswersCount <= 6) {
        level = 'B1';
    } else if (correctAnswersCount <= 8) {
        level = 'B2';
    } else if (correctAnswersCount <= 9) {
        level = 'C1';
    } else {
        level = 'C2';
    }

    // Get previous results or initialize an empty array
    let resultsHistory = JSON.parse(localStorage.getItem('quizResults')) || [];

    // Add new result at the beginning of the array
    resultsHistory.unshift({ correctAnswers: correctAnswersCount, level: level });

    // Keep only the latest 3 results
    resultsHistory = resultsHistory.slice(0, 3);

    // Save updated results back to localStorage
    localStorage.setItem('quizResults', JSON.stringify(resultsHistory));
}

// Function to display the latest quiz results
function showLatestResults() {
    const resultsHistory = JSON.parse(localStorage.getItem('quizResults')) || [];

    // Create the modal container
    const resultsOverlay = document.createElement("div");
    resultsOverlay.id = "results-overlay";
    resultsOverlay.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 80%; max-width: 400px; background: white; padding: 20px;
        border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); z-index: 1000;
    `;

    // Modal content
    let content = '<h2>Derniers Résultats</h2>';
    if (resultsHistory.length === 0) {
        content += '<p>Aucun résultat disponible.</p>';
    } else {
        resultsHistory.forEach((result, index) => {
            content += `<p><strong>Résultat ${index + 1}:</strong> ${result.correctAnswers} bonnes réponses - Niveau ${result.level}</p>`;
        });
    }

    // Close button for the modal
    content += '<button id="close-results-button" style="margin-top: 10px;">Fermer</button>';
    resultsOverlay.innerHTML = content;
    document.body.appendChild(resultsOverlay);

    // Close modal on button click
    document.getElementById("close-results-button").addEventListener("click", () => {
        document.body.removeChild(resultsOverlay);
    });
}

// Attach event listener to the "Voir les Derniers Résultats" button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("show-results-button").addEventListener("click", showLatestResults);
});
