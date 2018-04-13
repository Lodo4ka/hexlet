export const solution = str => {
  let mystr = '';
  let resault = '';
  let array = [];

  for (let t = 0; t < length(str); t++) {
    if (str[t] === toUpperCase(str[t])) {
      array.push(t);
    } else {
      array.push(null);
    }
  }

  for (let i = 0; i < length(str); i++) {
    if (i === 0) {
      mystr = toUpperCase(str[i]);
    } else if (array[i] !== null && array[i + 1] === null) {
      mystr = str[i] + toUpperCase(str[i + 1]);
      i++;
    } else {
      mystr = str[i];
    }
    resault += mystr;
  }

  return resault;
};
