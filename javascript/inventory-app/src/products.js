
//task 4


const products =[
  {
     id:0,
    name : "Milk",
    price :0.75 +" JOD",
    quantity : 35,
    expiryDate :"oct/08/2026",
    minimumStock:10,
    active : false,
  },

{
  id:1,
    name : "Chocolate Galaxy",
    price :1 +" JOD",
    quantity :45 ,
    expiryDate :"oct/15/2026",
    minimumStock:20,
    active : true,
},
{
  id:2,
    name : "Chocolate Mars",
    price : 1.5 +" JOD",
    quantity : 50,
    expiryDate :"oct/20/2026",
    minimumStock:30,
    active : false,
},


{
      id:3,
    name : "braed",
    price : 2 +" JOD",
    quantity : 70,
    expiryDate :"oct/25/2026",
    minimumStock:40,
    active : true,
},


{
      id:4,
    name : "Chocolate",
    price : 1.5 +" JOD",
    quantity : 80,
    expiryDate :"oct/28/2026",
    minimumStock:50,
    active : false,
},

{
    id:5,
    name : "Chocolate laith",
    price : 2 +" JOD",
    quantity : 90,
    expiryDate :"oct/11/2026",
    minimumStock:60,
    active : true,
}
];


 const product = products.find(function(gitProductId){
 return gitProductId.id === 3
 });
console.log(product);


const quantity = products.filter(function (quantityy1){
return quantityy1.quantity >10;
});
console.log(quantity);


products.filter(function(minimumStockk2){
return products.quantity <= products.minimumStock;
});
console.log(products);