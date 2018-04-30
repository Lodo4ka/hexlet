// isPrime.js
// Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.

// Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.

// Используйте цикл for и арифметические шорткаты.

// isPrime(1);     // false
// isPrime(7);     // true
// isPrime(10);    // false
// (Число 1 не считаем простым).

// BEGIN (write your solution here)
const isPrime = num => {
    if (num === 1 || num <= 0) {
        return false;
    }
    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
};
// END

export default isPrime;