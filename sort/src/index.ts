import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersColloection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/*
const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('GrpfdDgrzd');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(8);

const linkedSorter = new Sorter(linkedList);
linkedSorter.sort();
linkedList.paint();
*/

// how about if i want to call sort() with don't need to create Sorter object
// answer: extends every class by sorter.
const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('GrpfdDgrzd');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(8);

linkedList.sort();
linkedList.paint();
