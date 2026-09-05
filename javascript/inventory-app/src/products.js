//task 3

const products =[
{
    id:0,
    name : "Milk",
    price : 1.5,
    quantity : 20,
    expiryDate :"oct/08/2026",
    minimumStock:5,
    active : false,
},
{
  id:1,
    name : "Chocolate Galaxy",
    price :0.5,
    quantity :30 ,
    expiryDate :"oct/15/2026",
    minimumStock:8,
    active : true,
},
{
  id:2,
    name : "Chocolate Mars",
    price : 0.5,
    quantity : 40,
    expiryDate :"oct/20/2026",
    minimumStock:10,
    active : false,
},
{
      id:3,
    name : "braed",
    price : 0.2,
    quantity : 50,
    expiryDate :"oct/25/2026",
    minimumStock:15,
    active : true,
},
{
      id:4,
    name : "Chocolate",
    price : 1,
    quantity : 60,
    expiryDate :"oct/28/2026",
    minimumStock:20,
    active : false,
},

{
    id:5,
    name : "Chocolate laith",
    price : 6,
    quantity : 70,
    expiryDate :"oct/11/2026",
    minimumStock:25,
    active : true,
}
];

console.log(products);

const Milk = products.find(product=>product.name=="Milk");

Milk.price =2.5;
Milk.quantity=10;
Milk.active=false;
console.log(Milk);

products[3].price =50;
products[3].quantity=25;
products[3].active=false;
console.log(products [3]);

const product = products.find(product=> product.id ==4);
product.price =99;
product.quantity=40;
product.active=true;
console.log(product);
