import { Question } from './classes/Question.js';
import { TimeAndScore } from './classes/TimeAndScore.js';
import { questions } from './data/questions.js';
const TimeScoreKeeper = new TimeAndScore(0, 30);
let questionNumber = 0;
let question;
const runGame = () => {
    if (questionNumber < questions.length) {
        question = new Question(questions[questionNumber], TimeScoreKeeper, runGame);
        question.createQuestion();
        questionNumber++;
    }
};
runGame();
