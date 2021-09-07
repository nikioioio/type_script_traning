import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([1, -4, 3, 2, 29]);

numberCollection.sort();

console.log(numberCollection.data)