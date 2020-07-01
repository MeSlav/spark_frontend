import Vehicle from './Vehicle.js';

export default class Car extends Vehicle {
  constructor(manufacturer, price, gasTankSize = 50) {
    super('car', manufacturer, price, 4);
    this._engineRunning = false;
    this._isDriving = false;
    this._gasTankSize = gasTankSize;
    this._gasLeft = gasTankSize;
    this._kilometersPassed = 0;
  }

  set gasLeft(value) {
    if (value < 0)
    this._gasLeft = 0;
    else 
    this._gasLeft = value;
  }

  startEngine() {
    this._engineRunning = setInterval(() => {
      console.log('Engine running. GAS LEFT: ' + this._gasLeft);
      if(this._gasLeft <= 0) {
        clearInterval(this._isDriving);
        this.stopEngine();
        this._isDriving = false;
        console.log('Car stopped, since it has no fuel left!')
        return;
      }
      this.gasLeft = this._gasLeft - 0.01;
    }, 1000);
  }

  stopEngine() {
    clearInterval(this._engineRunning);
    this._engineRunning = false;
  }

  drive(seconds) {
    if (!this._engineRunning) {
      console.log('You must start the car first!');
      return;
    } else if (this._isDriving) {
      console.log('Car is already driving!');
      return;
    }

    let current = 0;
    this._isDriving = setInterval(() => {
      if (current < seconds) {
        this.gasLeft = this._gasLeft - 0.1;
        current++;
      } else if (!this._engineRunning || !this._inOrder) {
        clearInterval(this._isDriving);
        this._isDriving = false;
      } else {
        clearInterval(this._isDriving);
        this._isDriving = false;
      }
    }, 1000);
  }

  refuel(amount) {
    this.gasLeft = amount;
  }
}