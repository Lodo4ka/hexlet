// addDigits.js
// Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

// Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

// Для числа 38 процесс будет выглядеть так:

// 3 + 8 = 11
// 1 + 1 = 2
// Результат: 2

// Пример:

// addDigits(10); // 1
// addDigits(19); // 1
// addDigits(38); // 2
// addDigits(1259); // 8
// Подсказка
// Выделите процесс суммирования цифр в числе в отдельную функцию

import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)

const sum = str => {
    let result = 0;
    for (let i = 0; i < length(str); i++) {
        result += Number(str[i]);
    }

    return result;
};

const addDigits = num => {
    let result = num;
    while (result >= 10) {
        result = sum(String(result));
    }
    return result;
};
// END

export default addDigits;