'use strict';
const product = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
for (let i = 0; i < product.length; i++){
    if("photos" in product[i]){
        if (product[i].photos.length > 0){
            console.log(product [i]);
        }

    }
}
