//Task5
const products = [

    {
        id: 0,
        name: "milk",
        price: 0.5,
        quantity: 5,
        expiryDate: "2026-10-01",
        minimumStock: 10,

    },

    {
        id: 1,
        name: "Chocolate Galaxy",
        price: 1,
        quantity: 30,
        expiryDate: "2026-10-02",
        minimumStock: 0,

    },

    {
        id: 2,
        name: "rice",
        price: 6,
        quantity: 40,
        expiryDate: "2026-07-03",
        minimumStock: 30,

    },

    {
        id: 3,
        name: "braed",
        price: 2,
        quantity: 50,
        expiryDate: "2026-10-04",
        minimumStock: 40,

    },

    {
        id: 4,
        name: "coffee",
        price: 7,
        quantity: 50,
        expiryDate: "2026-10-05",
        minimumStock: 50,

    },

];


function isLowStock(product) {
    return product.quantity <= product.minimumStock;
}

console.log(isLowStock(products[0]));



function isOutOfStock(product) {
    return product.quantity === 0;
}

console.log(isOutOfStock(products[1]));



function isExpired(product) {
    return new Date(product.expiryDate) < new Date();
}

console.log(isExpired(products[2]));



function calculateInventoryValue(product) {
    return product.price * product.quantity;
}

console.log(calculateInventoryValue(products[4]));



function decreaseStock(product, quantity) {
    return Math.max(0, product.quantity - quantity);
}

console.log(decreaseStock(products[4], 40));