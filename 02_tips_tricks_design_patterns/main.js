// Creating objects with object literal:

const objLiteral = {
  firstName: 'Ivan',
  lastName: 'Bogdan',
  getFullName() {
    return this.firstName + this.lastName;
  },
};

console.log(objLiteral);
console.log(objLiteral.getFullName());

objLiteral.getFullNameReversed = function() {
  return this.lastName + this.firstName;
};

console.log(objLiteral.getFullNameReversed());

// Creating objects with constructor:

function ObjFunction(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function() {
    return this.firstName + this.lastName;
  };
};

// Inside of a function, this is bound to its current execution context, i.e. the function
// new keyword in front of any function makes it a constructor

const objFunction = new ObjFunction('Ivan', 'Bogdan');
ObjFunction.prototype.nickname = 'Ica';

console.log('objFunction', objFunction);
console.log(objFunction.nickname);
console.log(objFunction.getFullName());

objFunction.getFullNameReversed = function() {
  return this.lastName + this.firstName;
};

console.log(objFunction.getFullNameReversed());

const objFunction2 = new ObjFunction('Ime', 'Prezime');

console.log('objFunction2', objFunction2);
console.log(objFunction2.nickname);
// console.log(objFunction2.getFullNameReversed());

// Creating objects with create method:

let objCreate = Object.create(Object.prototype, {
    firstName: {
      value: 'Ivan',
      configurable: true,
      writable: true,
      enumerable: false
    },
    lastName: {
      value: 'Bogdan',
      configurable: true,
      writable: true,
      enumerable: false
    },
    getFullName: {
      value: function() {
        return this.firstName + this.lastName;
      },
      writable: false,
    }
});

console.log(objCreate);
console.log(objCreate.getFullName());

// prototype links created objects to the prototype used to build them (prototype is skeleton object from which new objects are duplicated)
// Prototype is a link between the constructor function and object

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
      return this.firstName + this.lastName;
    };
  }

  nickname = 'Ica';

  get firstName() {
    return this.firstName;
  }

  set firstName(firstName) {
    this.firstName = firstName;
  }
}

// Class body is executed in script mode
// Single constructor method

const personClass = new Person('Ime', 'Prezime');

console.log('personClass', personClass);
console.log(personClass.nickname);
console.log(personClass.getFullName());

console.log(personClass.firstName);
personClass.firstName = 'Ante';
console.log(personClass.firstName);

// PATTERNS:

// Module:

var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello World';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function() {
      _privateMethod();
    }
  };
}());

myModule.publicMethod();                    // outputs 'Hello World'
console.log(myModule._privateProperty);     // is undefined protected by the module closure
myModule._privateMethod();                  // is TypeError protected by the modul

// Revealing:

var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello World';
  var publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };
}());

myModule.publicMethod();    		        // outputs 'Hello World'
console.log(myModule.publicProperty);       // outputs 'I am a public property'
console.log(myModule._privateProperty);     // is undefined protected by the module closure
myModule._privateMethod();                  // is TypeError protected by the module closure

// Observer pattern:

// define a class
class Observable {
  // each instance of the Observer class
  // starts with an empty array of things (observers)
  // that react to a state change
  constructor() {
    this.observers = [];
  }

  // add the ability to subscribe to a new object / DOM element
  // essentially, add something to the observers array
  subscribe(f) {
    this.observers.push(f);
  }

  // add the ability to unsubscribe from a particular object
  // essentially, remove something from the observers array
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  // update all subscribed objects / DOM elements
  // and pass some data to each of them
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const UserSingleton = (function() {
  let instance;

  function User() {
    this.getUsers = function(url) {};
    this.getUser = function(url, id) {};
    this.postUser = function(url, user) {};
  }

/*   const User = {
    getUsers(url) {},
    getUser(url, id) {},
    postUser(url, user) {},
  }; */

  const createInstance = function() {
    return new User;
  }

  return {
    getUserSingleton: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;

    }
  };
})();

const user = UserSingleton.getUserSingleton();

console.log(user);
