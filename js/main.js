'use strict'

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.goodsList();
    }

    goodsList() {
        let sumPrice = 0
        for (let i = 0; i < this.goods.length; i++) {
            sumPrice += this.goods[i].price;
        }
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'notebook', price: 2000 },
            { id: 2, title: 'mouse', price: 20 },
            { id: 3, title: 'keyboard', price: 200 },
            { id: 4, title: 'gamepad', price: 50 },
        ]
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
            this.title = product.title;
            this.price = product.price;
            this.id = product.id;
        }
        //Функция для формирования верстки каждого товара
    render() {
        return `<div class="product-item">
                <img src="./img/${this.title}.jpg" alt="${this.title}" width="200px" height="300px">
                <h3 class="title">${this.title}</h3>
                <p class="price">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

// class Cart {
//     constructor(cart1 = '.cart') {
//         this.cart1 = cart1;
//     }

//     clearCart()
// }

// class CartItem {
//     constructor(cartitem1 = '.cart') {
//         this.cartitem1 = cartitem1;
//     }

//     addProduct()

//     delProduct()
// }

let list = new ProductList();
list.render();