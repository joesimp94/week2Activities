let topping = "Rocket";

switch (topping) {
  case "Rocket":
  case "Burrata":
  case "Mushroom":
    console.log("These are important toppings for my pizza.");
    break;
  case "Pepperoni":
    console.log(`"I don't mind having ${topping} on my pizza."`);
    break;
  case "Tuna":
    console.log(`${topping} shouldn't be on pizza.`);
}
