import { games } from './input';

let sum = 0;

for (const [index, game] of games.entries()) {
  if (
    !/[1-9][4-9] green/.test(game) &&
    !/[1-9][5-9] blue/.test(game) &&
    !/[1-9][3-9] red/.test(game)
  ) {
    sum += index + 1;
  }
}

console.log(sum);
