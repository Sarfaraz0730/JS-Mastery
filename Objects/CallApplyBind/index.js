const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(hometown,country) {
        console.log(hometown,country)
      return this.firstName + " " + this.lastName +" " + this.hometown+" "+this.country;
    }
  };
  
  const anotherPerson = {
    firstName: "Alice",
    lastName: "Smith"
  };
  console.log(person.fullName.call(anotherPerson,"Delhi", "India"))
//   const fullName = person.fullName.call(anotherPerson,"Delhi", "India");
  console.log(fullName); 
  