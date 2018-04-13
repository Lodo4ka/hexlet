export default (str, index = 0, substrLength = getLength(str)) => {
  const length = getLength(str);

  if (index >= length) {
    return '';
  }

  const currentIndex = index < 0 ? 0 : index;
  let lastIndex = currentIndex + (substrLength - 1);
  if (lastIndex + 1 < currentIndex) {
    lastIndex = currentIndex;
  } else if (lastIndex > length - 1) {
    lastIndex = length - currentIndex - 1;
  }

  let result = '';
  for (let i = currentIndex; i <= lastIndex; i += 1) {
    result = `${result}${str[i]}`;
  }

  return result;
};
