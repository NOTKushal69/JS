// HOF(Higher Order Function)
// Callback function
//,map
//.filter
// .forEach
//Reduce

// CallBack


// function bye(){
//   console.log("Bye");
// }

// greet(bye)


// function greet(he){
//   console.log("Hello");
//   he()
// }

// function kusu(lo){
//   console.log(1);
//   lo();
// }

// kusu(function na(){
//   console.log(2);
// })
function greet3(){
console.log("Good Evening ");
};

function greet2(la){
  console.log("Bye");
  la();
}

function greet(lo){
console.log("hello");
lo(greet3);
}
greet(greet2)
// yaha greet2 chai callback function ho hoi



