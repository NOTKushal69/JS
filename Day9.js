// Asyns js coding

// synchoronos
 

// async function abcd() {
//   try {
//     const response = await fetch('https://randomuser.me/api/');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching user:', error);
//   }
// }

// abcd();


// console.log("Hello");
//  console.log("BYe");
// console.log("HOra");


async function greet() {
  for(i=1;i<=10;i++){
await console.log("Hello");
  }
  console.log("Bye");
}
greet()
