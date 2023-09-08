let accNumber = 12345678;
let pinNumber = 1234;
let amount = 123;
const cashWithdrawl = (accNumber, pinNumber, amount) => {
  function cashMachine() {
    if (accNumber == 12345678 && pinNumber == 1234 && amount > 0) {
      return "Please take your cash from the slot below.";
    } else {
      return "Step away from the machine.";
    }
  }
};
console.log(cashMachine());
