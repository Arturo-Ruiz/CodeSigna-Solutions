function solution(inputString) {
  let string = inputString;
  let reverseString = string.split("").reverse().join("");

  return string === reverseString;
}
