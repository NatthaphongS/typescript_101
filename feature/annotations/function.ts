//annotations for function is code we add to tell TypeScript what type of argument and what type of return
//inference for function is TypeScript tries to figure-out(คิด) what type of return
const add = (a: number, b: number) => {
  return a + b;
};
// typescript check only type of argument and return not also logic in function

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function (a: number, b: number): number {
  return a * b;
};
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
// never : function never end == no return (normally use void)

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
