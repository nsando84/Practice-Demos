import { TimeAndScore } from './TimeAndScore.js'

interface QuestionFormat {
    q: string;
    choices: [];
    answer: string;
}

export class Question {
    private question: QuestionFormat
    private TimeAndScore: TimeAndScore
  
    constructor(question, TimeAndScore) {
      this.question = question;
      this.TimeAndScore = TimeAndScore;
    }
  
    private randomizer = (randomizer: []):string[] => {
      const newArr = [];
      for (let i = 0; i < 4; i++) {
        const randomNum = Math.floor(Math.random() * randomizer.length)
        newArr.push(randomizer[randomNum])
        randomizer.splice(randomNum,1)
      }
      return newArr
    }
  
    private checkIt(answer):void {
      answer === this.question.answer ? this.TimeAndScore.addToScore(true) : this.TimeAndScore.addToScore(false)
    }

    private onClick = (e: Event):void => {
      const target = e.target as HTMLButtonElement
      this.checkIt(target.dataset.value)
    }
  
    public createQuestion():void {
      const { q, choices } = this.question
      const randomQuestion = this.randomizer(choices);
  
      const questionSec = document.getElementById("question-section") as HTMLDivElement;
      const answerSec = document.getElementById("answer-section") as HTMLDivElement;
  
      questionSec.textContent = q;
      answerSec.append(...randomQuestion.map(q => {
        const button = document.createElement("button") as HTMLButtonElement;
        button.setAttribute("data-value", q)
        button.textContent = q;
        button.addEventListener("click", this.onClick)
        return button
      }))
    }

}