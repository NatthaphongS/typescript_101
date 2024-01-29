import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // data: number[];
  constructor(public data: number[]) {
    // this.data = data;
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const rigthhand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = rigthhand;
  }
}

// How to use length
// const collection = new NumberCollection([5,2,4,8,6,8])
// collection.length;
