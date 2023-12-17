// auto inference
const dates = [new Date(), new Date()];
const carMakers = ['ford', 'toyota', 'chevy'];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// need annotation
const carMakers2: string[] = [];
const carsByMake2: string[][] = [];

// help with inference when extracting value
const myCar = carMakers[0];
const myCars = carMakers.pop();

// prevent in compatible value
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car;
});
carMakers2.map((car) => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('test string');
importantDates.push(new Date());
importantDates.push(5555);
