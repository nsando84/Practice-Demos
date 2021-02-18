import { Question } from './classes/Question.js';
import { questions } from './data/questions.js';
const startGame = () => {
    const question = new Question(questions[0]);
    question.createQuestion();
    //   question.onClick();
    //   questions.shift()
};
startGame();
