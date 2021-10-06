//Question 1

// console.log(this);

//function that writes a message to log

// Question 2
// function that return undefined
// fixed code
// const myObj = {
//     name: "Timmy",
//     greet:greet
//    };
//    function greet () {
//     console.log("Hello" + this.name);
//     } 
//       myObj.greet(); // Hello Timmy


//Question 3??
// The function returns a global value defult
// const myFuncDec = function () {
//     console.log(this);
//    };
//  myFuncDec();



// //Question 4
//
   const myFuncArrow = () => {
   };
   myFuncArrow();
   console.log(this);


// //Question 5
//The function returns undefined
//Need to define an element and add a click command
// document.querySelector(".element").addEventListener("click"() => {
//     console.log(this);
//    });