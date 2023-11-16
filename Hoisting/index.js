console.log(name) // why undefined  ???
var name = "sarfaraz"; 


const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}


/*
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
variables, classes, or imports to the top of their scope, prior to execution of the code.
*/ 

// is it possible to hoist let and const ? explain
/*
Yes, it is possible to hoist let and const variables in JavaScript. Hoisting is a 
mechanism where variables and function declarations are moved to the top of their scope 
regardless of where they are actually declared in the code. This means that let and const 
variables can be accessed before their declaration statement in the code.

However, hoisting works differently for let and const variables compared to var variables.
When let and const variables are hoisted, they are not initialized with a default value of
undefined. This means that attempting to access a let or const variable before its
declaration statement will result in a ReferenceError.

To avoid this error, it is recommended to use let and const variables only after they have
been declared and initialized. This will help to prevent unexpected behavior and make 
your code more readable and maintainable.
*/

console.log(number); // ReferenceError: Cannot access 'number' before initialization
let number = 10;
console.log(number); // 10
