// const coffeeShop = {
//   branch: "Ellesmere Port",
//   drinks: ["Bubble Tea" = 5.50, "Flat White" = 2.75, "Mint Hot Chocolate" = 3.65],
//   food: ["Seafood Pudding £12.50", "Sweet Rolls £1.50", "Lying Cake £7.50"],

//   foodOrdered(){
//     return `Your order is ${drinks+}`
//   }

// };
// console.log(coffeeShop.foodOrdered())

let coffeeShop = {
  branch: "Ellesmere Port",
  drinkMenu: ["Coffee", 3, "Tea", 2],
  foodMenu: ["Sandwich", 5, "Cake", 3],
  total: 0,

  drinkOrder(drinks) {
    let drinksTotal = 0;

    for (let i = 0; i < drinks.length; i++) {
      console.log(drinks[i]);
      let indexOfItem = this.drinkMenu.indexOf(drinks[i]);

      if (indexOfItem !== -1) {
        this.total += this.drinkMenu[indexOfItem + 1];
      } else {
        console.log("Item not found.");
      }
    }
  },

  foodOrder(food) {
    let foodTotal = 0;

    for (let i = 0; i < food.length; i++) {
      console.log(food[i]);
      let indexOfItem = this.foodMenu.indexOf(food[i]);

      if (indexOfItem !== -1) {
        this.total += this.foodMenu[indexOfItem + 1];
      } else {
        console.log("Item not found.");
      }
    }
    console.log(this.total);
  },
};

coffeeShop.drinkOrder(["Coffee", "Coffee", "Tea"]);
coffeeShop.foodOrder(["Sandwich", "Cake"]);
