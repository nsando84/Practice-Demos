export class Question {
    constructor(question) {
        this.randomizer = (randomizer) => {
            const newArr = [];
            for (let i = 0; i < 4; i++) {
                const randomNum = Math.floor(Math.random() * randomizer.length);
                newArr.push(randomizer[randomNum]);
                randomizer.splice(randomNum, 1);
            }
            return newArr;
        };
        this.question = question;
    }
    checkIt(answer) {
        console.log(answer === this.question.answer);
    }
    onClick(e) {
        console.log(e.target);
    }
    createQuestion() {
        const question = this.question.q;
        const randomQuestion = this.randomizer(this.question.choices);
        const questionSec = document.getElementById("question-section");
        const answerSec = document.getElementById("answer-section");
        questionSec.textContent = question;
        answerSec.append(...randomQuestion.map(q => {
            const button = document.createElement("button");
            button.textContent = q;
            button.addEventListener("click", this.onClick);
            return button;
        }));
    }
}
