const newFunc = ({ name : a = {} }, obj2, ...arr) => {
  obj2.b = 4;
  arr.forEach(obj => {
    obj.c = 3;
  })

  console.log(a, obj2, ...arr);
};

const obj1 = {};

newFunc(obj1, {}, {}, {}, {}, {});


/* function deepCopy(obj) {
  const newObj = {};

  Object.keys(obj).forEach(key => {
    if(!!Object.keys(obj[key]).length) {
      newObj[key] = deepCopy(obj[key]);
      return;
    }
    newObj[key] = obj[key];
  });

  return newObj;
};

const obj = { a: 5, b: 4, c: { a: 4, d: 12 }};

const newObj = _.cloneDeep(obj);

console.log(obj, newObj);

obj.c.d = 15;

console.log(obj, newObj); */

/* function sum(...numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
}

console.log(sum(3,4,56,6,3));

function sumThreeArguments() {
  let sum = 0;

  Array.from(arguments).forEach((number) => {
    console.log(number)
    sum += number;
  });

  return sum;
}

console.log(sumThreeArguments(3,4,56,6,3));

const obj = {
  firstName: 'ime',
  lastName: 'prezime',
  person: {
    newProp: 5,
  }
};

const objCopy = { ...obj };

const obj2 = {
  ...obj,
  a: 5,
  c: 'abc',
};

console.log(obj, objCopy, obj2);

objCopy.b = 'AAA';

console.log(obj);

const assignObj = Object.assign({}, obj);

console.log(assignObj);

obj.person.newProp = 15;

console.log(assignObj); */

window.fetch = function (url, { http : ht = 'GET', cors = 'allow', ...obj }, ...other) {
  console.log(url, ht, cors, obj, other);
/*   const xhttp = new this.XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open(ht, url, true);
  xhttp.send(); */
};

fetch('www.google.ba', { http: 'POST', name: 'ime' }, 4, 'name');

/* function Math() {

}

Math.abs = function(x) {
  return x > 0 ? x : -x;
};

function Object() {

}

Object.values = function(obj) {
  const values = [];
  for (let x in obj) {
    values.push(obj[x]);
  };
  return values;
};

Object.keys = function(obj) {
  const keys = [];
  for (let x in obj) {
    keys.push(x);
  };
  return keys;
} */

const p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('hello');
  }, 1000);
});

console.log(p1);

p1.then(res => {
  console.log(res); // prints hello after 300ms
});
