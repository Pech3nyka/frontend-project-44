import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAndAnswer);