let word = "Alligator";
let letterFirst = word.charAt(0);
let letterLast = word.charCodeAt(-1);

if (letterFirst == letterLast) {
  console.log("True");
} else {
  console.log("False");
}
