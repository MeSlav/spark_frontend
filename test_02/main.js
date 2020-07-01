import Car from './classes/Car.js';
import ElectricBicycle from './classes/ElectricBicycle.js';
import Mechanic from './classes/Mechanic.js';

const car = new Car('Ferrari', 55000, 1);

console.log(car);

car.drive();
car.startEngine();
car.drive(4);

setTimeout(() => {
    console.log(car);
    car.stopEngine();
    car.crash();
    car.crash('medium');
    car.startEngine();
    Mechanic.fixCar(car);
    car.startEngine();
    car.drive(5);
    car.crash(1);
    car.drive(6);
}, 5000);

setTimeout(() => {
    console.log(car);
    car.crash('total');
    Mechanic.fixCar(car);
}, 6000);