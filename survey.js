const questions = [
    "1. What is your favorite subject in school?",
    "2. How do you prefer to work?",
    "3. What type of projects interest you?",
    "4. Do you enjoy working with people?",
    "5. Do you like solving technical problems?",
    "6. Do you enjoy creative work, such as art or design?",
    "7. Do you prefer working in a structured or flexible environment?",
    "8. Are you interested in starting your own business?",
    "9. Do you like helping others in need?",
    "10. What kind of challenges do you enjoy?",
    "11. Do you prefer working in a lab or a studio?",
    "12. How important is salary to you?",
    "13. How important is work-life balance to you?",
    "14. Do you like working with numbers and data?",
    "15. Do you prefer working with your hands?",
    "16. How do you handle stress and pressure?",
    "17. Do you enjoy leading projects?",
    "18. Are you interested in social issues?",
    "19. Do you prefer working in teams or independently?",
    "20. How important is creativity in your work?"
];

const options = [
    ['A) Mathematics', 'B) Biology', 'C) Art', 'D) History', 'E) Literature'],
    ['A) Independently', 'B) In Teams', 'C) With Creative Freedom', 'D) With Clear Guidelines', 'E) Outdoors'],
    ['A) Technical Projects', 'B) Helping Others', 'C) Creative Projects', 'D) Leading Teams', 'E) Hands-On Projects'],
    ['A) Yes', 'B) Sometimes', 'C) No', 'D) Only in Small Groups', 'E) Prefer Not To'],
    ['A) Yes', 'B) No', 'C) Occasionally', 'D) Only with a Team', 'E) Prefer Creative Problem Solving'],
    ['A) Yes', 'B) Sometimes', 'C) No', 'D) I Prefer Business Tasks', 'E) Only in Small Amounts'],
    ['A) Structured', 'B) Flexible', 'C) Depends on the Task', 'D) Mostly Structured', 'E) Very Flexible'],
    ['A) Yes', 'B) No', 'C) Maybe in the Future', 'D) Only with Partners', 'E) Not Interested'],
    ['A) Yes', 'B) Occasionally', 'C) No', 'D) I Prefer Working Independently', 'E) Only in Groups'],
    ['A) Technical Challenges', 'B) Creative Challenges', 'C) Leading Teams', 'D) Helping Others', 'E) Physical Challenges'],
    ['A) Lab', 'B) Studio', 'C) Office', 'D) Field', 'E) Factory'],
    ['A) Very Important', 'B) Somewhat Important', 'C) Not Very Important', 'D) Only to a Point', 'E) Unimportant'],
    ['A) Very Important', 'B) Somewhat Important', 'C) Not Important', 'D) I Prioritize Work', 'E) Balance is Crucial'],
    ['A) Yes', 'B) No', 'C) Sometimes', 'D) Only with Assistance', 'E) Rarely'],
    ['A) Yes', 'B) Sometimes', 'C) Only with Specific Tools', 'D) No', 'E) I Prefer Thinking Tasks'],
    ['A) I Thrive Under Pressure', 'B) I Handle it Well', 'C) I Struggle', 'D) I Avoid Stressful Situations', 'E) I Work Best in a Relaxed Environment'],
    ['A) Yes', 'B) Sometimes', 'C) Only if Necessary', 'D) No', 'E) I Prefer Contributing'],
    ['A) Yes', 'B) No', 'C) Occasionally', 'D) Only in Specific Fields', 'E) Sometimes'],
    ['A) Teams', 'B) Independently', 'C) Depends on the Task', 'D) Teams with Leadership', 'E) I Prefer Independent Work'],
    ['A) Very Important', 'B) Somewhat Important', 'C) Occasionally Important', 'D) Unimportant', 'E) Crucial to My Work']
];

const careerScores = {
    'STEM': 0,
    'Healthcare and Medicine': 0,
    'Creative Arts and Design': 0,
    'Law and Government': 0,
    'Business and Entrepreneurship': 0,
    'Social Work and Education': 0,
    'Marketing and Communication': 0,
    'Trades and Engineering': 0
};

let currentQuestionIndex = 0;

document.getElementById('startTest').addEventListener('click', () => {
    document.getElementById('startTest').classList.add('hidden');
    document.getElementById('questionContainer').classList.remove('hidden');
    showQuestion(currentQuestionIndex);
});

document.getElementById('nextButton').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        updateScores(selectedOption.value, currentQuestionIndex + 1);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            document.getElementById('questionContainer').classList.add('hidden');
            document.getElementById('resultContainer').classList.remove('hidden');
            suggestCareer();
        }
    } else {
        alert('Please select an option before proceeding.');
    }
});

function showQuestion(index) {
    const questionText = document.getElementById('questionText');
    const answerOptions = document.getElementById('answerOptions');
    
    questionText.innerHTML = questions[index];
    answerOptions.innerHTML = '';

    options[index].forEach((option, i) => {
        answerOptions.innerHTML += `
            <label class="answer-option">
                <input type="radio" name="option" value="${String.fromCharCode(65 + i)}"> ${option}
            </label>
        `;
    });
}

function updateScores(answer, questionNum) {
    // ... Use the update_scores logic from your Python code
}

function suggestCareer() {
    const suggestedCareer = Object.keys(careerScores).reduce((a, b) => careerScores[a] > careerScores[b] ? a : b);
    document.getElementById('suggestedCareer').innerHTML = `Suggested Career Path: ${suggestedCareer}`;
}
