class Vehicle {
  // color: string = 'black';
  constructor(public color: string) {
    // this.color = color;
  }
  drive(): void {
    console.log('chugga chugga');
  }
  _honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  #drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.#drive();
    this._honk();
  }
  constructor(public wheels: number, public color: string) {
    super(color);
  }
}

const vehicle = new Vehicle('white');
console.log(vehicle.color);

const car = new Car(4, 'red');
car.drive();
