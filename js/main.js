'use strict'
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
        // this._fetchProducts();
        this.goodsList();
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.error();
            })
    }

    goodsList() {
        let sumPrice = 0
        for (let product of this.goods) {
            sumPrice += product.price;
        }
    }

    // _fetchProducts() {
    //     this.goods = [
    //         { id: 1, title: 'Notebook', price: 2000 },
    //         { id: 2, title: 'Mouse', price: 20 },
    //         { id: 3, title: 'Keyboard', price: 200 },
    //         { id: 4, title: 'Gamepad', price: 50 },
    //     ]
    // }
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


class ProductCart {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data.contents];
                amount = data.amount;
                countGoods = data.countGoods;
                this.render()
            });
    }
    _getProducts() {

        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.error();
            })
    }

    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    render() {
        const block = document.querySelector(this.cart);
        for (let product of this.goods) {
            const productObj = new CartItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}

class CartItem {
    constructor(product) {
            this.title = product.product_name;
            this.price = product.price;
            this.id = product.id_product;
        }
        //Функция для формирования верстки каждого товара
    render() {
        return `<div class="cart-item">
                    <img class="img" src="./img/${this.price}.jpg" alt="${this.price}" width="100px" height="120px">
                    <h3 class="title2">${this.title}</h3>
                    <p class="price2">${this.price}</p>
                    <button class="close ${this.price}" type="button"></button>
                 </div>`
    }
}

// class ElemBasket() {
//     render() {}
// }

let amount
let countGoods
let list = new ProductList();
// let cart = new ProductCart();
list.render();