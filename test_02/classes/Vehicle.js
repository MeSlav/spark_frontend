export default class Vehicle {
    constructor(type, manufacturer, price, numberOfWheels) {
        this._type = type;
        this._manufacturer = manufacturer;
        this._price = price;
        this._numberOfWheels = numberOfWheels;
        this._crashRegistry = [];
        this._inOrder = true;
        this._health = 100;
    }

    set price(value) {
        if (value < 0) {
            this._price = 0;
        } else {
            this._price = value;
        } 
    }

    set owner(value) {
        this._owner = value;
    }
    
    crash(type = 'small') {
        if (!this._inOrder) {
            console.log('Vehicile is already out of order!');
            return;
        }

        if (type !== 'medium' && type !== 'total') {
            type = 'small';
        }

        clearInterval(this._isDriving);
        this._isDriving = false;
        this.stopEngine();
        
        type = type.toLowerCase();
        switch(type) {
            case 'medium': 
                this.price = this._price - (this._price * 15/100);
                this._inOrder = false;
            break;
            case 'total':
                this.price = this._price - (this._price * 50/100);
                this._inOrder = false;
            break;
            default:
                this.price = this._price - (this._price * 5/100);
        }
        console.log(`Car had a ${type} crash, and it's price is valued at ${this._price}.`)
        this._crashRegistry.push({
            type,
            date: new Date().toLocaleString('en'),
        });
    }
}
