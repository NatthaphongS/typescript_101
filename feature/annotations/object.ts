const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number) {
    this.age = age;
  },
};
const { age, name }: { age: number; name: string } = profile;
// change name to username(or any) the error will be disappear

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
