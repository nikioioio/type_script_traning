let colors: string[] = ['red', 'yellow'];

let numbers: number[] = [1,2,3];

//classes

class Car{

}

let car: Car = new Car()

//obj titeral

let point: { x: number; y: number } = {
    x:10,
    y:20
}

//functions

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

//when to use annotation

const json = '{"x":10,"y":20}'

const coordinates: {x: number, y: number} = JSON.parse(json)

console.log(coordinates)

// when we declare a varible  on one line  and initialize it later
let words = ['one','two'];

let isTwo: boolean;

for (let i = 0; i< words.length; i++){
    if (words[i]==='two'){
        isTwo = true;
    }
}

//varibles whoes type can't be inferred

let myNumbers = [-10,2,-3]
let posiriveNumber: boolean | number = false;

for (let i = 0; i < myNumbers.length; i++){
    if (myNumbers[i] > 0){
        posiriveNumber = myNumbers[i];
    }
}
