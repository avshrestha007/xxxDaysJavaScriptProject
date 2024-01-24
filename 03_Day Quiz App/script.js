const questions = [
    {
        question: "xyz",
        answer: [
            {text: "xyx", correct: false},
            {text: "xyx", correct: true},
            {text: "xyx", correct: false},
            {text: "xyx", correct: false}, 
        ]
    },
    {
        question: "xyz2",
        answer: [
            {text: "yx", correct: false},
            {text: "xyx", correct: true},
            {text: "xyx", correct: false},
            {text: "xyx", correct: false}, 
        ]
    },
    {
        question: "xyz3",
        answer: [
            {text: "xyx", correct: false},
            {text: "xyx", correct: true},
            {text: "xyx", correct: false},
            {text: "xyx", correct: false}, 
        ]
    },
    {
        question: "xyz4",
        answer: [
            {text: "xyx", correct: false},
            {text: "xyx", correct: true},
            {text: "xyx", correct: false},
            {text: "xyx", correct: false}, 
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-bottons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();