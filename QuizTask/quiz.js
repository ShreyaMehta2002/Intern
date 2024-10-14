const quizData = [
    {
        question: "What is the full form of HTML?",
        options: ["Hyper Text Max Language", "Hyper Text MarkUp Language", "Hyper Text MakeUp Language"],
        answer: "Hyper Text MarkUp Language"
    },
    {
        question: "What is the full form of CSS?",
        options: ["Cascading Style Sheets", "Correcting Style Sheets", "Coloring Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the latest JavaScript version?",
        options: ["ECMA Script 2015", "ECMA Script 2023", "ECMA Script 2024"],
        answer: "ECMA Script 2023"
    }
];

let currentQuesIdx = 0;
let userAnswers = [];

function loadQuestion(index) {
    const questionData = quizData[index];
    document.getElementById('question-text').innerText = `${index + 1}. ${questionData.question}`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; 

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('form-check');

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = `question${index}`;
        radioInput.value = option;
        radioInput.classList.add('form-check-input');

        if (userAnswers[index] === option) {
            radioInput.checked = true;
        }

        const label = document.createElement('label');
        label.classList.add('form-check-label');
        label.innerText = option;

        optionElement.appendChild(radioInput);
        optionElement.appendChild(label);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById('prev-btn').disabled = index === 0;

    if (index === quizData.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('submitSection').style.display = 'block';
    } else {
        document.getElementById('next-btn').style.display = 'inline-block';
        document.getElementById('submitSection').style.display = 'none';
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuesIdx}"]:checked`);
    if (selectedOption) {
        userAnswers[currentQuesIdx] = selectedOption.value.trim(); // Ensure trimming spaces
    } else {
        userAnswers[currentQuesIdx] = null;
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    saveAnswer();
    if (currentQuesIdx < quizData.length - 1) {
        currentQuesIdx++;
        loadQuestion(currentQuesIdx);
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    saveAnswer();
    if (currentQuesIdx > 0) {
        currentQuesIdx--;
        loadQuestion(currentQuesIdx);
    }
});

document.getElementById('submitBtn').addEventListener('click', () => {
    saveAnswer();
    let score = 0;

    // Calculate Score
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer.trim(); 
        console.log(`Question: ${question.question}`);
        console.log(`User Answer: ${userAnswer}, Correct Answer: ${correctAnswer}`);

        if (userAnswer === correctAnswer) {
            score++;
        }
    });

    document.getElementById('results').innerHTML = `<h3>You scored ${score} out of ${quizData.length}</h3>`;

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('submitSection').style.display = 'none';
});

window.onload = function() {
    loadQuestion(currentQuesIdx);
};
    