// solution.js
// Реализуйте функцию reverse, которая переворачивает строку. Например:

// reverse('hello, world!'); // !dlrow ,olleh
// Подсказки
// Длина строки str находится так: str.length
// Не забудьте: индексы начинаются с 0, но длина — это реальная длина. Так что индекс последнего символа не совпадает с длиной строки.

// BEGIN (write your solution here)
const reverse = str => {
    let newString = '';
    for (let index = str.length - 1; index >= 0; index--) {
        newString += str[index];
    }
    return newString;
};
// END

export default reverse;