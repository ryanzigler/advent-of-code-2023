import { config, words } from './input';

let sum = 0;

const getNextIndex = (index: number, item: string, line: string) => {
  const nextIndex = line.indexOf(item, index + 1);
  if (nextIndex > -1) {
    return nextIndex;
  }

  return null;
};

const getNumbers = (line: string) => {
  const result = [];
  const matchedNums = line
    .split('')
    .filter((char) => !Number.isNaN(Number(char)));

  for (const num of matchedNums) {
    let index: number | null = line.indexOf(num);

    result.push({
      num,
      index,
    });

    while (index !== null) {
      index = getNextIndex(index + 1, num, line);
      if (index !== null) {
        result.push({
          num,
          index,
        });
      }
    }
  }

  return result;
};

const getWords = (line: string) => {
  const result = [];

  for (const item of words) {
    const { name, value } = item;
    if (line.includes(name)) {
      let index: number | null = line.indexOf(name);
      result.push({
        num: value,
        index,
      });

      while (index !== null) {
        index = getNextIndex(index + 1, name, line);
        if (index !== null) {
          result.push({
            num: value,
            index,
          });
        }
      }
    }
  }

  return result;
};

for (const line of config) {
  const nums = [...getNumbers(line), ...getWords(line)];
  const sortedNums = nums.sort((a, b) => a.index - b.index);
  const numResult = Number(
    `${sortedNums[0].num}${sortedNums[sortedNums.length - 1].num}`,
  );

  sum += numResult;
}

console.log(sum);
