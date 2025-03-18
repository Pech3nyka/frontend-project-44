import { greetUser, askQuestion } from './cli.js';

const runGame = (gameDescription, generateQuestionAndAnswer) => {
  const name = greetUser();
  console.log(gameDescription);

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = askQuestion(`Question: ${question}`);

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