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

  const carts = [
    {
      customer_id: 2,
      items: [
        {
          name: 'milk',
          price: 2,
          quantity: 3,
        },
        {
          name: 'bread',
          price: 1.4,
          quantity: 2,
        },
        {
          name: 'lollipop',
          price: 0.25,
          quantity: 15,
        },
      ],
    },
    {
      customer_id: 3,
      items: [
        {
          name: 'milk',
          price: 2,
          quantity: 3,
        },
        {
          name: 'bread',
          price: 1.4,
          quantity: 2,
        },
        {
          name: 'lollipop',
          price: 0.25,
          quantity: 15,
        },
      ],
    },
    {
      customer_id: 4,
      items: [
        {
          name: 'gums',
          price: 2,
          quantity: 3,
        },
        {
          name: 'juice',
          price: 1.4,
          quantity: 2,
        },
      ],
    },
  ];

  function pay (customer_id){
    let sum = 0;

    const customer = customers.find(customer => customer.id === customer_id);

    if(!customer) return 'No customer!';

    const customer_cart = carts.find(cart => cart.customer_id === customer_id);

    customer_cart.items.forEach((item) => {
      sum += item.price * item.quantity;
    });

    console.log(customer.name + ' je potrosio ' + sum +' KM');

    return sum;
  };

  return {
    pay: pay,
  }
})();

console.log(Cashier.pay(2));
