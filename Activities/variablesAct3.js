let date2 = new Date("4/13/1994");
let date1 = new Date();

let difference = date1.getTime() - date2.getTime();

let days = Math.ceil(difference / (1000 * 3600 * 24));

console.log("Days since my birthday " + days);
