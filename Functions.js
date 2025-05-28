//Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Alice"));
  //Function Expression
  const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("Bob"));
  //Arrow Functions
  const greet = (name) => {
    return `Hello, ${name}!`;
  };
  const greet = name => `Hello, ${name}!`;