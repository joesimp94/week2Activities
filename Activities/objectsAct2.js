let person = {
  name: "Joe",
  age: "29",

  sayHi() {
    return `Hello, my name is ${this.name}`;
  },
};
console.log(person.sayHi());
