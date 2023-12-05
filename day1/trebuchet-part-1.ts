import { config } from './input';

(() => {
  let sum = 0;

  const getNumbers = (line: string): number => {
    const chars = line.split('');
    const result = chars.filter((char) => !Number.isNaN(Number(char)));
    return Number(`${result[0]}${result[result.length - 1]}`);
  };

  for (const line of config) {
    sum += getNumbers(line);
  }

  return sum;
})();
