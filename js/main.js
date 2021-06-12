'use strict'
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// class ProductCart {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];
//         this._getProducts()
//             .then(data => {
//                 this.goods = [...data.contents];
//                 amount = data.amount;
//                 countGoods = data.countGoods;
//                 this.render()
//             });
//     }
//     _getProducts() {

//         return fetch(`${API}/getBasket.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.error();
//             })
//     }

//     addGoods() {

//     }
//     removeGoods() {

//     }
//     changeGoods() {

//     }
//     render() {
//         const block = document.querySelector(this.cart);
//         for (let product of this.goods) {
//             const productObj = new CartItem(product);
//             block.insertAdjacentHTML('beforeend', productObj.render())
//         }
//     }
// }



// let amount
// let countGoods
// let list = new ProductList();
// let cart = new ProductCart();
// list.render();

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
        this.goodsList();
        this._init();
    }

    goodsList() {
        let sumPrice = 0
        for (let i = 0; i < this.goods.length; i++) {
            sumPrice += this.goods[i].price;
        }
    }

<<<<<<< refs/remotes/origin/lesson3
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.error();
            })
    }

    _init() {
        function cartopen(e) {
            if (e.target.children[0].style.display == "none" || e.target.children[0].style.display == "")
                e.target.children[0].style.display = "block"
            else e.target.children[0].style.display = "none"
        }
        let cartlist = document.querySelector(".cartlist");
        let btncart = document.querySelector(".btn-cart");
        btncart.addEventListener('click', cartopen)
=======
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'notebook', price: 2000 },
            { id: 2, title: 'mouse', price: 20 },
            { id: 3, title: 'keyboard', price: 200 },
            { id: 4, title: 'gamepad', price: 50 },
        ]
>>>>>>> 123
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}

class ProductItem {
    constructor(product) {
            this.title = product.product_name;
            this.price = product.price;
            this.id = product.id_product;
        }
        //Функция для формирования верстки каждого товара
    render() {
        return `<div class="product-item">
                    <img src="./img/${this.price}.jpg" alt="${this.price}" width="200px" height="300px">
                    <h3 class="title">${this.title}</h3>
                    <p class="price">${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }
}

class Cart {
    constructor(cart1 = '.cart') {
        this.cart1 = cart1;
    }

    clearCart() {}
}
class CartItem {
    constructor(cartitem1 = '.cart') {
        this.cartitem1 = cartitem1;
    }

    addProduct() {}

    delProduct() {}
}

let list = new ProductList();
list.render();