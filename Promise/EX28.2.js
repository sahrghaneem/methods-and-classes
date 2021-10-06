const person = {
    name:"sahr" 
  };
  person.pname = function(){
   return this.name
  };
  console.log(person.pname());

  let delaypname = setTimeout(function dname(){
      console.log(person.name)
  },1000)


//   let greet = setTimeout(myGreeting,2000)
  
// // With a named function
// let myGreeting = setTimeout(function sayHi() {
//     console.log('Hello, Mr. Universe!');
//   }, 2000);
  
// //   // With a function defined separately
// //   function sayHi() {
// //     console.log('Hello Mr. Universe!');
// //   }
  
//  setTimeout(sayHi() , 2000)
  
// //   console.log(func1.name);
//   // expected output: "func1"