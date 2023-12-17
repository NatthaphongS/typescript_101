// turple is array that specific value in each index of array in each index will refer to some property

// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
// };

// const pepsi: [string, boolean, number] = ['brown', true, 40];
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuple not usually use but it is a big point property on typescript
