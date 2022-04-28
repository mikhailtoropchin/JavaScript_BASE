let lastID = 1;

function Product(title, price, img) {
    this.id =lastID++;
    this.title = title;
    this.price = price;
    this.img = img;
    this.quantity = 1;
}


let cart = [];
let products = [];



const cartInfoEl = document.querySelector('#cart');
const showcaseEl = document.querySelector('main');


// функция для генерации случайного числа от min до max
function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// функция для генерации продукта
function genProduct() {

    // два массива для будущего названия товара
    const entities = ['Hat', 'Jacket', 'Shoes', 'Shirt', 'Skirt'];
    const colors = ['Yellow', 'Black', 'Green', 'White', 'Blue'];

    // генерируем название используя вышесозданные массивы и функцию генерации случ. чисел
    const title = colors[randomInt(0, colors.length - 1)] + ' ' + entities[randomInt(0, entities.length - 1)];
    // цена
    const price = randomInt(8, 999);

    // картинка
    const img = `img/${randomInt(1, 9)}.png`;
    
    return new Product(title, price, img);
  }
  

  // функция для сохранения корзины в локальное хранилище (при перезагрузке страницы, информация о корзине остается)
  function saveCart() {
    window.localStorage.setItem('userCart', JSON.stringify(cart));
  }
  
  // функция для загрузки корзины из локального хранилища
  function loadCart() {
    cart = JSON.parse(window.localStorage.getItem('userCart')) || [];
  }

  // функция для формирования массива с продуктами
  function loadCatalog() {
    for(let i = 0; i < 9; i++) {
      products.push(genProduct());
    }
  }
  
  // функция для подсчета стоимости корзины
  function getCartPrice() {
    let result = 0;
    for(let product of cart) {
      result += product.price * product.quantity; // * на количество если > 1 одинакового товара в корзине
    }
    // возвращаем стоимость
    return result;
  }
  
  // функция для подсчета количества товаров в корзине
  function getCartQuantity() {
    return cart.reduce(function (acc, product) {
      return acc + product.quantity;
    }, 0);
  }
  

  // информация о корзине
  function getCartInfo() {
    if(cart.length == 0) {
      return 'Корзина пуста';
    }
  
    return `В корзине ${getCartQuantity()} товаров на сумму ${getCartPrice()}$`;
  }
  

  // функция для визуализации товара
  function createCardEl(product) {
    const cardEl = document.createElement('DIV');
    const imgWrapperEl = document.createElement('DIV')
    const imgEl = document.createElement('IMG');

    const titleEl = document.createElement('P');
    const priceEl = document.createElement('P');
    const btnEl = document.createElement('BUTTON');
    
  
    cardEl.classList.add('product-card');
    imgEl.classList.add('product-card__img');
    imgWrapperEl.classList.add('product-card__img-wrapper');

    titleEl.classList.add('product-card__title');
    priceEl.classList.add('product-card__price');
    btnEl.classList.add('product-card__btn');
  
    imgEl.setAttribute('src', product.img);

    titleEl.textContent = product.title;
    priceEl.textContent = product.price + '$';
    btnEl.textContent = 'В корзину';
  
    btnEl.setAttribute('data-id', product.id);
  
    cardEl.append(imgEl);

    cardEl.append(imgWrapperEl);
    cardEl.append(titleEl);
    cardEl.append(priceEl);
    cardEl.append(btnEl);
  
    return cardEl;
  }

  // отображение информации о корзине
  function drawCartInfo() {
    cartInfoEl.textContent = getCartInfo();
  }
  // функция создания отображения для каждого товара в массиве продуктов
  function drawShowcase() {
    for(let product of products) {
      showcaseEl.append(createCardEl(product));
    }
  }
  
  // функция для добавления товара в корзину
  function addToCart(id) {
    const existProduct = cart.find(function (product) { return product.id == id });
    if(existProduct) {
      existProduct.quantity++;
      drawCartInfo();
      saveCart();
      return;
    }
  
    const product = Object.assign({}, products.find(function (product) { return product.id == id }));
    cart.push(product);
    saveCart();
    drawCartInfo();
  }
  
  loadCatalog();
  loadCart();
  drawCartInfo();
  drawShowcase();
  
  showcaseEl.addEventListener('click', function(e) {
    if(e.target.tagName == 'BUTTON') {
      addToCart(e.target.dataset.id);
    }
  })
  

  



