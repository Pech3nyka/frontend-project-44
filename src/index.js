import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (gameDescription, generateQuestionAndAnswer) => {
  greetUser();
  
  console.log(gameDescription);

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log('Let\'s try again!');
      return;
    }
    console.log('Correct!');
  }

  console.log('Congratulations!');
};

export default runGame;
