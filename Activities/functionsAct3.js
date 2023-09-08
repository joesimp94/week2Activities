let accNumber = 12345678;
let pinNumber = 1234;
let amount = 123;
const cashWithdrawl = (accNumber, pinNumber, amount) => {
  function cashMachine() {
    if (accNumber == 12345678 && pinNumber == 1234 && amount > 0) {
      return console.log("Please take your cash from the slot below.");
    } else {
      return console.log("Step away from the machine.");
    }
  }
};
cashWithdrawl(12345678, 1234, 123);
console.log(`Withdrawing £${amount} from account ${accNumber}`);
