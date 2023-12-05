"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./input");
let sum = 0;
const getNextIndex = (index, item, line) => {
    const nextIndex = line.indexOf(item, index + 1);
    if (nextIndex > -1) {
        return nextIndex;
    }
    return null;
};
const getNumbers = (line) => {
    const result = [];
    const matchedNums = line
        .split('')
        .filter((char) => !Number.isNaN(Number(char)));
    for (const num of matchedNums) {
        let index = line.indexOf(num);
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
const getWords = (line) => {
    const result = [];
    for (const item of input_1.words) {
        const { name, value } = item;
        if (line.includes(name)) {
            let index = line.indexOf(name);
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
for (const line of input_1.config) {
    const nums = [...getNumbers(line), ...getWords(line)];
    const sortedNums = nums.sort((a, b) => a.index - b.index);
    const numResult = Number(`${sortedNums[0].num}${sortedNums[sortedNums.length - 1].num}`);
    sum += numResult;
}
console.log(sum);
