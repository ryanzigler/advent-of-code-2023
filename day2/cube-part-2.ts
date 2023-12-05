import { games } from './input';

let sum = 0;

const getHighestNumber = (arr: RegExpMatchArray) =>
  Math.max(...arr.map((match) => Number(match.split(' ')[0])));

for (const game of games) {
  let highestRed = 0;
  let highestBlue = 0;
  let highestGreen = 0;

  const greenMatches = game.match(/(\d{1,2}) green/g);
  const blueMatches = game.match(/(\d{1,2}) blue/g);
  const redMatches = game.match(/(\d{1,2}) red/g);

  if (greenMatches) {
    highestGreen = getHighestNumber(greenMatches);
  }

  if (blueMatches) {
    highestBlue = getHighestNumber(blueMatches);
  }

  if (redMatches) {
    highestRed = getHighestNumber(redMatches);
  }

  sum += highestBlue * highestGreen * highestRed;
}

console.log(sum);
