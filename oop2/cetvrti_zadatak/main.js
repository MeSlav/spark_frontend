class Heater {
    constructor(min, max) {
        this.temp = 0;
        this._increment = 12;
        this._min = min;
        this._max = max;
    }

    get increment() {
        return this._increment;
    }

    get min() {
        return this._min;
    }
    
    get max() {
        return this._max;
    }

    warmer() {
        const temperature = this.temp + this.increment;
        if (temperature > this.max) {
            this.temp = this.max;
        } else {
            this.temp = temperature;
        }

        console.log(this.temp);
    }

    cooler() {
        const temperature = this.temp - this.increment;
        if (temperature < this.min) {
            this.temp = this.min;
        } else {
            this.temp = temperature;
        }

        console.log(this.temp);
    }
}

const heater = new Heater(-10, 40);

heater.warmer();
heater.warmer();
heater.warmer();
heater.warmer();
heater.warmer();
heater.warmer();
