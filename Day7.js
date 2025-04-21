// Higher Order Function (HOF)

// function greet(){
//   console.log("Good Night ")

// }

// function greet2(lo){
//   console.log("Good morning")
// lo()
// }

// greet2(greet)





// fruits=["Apple","Banana","Mango"];

// fruits.forEach((fruit)=>{
// console.log(fruit+"hi")
// });

// numbers=[1,2,3,4,5,6,7];

// squarednumbers=[];


// numbers.forEach((number)=>{
// squarednumbers.push(number**2)
// })

// console.log(squarednumbers)

// numbers=[1,2,3,4,5];


// const newnum=numbers.map((num)=>{
//   return num **2;
// })

// console.log(newnum)

// W can't use return in forEach where map allows using return

// Weeks=["Sunday","Monday","Tuesday","Wednesday","Thrusday"];
// n=1;
// const newweek=Weeks.map((Week)=>{
// return (Week);
// })
// console.log(newweek)

// dat=[
//   {
// id:4,
// firstname:"Kushal",
// lastname:"Timilsina"
// },
// {
//   id:1,
//   firstname:"Sapan",
//   lastname:"Bhandari"
// },
// {
//   id:5,
//   firstname:"Aasish",
//   lastname:"Saru"
// }
// ];

// const result=dat.map((dati)=>{
// return {
//   ...dati,
//    fullname:dati.firstname+dati.lastname
//   }
// })



// console.log(result);




// Record of class 10

// record=[
//   {
//     id:1,
//     firstname:"Kushal",
//     lastname:"Timilsina",
//   }, 
//    {
//     id:2,
//     firstname:"Aashish",
//     lastname:"Saru",
//   }, 
//    {
//     id:3,
//     firstname:"Deepak",
//     lastname:"Jaisawal",
//   }
// ];
// const newresult=record.map((field)=>{
// return {
//   ...field,
//   fullname:field.firstname+field.lastname
// }
// })

// console.log(newresult);




// const numbers=[1,2,3,4,5];
// k=0;
// const  newone=numbers.map((num)=>{
// l=["A","B","C","D"];
//   return {
//     number:num,
//     name:l[k],
//   } 
//   k++;
// })
// console.log(newone)


// const number=[1,2,3,4,5];
// l=0;
// const newone=number.map((num)=>{
// const k=["A","B","C","D","E"];
// result={
//   number:num,
//   name:k[l]
// }
// l++;
// return result;
// })
// console.log(newone)
//.forEach .map


// const newone=number.map((num)=>{
  // return {
//   number:num,
//   squareis:num**2
// }}
// )
// console.log(newone)

// .forEach le array return  gardaina  
// .map le array return garxa yes batw hami le return {name:nam ,roll:num} yo tarika le object ni return garna ni milxa 
// ani .filter le pani array return garxa tara yo le kita true ki tw false bhako number lai matra return garxa 


// number=[1,2,3,4,5,6];
//  const num=number.filter((nu,gu)=>{

//  })
// console.log(num)





// const books=[
//   {
// nameofbook:"Mahabir Pun",
// dateofreleash:2001
//   }, 
//    {
// nameofbook:"Book1",
// dateofreleash:1998
//   },

//     {
// nameofbook:"Book1",
// dateofreleash:1999
//   },
//     {
// nameofbook:"Book1",
// dateofreleash:1990
//   },
//     {
// nameofbook:"Book1",
// dateofreleash:2051
//   },
//     {
// nameofbook:"Book1",
// dateofreleash:2041
//   },
//     {
// nameofbook:"Book1",
// dateofreleash:2011
//   },

// ]

// const MP=books.filter((k)=>{
//   return k.nameofbook=="Mahabir Pun"
// })

// console.log(MP)
// newdat=books.filter((dat)=>{
// return dat.dateofreleash<2000
// })


// console.log(newdat)


// const l=[1,null,4,undefined,8,null]


// const lo=l.filter((li)=>{
// return li != null && li != undefined
// })
// console.log(lo)


// const number=[1,2,3,4,5,6,7]

// const result=number.reduce((Q,P)=>{
// return Q+P;
// },0);

// console.log(result);

// k=[1,2,3,4,5,6];

// const m=k.reduce((l,d)=>{
// return l+d
// },0)

// console.log(m);


const cartitem=[
  {
name:"ProductA",
quantity:3,
price:345

  }, 
  {
name:"ProductB",
quantity:3,
price:345

  },
   {
name:"ProductC",
quantity:3,
price:345

  },
]

const total=cartitem.reduce((q,p)=>{
return  t=t+p.quantity+p.price 
},0)