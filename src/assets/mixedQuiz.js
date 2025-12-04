import { cricketQuiz } from "./cricket";
import { tennisQuiz } from "./tennis";
import { ufcQuiz } from "./ufc";

export const mixedQuiz = shuffle([
  ...cricketQuiz,
  ...tennisQuiz,
  ...ufcQuiz
]).slice(0, 20);

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
