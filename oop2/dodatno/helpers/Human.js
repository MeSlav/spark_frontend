export default class Human {
    constructor(sex, height, mass, age, name) {
        this.sex = sex;
        this.height = height;
        this.mass = mass;
        this.age = age;
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, my name is ${this.name} and I have ${this.age}.`);
    }
}