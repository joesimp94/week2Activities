let password = "cccccccccccc";
let length = password.length;

if (length < 8) {
  console.log("Your password is too short.");
} else {
  console.log(password);
}

let num = 15;

if (num % 3 == 0 || num % 5 == 0) {
  console.log("This number is divisible by 3 or 5.");
} else {
  console.log("This number isn't divisible by 3 or 5.");
}
