import Car from './classes/Car.js';
import Mechanic from './classes/Mechanic.js';

const vehicle = new Car('ferrari', 55000, 4);

console.log(vehicle);
console.log(Mechanic);

vehicle.drive();
vehicle.startEngine();
vehicle.drive(4);
setTimeout(() => {
    vehicle.stopEngine();
    vehicle.crash();
    vehicle.crash('medium');
    vehicle.startEngine();
    Mechanic.repair(vehicle);
    vehicle.startEngine();
    vehicle.drive(25);
    setTimeout(() => {
        vehicle.crash('total');
        Mechanic.repair(vehicle);
    }, 21000);
}, 5000);