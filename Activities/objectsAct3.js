let pet = {
  name: "Tess",
  typeOfPet: "Dog",
  age: "5",
  colour: "Black and White",

  eat() {
    return `${pet.name} is eating!`;
  },
  drink() {
    return `${pet.name} is drinking!`;
  },
};

console.log(pet.eat());
