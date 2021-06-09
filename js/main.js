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