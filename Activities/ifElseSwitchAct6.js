let time = "7.00 am";
let placeOfWork = "Code Nation.";
let townOfHome = "Ellesmere Port.";
let comm = "commuting.";

switch (time) {
  case "7.00 am":
    console.log(`I am currently in ${townOfHome}`);
    break;
  case "8.00 am":
    console.log(`I am currently ${comm}`);
    break;
  case "9.00 am":
    console.log(`I am currently ${placeOfWork}`);
    break;
  default:
    console.log("I am currently unavailable");
}
