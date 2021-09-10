class Vehicle {
    // public drive(): void{
    //     console.log(`I'm driving`)
    // }

    // color: string = 'red';
    //
    // constructor(color: string) {
    //     this.color = color;
    // }

    constructor(public color: string) {}

    public stop(): void{
        console.log(`I've stoped`)
    }

    protected beep(): void {
        console.log('Beeeep')
    }
}


class Car extends Vehicle{

    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void{
        console.log(`I'm car and i'm driving`)
    }
    startDrivingProcess(): void {
        this.drive();
        this.beep();
    }
}

// const vehicle = new Vehicle('green');
// console.log(vehicle.color)
// vehicle.stop();


const car = new Car(4,'green');
console.log(car.color)
// car.startDrivingProcess()