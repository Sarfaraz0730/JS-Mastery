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