import { NumbersCollection } from './NumbersColloection';

// now we have only NumberCollection how to implement with CharactersCollection,LinkedList ?
// Answer is use interface we must think what are these must have for sortable => length,compare,swap

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean; //name of argument don't neeb to be same in any class but we should do for another can understand esily
  swap(leftIndex: number, rightIndex: number): void;
}

// make abstract class
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  // collection: number[];
  /* Refactor for inheritance Sorter remove collection
  constructor(public collection: Sortable) {
    // this.collection = collection;
  }
  */

  // Refactor for inheritance Sorter remove collection
  // in sort function we need to use function that was in child class but typescript don't know what we want so we use abstract class to fix this

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        /*
        // All of this only work if collection is number[]
        // If collection is an array of numbers
        if (this.collection instanceof Array) {
          //this call type guard
          // collection === number[]
          */
        /* before change to numberCollection
          if (this.collection[j] > this.collection[j + 1]) {
            const rigthhand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = rigthhand;
          }
          */
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
      /*
        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to compare and swap characters in a string
        if (typeof this.collection === 'string') {
          //this call type guard
        }
        */
    }
  }
}
