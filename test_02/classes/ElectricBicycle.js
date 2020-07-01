import Vehicle from './Vehicle.js';

export default class ElectricBicycle extends Vehicle {
  constructor(manufacturer, price, batteryCapacity = 10000) {
    super('electric_bicycle', manufacturer, price, 2);
    this._batteryCapacity = batteryCapacity;
    this._batteryLeft = batteryCapacity;
  }

  set batteryLeft(value) {
    if (value < 0) {
      this._batteryLeft = 0;
    } else if (value > this._batteryCapacity) {
      this._batteryLeft = this._batteryCapacity;
    } else {
      this._batteryLeft = value;
    }
  }

  drive(meters) {
    let current = 0;

    const interval = setInterval(() => {
      if (current > meters) {
        clearInterval(interval);
        console.log(`Bicycle went for ${current}m. Battery left: ${this._batteryLeft}mAh`);
        return;
      }

      if (this.batteryLeft > 0) {
        this.batteryLeft -= 2;
        current++;
      } else {
        clearInterval(interval);
        console.log(`Bicycle went for ${current}m, but then the battery went off.`);
      }
    }, 500);
  }

  charge(seconds) {
    const interval = setInterval(() => {
      if (this._batteryLeft === this._batteryCapacity) {
        clearInterval(interval);
        console.log(`Battery is already full.`);
        return;
      }

      if (this.current < seconds) {
        this.batteryLeft += 3;
        current++;
      } else {
        clearInterval(interval);
        console.log(`There is ${this._batteryLeft}mAh left of battery`);
      }
    }, 1000);
  }
}