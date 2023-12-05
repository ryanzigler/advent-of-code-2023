"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./input");
(() => {
    let sum = 0;
    const getNumbers = (line) => {
        const chars = line.split('');
        const result = chars.filter((char) => !Number.isNaN(Number(char)));
        return Number(`${result[0]}${result[result.length - 1]}`);
    };
    for (const line of input_1.config) {
        sum += getNumbers(line);
    }
    return sum;
})();
