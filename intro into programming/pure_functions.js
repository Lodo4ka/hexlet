// solution.js
// Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

// solution('hello, world!'); // Hello, World!
// Подсказки
// Вычисление длины строки: length(str).
// Перевод строки/буквы в верхний регистр: toUpperCase(str).

import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
export default str => {
    let result = '';
    for (let i = 0; i < length(str); i++) {
        const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
        result += shouldBeBig ? toUpperCase(str[i]) : str[i];
    }

    return result;
};
//end