function Vehicle(data) {
  this.name = data.name;
  this.type = data.type;
  this.nameOfManufacturer = data.manufacturer;
  this.year = data.buildYear;
  this.color = data.color;
  this.doors = data.doors;

  this.checkDoors = () => {
    this.hasDoors = this.doors >= 1;
    switch (this.doors) {
      case 5:
      case 4:
        this.doorType = "4/5 doors";
      case 3:
      case 2:
        this.doorType = "2/3 doors";
      default:
        this.doorType = "unknown";
    }
  };

  const vehicleTypes = [
    'plane',
    'train',
    'car',
    'spaceship',
  ];

  this.checkType = function () {
    this.vehicleType = vehicleTypes[this.type-1];
    return this.vehicleType;
  };
}

const porsche = new Vehicle({
  name: 'Porsche 911',
  type: 3,
  manufacturer: 'Porsche',
  buildYear: '2013',
  color: 'red',
  doors: 4,
});

const bentley = new Vehicle({
  name: 'Bentley 911',
  type: 3,
  manufacturer: 'Bentley',
  buildYear: '2013',
  color: 'red',
  doors: 4,
});

Vehicle.prototype.getValue = function (){
  let basePrice = 1000;

  return (this.year < 1950)
  ? basePrice *= 2
  : basePrice += 100;
}

porsche.checkDoors();

console.log(porsche);

let a = [1,2,3];
let b = [4,5,6];
let c = [];

b.forEach((numb, i) => {
  c[i] = numb * 4;
});

console.log(c);

c = b.map(numb => numb * 4);

console.log(c);