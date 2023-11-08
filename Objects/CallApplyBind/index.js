const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(hometown,country) {
        console.log(hometown,country)
      return this.firstName + " " + this.lastName +" " + hometown+" "+country;
    }
  };
  
  const anotherPerson = {
    firstName: "Alice",
    lastName: "Smith"
  };
  console.log(person.fullName.call(anotherPerson,"Delhi", "India"))
  const fullName = person.fullName.call(anotherPerson,"Delhi", "India");
  console.log(fullName); 
  

  // const person3 = {
  //   name: "John",
  //   greet: function (greeting) {
  //     console.log(greeting + " " + this.name);
  //   }
  // };
  
  // const greetJohn = person.greet.bind(person);
  // greetJohn("Hello"); 