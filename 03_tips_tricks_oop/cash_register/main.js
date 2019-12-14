const Cashier = (function() {
  const customers = [
    {
      id: 2,
      name: "Marko",
    },
    {
      id: 3,
      name: "Ivan",
    },
    {
      id: 4,
      name: "Ana",
    },
  ];

  const items = [
    {
      id: 1,
      name: 'milk',
      price: 2,
    },
    {
      id: 2,
      name: 'bread',
      price: 1.4,
    },
    {
      id: 3,
      name: 'lollipop',
      price: 0.25,
    },
  ];

  const carts = [
    {
      customer_id: 2,
      orders: [
        {
          item_id: 1,
          quantity: 3,
        },
        {
          item_id: 2,
          quantity: 2,
        },
        {
          item_id: 3,
          quantity: 15,
        },
      ],
    },
    {
      customer_id: 3,
      orders: [
        {
          item_id: 1,
          quantity: 3,
        },
        {
          item_id: 2,
          quantity: 1,
        },
        {
          item_id: 3,
          quantity: 4,
        },
      ],
    },
    {
      customer_id: 4,
      orders: [
        {
          item_id: 1,
          quantity: 3,
        },
        {
          item_id: 2,
          quantity: 5,
        },
      ],
    },
  ];

  function addItem (newItem) {
    if (items.find(item => item.id === newItem.id)) return 'Item already exists!';
    items.push(newItem);

    return items;
  }

  function addCustomer (newCustomer) {
    if (customers.find(customer => customer.id === newCustomer.id)) return 'Customer already exists!';
    customers.push(newCustomer);

    return customers;
  }

  function addCart (newCart){
    // const { customer_id, order } = newCart;
    if (!newCart.customer_id || !newCart.order) return 'Invalid cart data!';

    carts.forEach(cart => {
      if (cart.customer_id === newCart.customer_id) {
        cart = newCart;
        console.log('Updated customer!');
      } else if(!customers.find(customer => customer.id === cart.customer_id)) {
        carts.push(newCart);
        console.log('Created new cart!');
      } else {
        console.log("Customer doesn't exist!");
      }
    });

    return carts;
  }

  function pay (customer_id){
    let sum = 0;

    const customer = customers.find(customer => customer.id === customer_id);

    if(!customer) return 'No customer!';

    const customer_cart = carts.find(cart => cart.customer_id === customer_id);

    customer_cart.orders.forEach(order => {
      const item = items.find(item => item.id === order.item_id);
      sum += item.price * order.quantity;
    });

    console.log(customer.name + ' je potrosio ' + sum +' KM');

    return sum;
  };

  return {
    pay: pay,
    addItem: addItem,
    addCustomer: addCustomer,
    addCart: addCart,
  }
})();

const cashier = Cashier;

console.log('cashier.pay(1)', cashier.pay(1));
console.log('cashier.pay(2)', cashier.pay(2));
console.log('cashier.addItem(Existing ID)', cashier.addItem({
  id: 1,
  name: 'milk',
  price: 2,
}));
console.log('cashier.addItem(Existing ID)', cashier.addItem({
  id: 4,
  name: 'condom',
  price: 4.5,
}));
console.log('cashier.addCustomer(Existing ID)', cashier.addCustomer({
  id: 3,
}));
console.log('cashier.addCustomer(Existing ID)', cashier.addCustomer({
  id: 5,
  name: 'Ante',
}));
console.log('cashier.addCart(Existing ID)', cashier.addCart({
  customer_id: 3,
}));
console.log('cashier.addCart(Existing ID)', cashier.addCart({
  customer_id: 3,
  orders: [],
}));
console.log('cashier.addCart(Existing ID)', cashier.addCart({
  customer_id: 5,
  orders: [
    {
      item_id: 1,
      quantity: 3,
    },
    {
      item_id: 2,
      quantity: 5,
    },
  ],
}));
