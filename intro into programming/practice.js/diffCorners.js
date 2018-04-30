/*
diff.js
Напишите функцию diff, которая принимает два угла (integer),
каждое от 0 до 360, и возвращает наименьшую разницу между ними.
Примеры:
diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
*/
// BEGIN (write your solution here) (write your solution here)

const diff = (a, b) => {
  let difference = b - a;
  if (difference < 0 && difference > -180) {
    difference *= -1;
  } else if (difference < -180) {
    difference = 360 + difference;
  } else if (difference > 180) {
    difference = 360 - difference;
  }
  return difference;
};
