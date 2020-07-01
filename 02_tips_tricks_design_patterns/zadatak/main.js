/* const Person = function(name, age) {
  let name = name;
  let _age = age;

  return {
    name: name,
    setName(newName) {
      name = newName;
    },
    setAge(age) {
      _age = age;
    },
  };
}; */

class Person2 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  set age(age) {
    this._age = age;
  }

  addNewProperty(key, value) {
    this[key] = value;
  }

  isAdult() {
    if(this._age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}

const person = new Person2('Ivan', 22);
const person2 = new Person2('Luka', 16);
const person3 = new Person2('Tarik', 23);

console.log(person, person2, person3);

person.name = 'Ivica';
person2.name = 'Ana';

console.log(person, person2, person3);

person.age = 24;

console.log(person._age, person2._age, person3._age);

person.addNewProperty('lastName', 'Prezime');

console.log(person, person2, person3);

console.log(person.isAdult());

const persons = [person, person2, person3];


console.log(persons.filter(person => person.isAdult()));