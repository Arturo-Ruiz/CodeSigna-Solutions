function solution(inputArray) {
  let largestProduct = null;

  for (let index = 0; index < inputArray.length - 1; index++) {
    value = inputArray[index];
    nextValue = inputArray[index + 1];
    result = value * nextValue;

    if (largestProduct === null || result > largestProduct) {
      largestProduct = result;
    }
  }

  return largestProduct;
}
