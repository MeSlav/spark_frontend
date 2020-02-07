function Mechanic() { }

Mechanic.repair = function (vehicle) {
  if (vehicle.crashRegistry[vehicle.crashRegistry.length - 1].type === 'total') {
    console.log('Car cannot be fixed.');
    return;
  }

  vehicle.crashRegistry.forEach(crash => {
    if (!crash.fixed) {
      crash.fixed = true;
      crash.dateFixed = new Date().toLocaleString('en');
      console.log(`Vehicle of type ${vehicle.type}, which had a ${crash.type} crash on date of ${crash.date} has been fixed on ${crash.dateFixed}.`);
    }
  });

  vehicle.inOrder = true;
}

export default Mechanic;