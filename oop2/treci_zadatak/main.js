function TollBooth() {
    this.numOfCars = 0;
    this.moneyCollected = 0;
}

TollBooth.prototype.payingCar = function() {
    this.numOfCars++;
    this.moneyCollected += 0.5;
}

TollBooth.prototype.noPayCar = function() {
    this.numOfCars++;
}

TollBooth.prototype.display = function() {
    const noPayCars = this.numOfCars - this.moneyCollected / 0.5;

    console.log(`${this.numOfCars - noPayCars} have paid toll in total of ${this.moneyCollected}. ${noPayCars} didn't pay toll.`)
}

const tollBooth = new TollBooth();

tollBooth.payingCar();
tollBooth.payingCar();
tollBooth.noPayCar();
tollBooth.display();

/* 
let random = 1000;

const promise = new Promise((res, rej) => {
    if(random % 2) {
        res('noPayCar');
    } else {
        res('payingCar');
    }
});

setInterval(() => {
    random = Math.floor(Math.random() * 1000) + 1;
    promise
    .then(method => {
        tollBooth[method]();
        tollBooth.display();
    })
}, random);
*/