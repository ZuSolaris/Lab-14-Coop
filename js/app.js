'use strict';

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {

       this.items[i].push(product);
       this.items[i].push(quantity);

  // TODO: Fill in this instance method to create a new CartItem and add it to this.items???
};

<<<<<<< HEAD
Cart.prototype.saveToLocalStorage = function() {
<<<<<<< HEAD

  let cartString = JSON.stringify(cart);
  localStorage.setItem('myCart', cartString);

  // TODO: Fill in this instance method to save the contents of the cart to localStorage???
=======
Cart.prototype.saveToLocalStorage = function(){
>>>>>>> e7dc089b64ed66f52e1ef36e003345337eb29963
=======
  let cartString = JSON.stringify(cart);
  localStorage.setItem('myCart', cartString);
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
<<<<<<< HEAD
>>>>>>> 91cd1c08c26da309a55c8a0c2433dff4daa6602d
=======
>>>>>>> e7dc089b64ed66f52e1ef36e003345337eb29963
};

Cart.prototype.removeItem = function(item) {
  this.items[i].pop(product);
  this.items[i].pop(quantity);
  // TODO: Fill in this instance method to remove one item from the cart.
  removeItemFromCart();
  // Note: You will have to decide what kind of parameter to pass in here!
};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
