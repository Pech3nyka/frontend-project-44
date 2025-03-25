import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (gameDescription, generateQuestionAndAnswer) => {
  greetUser();
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log(gameDescription);

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
