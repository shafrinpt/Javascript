//Templte Literals
const name1 = "Fathima";
const age1 = 25;

console.log(`My name is ${name1} and I am ${age1} years old.`);

//Destructuring (ES6)
const numbers = [1, 2, 3];
const [a, b] = numbers;
console.log(a, b); 
//Object Destructuring:
const user = { name: "Bob", age: 30 };
const { name, age } = user;
console.log(name, age); 

//Spread and Rest Operators (ES6)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; 
//Rest (...) – gathers values
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  
  console.log(sum(1, 2, 3)); 
  