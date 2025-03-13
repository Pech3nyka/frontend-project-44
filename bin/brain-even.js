import { greetUser, askQuestion } from '../src/cli.js';

const playEvenGame = () => {
  console.log('Starting game...');
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Generated number: ${number}`);
    const userAnswer = askQuestion(`Question: ${number}`);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();