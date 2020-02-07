function Vehicle(type, manufacturer, price, numberOfWheels) {
    this.type = type;
    this.manufacturer = manufacturer;
    this._price = price;
    this.numberOfWheels = numberOfWheels;
    this.crashRegistry = [];
    this.inOrder = true;
    Object.defineProperty(this, 'price', {
        set(value) {
            this._price = value <= 0 ? 0 : value;
        },
        get() {
            return this._price;
        }
    });
};

Vehicle.prototype.crash = function (type) {
    if (!this.inOrder) {
        console.log('Car is already out of order!')
    }

    this.stopEngine();

    switch(type) {
        case 'medium': 
            this.inOrder = false;
            this.price -= this.price * 15 / 100;
            break;
        case 'total': 
            this.inOrder = false;
            this.price -= this.price * 50 / 100;
            break;
        default: 
            type = 'small';
            this.price -= this.price * 5 / 100;
    }

    const date = new Date().toLocaleString('en');

    this.crashRegistry.push({
        type,
        date,
    });

    console.log(`Vehicle had a ${type} crash on ${date}.`);
};

export default Vehicle;