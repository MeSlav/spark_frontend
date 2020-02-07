export default class Mechanic {
  static fixCar(car) {
    const isTotaled = car._crashRegistry.some(crash => {
      return crash.type === 'total';
    });

    if (isTotaled) {
      console.log('Car cannot be fixed!');
      return;
    }

    car._inOrder = true;

    car._crashRegistry.forEach(crash => {
      crash.fixed = true;
      crash.dateFixed = new Date().toLocaleString('en');
    });
  }
}