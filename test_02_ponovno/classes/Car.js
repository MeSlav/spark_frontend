import Vehicle from './Vehicle.js';

function Car(manufacturer, price, gasTankSize) {
  Vehicle.call(this, 'car', manufacturer, price, 4);
  this.gasTankSize = gasTankSize;
  this._gasLeft = gasTankSize;
  this.engineRunning = false;
  this.isDriving = false;

  Object.defineProperty(this, 'gasLeft', {
    set(value) {
      if (value <= 0) {
        this._gasLeft = 0;
      } else if (value >= this.gasTankSize) {
        this._gasLeft = this.gasTankSize;
      } else {
        this._gasLeft = value;
      }
    },
    get() {
      return this._gasLeft;
    }
  })
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.startEngine = function () {
  if (this.engineRunning) {
    console.log('Engine is already running!');
    return;
  } else if (!this.inOrder) {
    console.log('Car is out of order and needs to be fixed first.');
    return;
  }
 
  this.engineRunning = setInterval(() => {
    if (this.gasLeft > 0.01) {
      this.gasLeft = Math.round((this.gasLeft - 0.01) * 100) / 100;
      console.log(`Engine running${this.isDriving ? ' and car driving' : ''}, fuel remaining: ${this.gasLeft}`);
    } else if (this.gasLeft < 0.01) {
      console.log('Engine is shutting down, please refuel!');
      this.stopEngine();
      return;
    }
    
    if (this.gasLeft < (this.gasTankSize * 10 / 100)) {
      console.log('Fuel low! Please refuel at nearest gas station!');
      return;
    }
  }, 1000);
};

Car.prototype.stopEngine = function () {
  clearInterval(this.engineRunning);
  this.engineRunning = false;
  this.stopDriving();
};

Car.prototype.drive = function (seconds) {
  if (!this.engineRunning) {
    console.log('Engine must be running. Start the car please!');
    return;
  } else if (this.isDriving) {
    console.log('Car is already driving.');
    return;
  }

  let current = 0;
  this.isDriving = setInterval(() => {
    if (current < seconds) {
      if (this.gasLeft >= 0.1) {
        current ++;
        this.gasLeft = Math.round((this.gasLeft - 0.1) * 100) / 100;
      } else {
        console.log('There is no fuel left. Please refuel!');
        this.stopDriving();
        return;
      }
    } else {
      console.log('Drive finished! Fuel remaining: ' + this.gasLeft);
      this.stopDriving();
      return;
    }
  }, 1000);
};

Car.prototype.stopDriving = function() {
  clearInterval(this.isDriving);
  this.isDriving = false;
}

Car.prototype.refuel = function (amount) {
  this.gasLeft = amount;
};


export default Car;