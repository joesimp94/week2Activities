let orderCount = 0;

const takeOrder = (topping, sauce, base) => {
  console.log(`Pizza with ${topping}, ${sauce} sauce and ${base} crust.`);
  orderCount++;
};
takeOrder("pineapple", "tomato", "sourdough");
console.log(orderCount);
