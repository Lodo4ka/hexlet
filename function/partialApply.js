// partialApply.js
// Реализуйте и экспортируйте по умолчанию функцию partialApply. Эта функция
// умеет частично применять один аргумент у переданной функции:
//
// const pow = (a, b) => a ** b;
// const f1 = partialApply(pow, 2);
// f1(1); // => 2
// f1(10); // => 1024
//
// const f2 = partialApply((a, b) => a * b, 5);
// f2(2); // => 10
// f2(5); // => 25

// BEGIN (write your solution here)
export default (f, arg) => b => f(arg, b);
// END