class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
/*
  get price() {
    return this._price;
  }

  set price(val) {
    this._price = val;
  } */
}

const product_01 = new Product('cola', 4.25);

class ShoppingCart {
  constructor(items) {
    this.items = items;
  }

  addItems(items) {
    if (Array.isArray(items)) {
      this.items.push(...items);
    } else {
      this.items.push(items);
    }
  }

  calculateItems() {
    return this.items.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0)
  }

  static showProperties() {
    return Object.keys(this);
  }
}

const shoppingCart_01 = new ShoppingCart([{
  name: 'cola',
  price: 12,
}, {
  name: 'fanta',
  price: 5,
}, {
  name: 'spetzi',
  price: 6,
}]);

console.log(shoppingCart_01);

/* const product_02 = new Product('fanta', 4.25);
const product_03 = new Product('sprite', 4.25);

console.log(product_01.price);
product_01.price = 5;
console.log(product_01.price);
product_01._price = 6;
console.log(product_01.price);
 */

function rand() {
  console.log(this);
}

/*
Nacini pozivanja funkcija sa eksplicitno navedenim this kontekstom:

* new Func() || new func() // this referencira na {}
* obj.method() // this referencira na objekt obj
*

*/

rand.call({ name: 5 });
rand.apply({ name: 5 });


