let sentence =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = ("a", "e", "i", "o", "u");

console.log(
  `The index of the last "${vowels}" from the end is ${sentence.lastIndexOf(
    vowels
  )}`
);
