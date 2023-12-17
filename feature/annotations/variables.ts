// Inference is a scenario that Typescript can predict the type of valiable

let apples: number = 5;
apples = 4;
// apples = '5'

// let speed:string = 'fast'

let hasName = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//  built in object
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car2 {}
let car: Car2 = new Car2();

// Object kiteral
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let speed = 'fast';
// if we declaration and initialization in one line the TypeScript will auto figure out (Inference)
// when we must annotations the type? Answer in 3 scenario

// 1. Function that return the 'any' type
const json = '{"x":10,"y":20}';
// const coordinates = JSON.parse(json)
// JSON.parse can return any type value that up to stringInput "true"=>true(boolean),'4'=>4(number),'{"x":10,"y":20}'=>{x:10,y:20}({value:number})
// typeScript can't predict what will reture it will difine with any type so that we will use annotation
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10,y:20}

// 2. when we declare a valiable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
// let foundWord; // declare but initalizate later
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. Variable whose type connot be inference correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
