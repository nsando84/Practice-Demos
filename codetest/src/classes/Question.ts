
interface QuestionFormat {
    q: string,
    choices: [],
    answer: string
}


export class Question {
    private question: QuestionFormat
  
    constructor(question) {
      this.question = question;
  
    }
  
    private randomizer = (randomizer: []) => {
      const newArr = [];
      for (let i = 0; i < 4; i++) {
        const randomNum = Math.floor(Math.random() * randomizer.length)
        newArr.push(randomizer[randomNum])
        randomizer.splice(randomNum,1)
      }
      return newArr
    }
  
    private checkIt(answer) {
      console.log(answer === this.question.answer)
    }

    private onClick(e: Event) {
      console.log(e.target)
    }
  
    public createQuestion() {
      const question = this.question.q;
      const randomQuestion = this.randomizer(this.question.choices);
  
      const questionSec = document.getElementById("question-section") as HTMLDivElement;
      const answerSec = document.getElementById("answer-section") as HTMLDivElement;
  
      questionSec.textContent = question;
      answerSec.append(...randomQuestion.map(q => {
        const button = document.createElement("button") as HTMLButtonElement;
        button.textContent = q;
        button.addEventListener("click", this.onClick)
        return button
      }))
  
    }

}