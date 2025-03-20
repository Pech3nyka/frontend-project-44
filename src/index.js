import readlineSync from 'readline-sync';

const question = (text) => readlineSync.question(`${text}\nYour answer: `);

const runGame = (gameDescription, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const [questionText, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = question(`Question: ${questionText}`);

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
