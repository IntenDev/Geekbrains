'use strict';
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    }
];

products.forEach(function(element) {
    element.price  = element.price - (element.price / 100) * 15;
});

//Проверяем изменились ли обьекты (цена)
products.forEach(function (element) {
    console.log(element)
});
