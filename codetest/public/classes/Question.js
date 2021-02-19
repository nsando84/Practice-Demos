export class Question {
    constructor(question, TimeAndScore) {
        this.randomizer = (randomizer) => {
            const newArr = [];
            for (let i = 0; i < 4; i++) {
                const randomNum = Math.floor(Math.random() * randomizer.length);
                newArr.push(randomizer[randomNum]);
                randomizer.splice(randomNum, 1);
            }
            return newArr;
        };
        this.onClick = (e) => {
            const target = e.target;
            this.checkIt(target.dataset.value);
        };
        this.question = question;
        this.TimeAndScore = TimeAndScore;
    }
    checkIt(answer) {
        answer === this.question.answer ? this.TimeAndScore.addToScore(true) : this.TimeAndScore.addToScore(false);
    }
    createQuestion() {
        const { q, choices } = this.question;
        const randomQuestion = this.randomizer(choices);
        const questionSec = document.getElementById("question-section");
        const answerSec = document.getElementById("answer-section");
        questionSec.textContent = q;
        answerSec.append(...randomQuestion.map(q => {
            const button = document.createElement("button");
            button.setAttribute("data-value", q);
            button.textContent = q;
            button.addEventListener("click", this.onClick);
            return button;
        }));
    }
}
