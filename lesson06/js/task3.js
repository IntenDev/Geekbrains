'use script';
let webstore = new Vue({
    el: '#app',
    data: {
        sitename: "Магазинчик",
        products:[{
            id: 1,
            title: "Серьги",
            description: "Серьги из серебра и кожи настоящего <em>питона</em>.",
            price: 2000,
            image: "img/4-1.jpg"
        }, {
            id: 2,
            title: "Кольцо",
            description: "Кольцо из серебра и кожи настоящего <em>питона</em>.",
            price: 1200,
            image: "img/4-3.jpg"
        }, {
            id: 3,
            title: "Колье",
            description: "Колье из серебра и кожи настоящего <em>питона</em>.",
            price: 4000,
            image: "img/4-2.jpg"
        }],
        cart: []
    },
    filters: {
        formatPrice: function (price) {
            return price + " руб.";
        }
    },
    showProduct: true,
    methods: {
        addToCart(aProduct) {
            this.cart.push(aProduct);
        },
        showCheckout(){
            this.showproduct = this.showProduct ? false : true;
        }
    },
    computed: {
        cartItemSum: function () {
            let sum = 0;
            for(let i = 0; i < this.cart.length; i++){
                 sum += this.cart[i].price;
            }
            return sum;
        }
    }
});
