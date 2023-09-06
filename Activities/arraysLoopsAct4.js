const sixRandomNumbers = (0, 50, 6);

const numbers = [];

for (let i = 0; i < 6; i++) {
  numbers.push(Math.round(Math.random() * 50));
}
console.log(numbers);
