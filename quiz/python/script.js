const quizData = [
    {
        question: "[Python] How Do You Make Console Say 'Hello World'",
        a: "print(Hello World)",
        b: "print('Hello World')",
        c: "say'Hello World'",
        d: "console.say='Hello World'",
        correct: "b",
    },
    {
        question: "[Python] How To Add CSS Inside Your Page Without Making A New File For CSS ",
        a: "With '<styles></styles>' Tags",
        b: "Add 'Style' Tag Within Your <Html> Tags",
        c: "Add style=' ' Within Every Element",
        d: "Renaming Your File Name From index.html to 'index.html&style.css'",
        correct: "c",
    },
    {
        question: "[Python]How Do You Create A Varaible?",
        a: "var joe ='Hello World'" ,
        b: "varaible joe ='Hello World'",
        c: "create.var.name ='Hello World'",
        d: "Use The Var Option, And Do /var = 'Hello World'",
        correct: "a",
    },
    {
        question: "[Python]How Do You Do Math In Python",
        a: "Use The Correct Varaible Signatures to mark our the math.",
        b: "Use /math.adding command",
        c: "Use The (*,/,+,-) Signs.",
        d: "none of the above",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button style="background-color:red" onclick="location.reload()">Retry</button>
           <a href="../index.html"><button >Finish</button></a>  `
       }
    }
})