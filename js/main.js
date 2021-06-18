<<<<<<< refs/remotes/origin/lesson3
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
=======
<<<<<<< HEAD
const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'notebook.jpg' },
    { id: 2, title: 'Mouse', price: 20, img: 'mouse.jpg' },
    { id: 3, title: 'Keyboard', price: 200, img: 'keyboard.jpg' },
    { id: 4, title: 'Gamepad', price: 50, img: 'gamepad.jpg' },
];
//Функция для формирования верстки каждого товара
const renderProduct = (x) => {
    return `<div class="product-item">
                <img src="./img/${x.img}" alt="${x.img}" width="200px" height="300px">
                <h3 class="title">${x.title}</h3>
                <p class="price">${x.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);
=======
'use strict'
>>>>>>> Revert "lesson-3"

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
<<<<<<< refs/remotes/origin/lesson3
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
        this.goodsList();
        this._init();
=======
        this._fetchProducts();
        this.goodsList();
>>>>>>> Revert "lesson-3"
    }

    goodsList() {
        let sumPrice = 0
        for (let i = 0; i < this.goods.length; i++) {
            sumPrice += this.goods[i].price;
        }
    }

<<<<<<< refs/remotes/origin/lesson3
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

=======
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ]
    }
>>>>>>> Revert "lesson-3"
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
<<<<<<< refs/remotes/origin/lesson3
            this.title = product.product_name;
            this.price = product.price;
            this.id = product.id_product;
=======
            this.title = product.title;
            this.price = product.price;
            this.id = product.id;
>>>>>>> Revert "lesson-3"
        }
        //Функция для формирования верстки каждого товара
    render() {
        return `<div class="product-item">
<<<<<<< refs/remotes/origin/lesson3
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
=======
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
//

let list = new ProductList();
list.render();
>>>>>>> parent of d0801a4... lesson-3
>>>>>>> Revert "lesson-3"
