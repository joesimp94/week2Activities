let filmList = [
  "Back to the Future",
  "Indiana Jones",
  "Ghostbusters",
  "Ferris Beuller's Day Off",
];

for (let i = 0; i < filmList.length; i++) {
  console.log(filmList[i]);
}
if (filmList.includes("Ghostbusters")) {
  console.log("Yay it's Ghostbusters!");
} else {
  console.log("Boo! We want Ghostbusters!");
}
