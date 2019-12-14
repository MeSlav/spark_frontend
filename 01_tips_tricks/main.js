const x = 'x';
let y = 'y';

(function() {
  var myVar = 'varijabla';
  var myVar2 = 'varijabla2';
  function myFunc() {
    console.log(myVar);
    console.log(myVar2);
    if(true) {
      var myVar = 'myVar2';
    }
  }

  myFunc();
})();

function consoleThis(...letters) {
  for(let i = 0; i<letters.length; i++) {
    console.log(i + '. letter', letters[i]);
  }
};

const arrObj = [
  {
    id: 1,
    name: 'prvi',
  },
  {
    id: 2,
    prop: 'prop',
    name: 'drugi',
  },
  {
    id: 3,
    name: 'treci',
  },
];

consoleThis(arrObj.map(obj => obj.name));

console.log('JSON.stringify(typeof (typeof arrObj[0].id))', JSON.stringify(typeof (typeof arrObj[0].id)));

if(typeof arrObj[0].id === 'string') {
  console.log('arrObj[0].id data type is string.')
} else if (typeof arrObj[0].id === Number) {
  console.log('arrObj[0].id data type is number.')
}

const randomFunc = function() {

};

const objMethods = {
  method1: function() {
    console.log(this);
  },
  method2: () => {
    console.log(this);
  },
  method3() {
    console.log(this);
  },
};

objMethods.method1();
objMethods.method2();
objMethods.method3();

console.log(Math.PI.toPrecision(3))
console.log(Math.PI.toFixed(3))

if({}) {
  console.log('This value contains something');
} else {
  console.log('This value does not contain something');
}

const loopOver = (param) => {
  const x = [];

  param.forEach(function(obj) {
    let text;
    for(let key in obj){
      text += obj[key] + '\n';
    }
    console.log(text);
  });

  return x;
};

fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
  .then(res => res.json())
  .then(res => {
    // loopOver(res);
  })

function groupingParameters(a, b, ...c){
  console.log(a, b, c);
};

groupingParameters(5,4);
groupingParameters('a', 'fa', 2, 6, { a: 'b' }, [1,2]);

const docFrag = document.createDocumentFragment();
docFrag.appendChild(document.createElement('div'));
docFrag.appendChild(document.createElement('div'));
docFrag.appendChild(document.createElement('div'));
console.dir(docFrag);

const arr1 = [1,2,3,4,5];

console.log(arr1);

const arr2 = [6,7,8];
const concatArrays = arr1.concat(arr2);
const mappedArray = arr1.filter(x => {
  if (x > 3) {
    return true;
  }
})
console.log(concatArrays, mappedArray);

const arr3 = [...arr1, ...arr2];

console.log(arr3);

arr3.pop();

console.log(arr3);

arr3.shift();

console.log(arr3);

const boolCheck = Boolean(0) ? { prop: 5 } : {};

console.log(boolCheck);

const bool1 = 'AB';

const bool2 = !!(bool1 === 'AB' && !(bool1 !== 'AB') && {} && [] && { prop: 5 });

console.log('bool2', bool2);

const bool3 = bool1 === 'AB' || { prop: 5 };

console.log(bool3);
