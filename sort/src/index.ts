import { NumberCollection } from './NumberCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumberCollection([1, -4, 3, 2, 29]);

const sorter = new Sorter(numberCollection);

sorter.sort();

console.log(sorter.collection.data);
