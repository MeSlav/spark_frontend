export default class CarShop {
  constructor() {
    this._carRegistry = [];
  }

  importCars(cars) {
    Array.isArray(cars) ? this._carRegistry.push(...cars) : this._carRegistry.push(cars);
  } 

  buyCar(car) {
    this._carRegistry.push(car);
  }
}