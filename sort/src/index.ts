import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";



const Numbers = new NumbersCollection([10, 3, -5, 0]);

const sorter = new Sorter(Numbers);
sorter.sort();

console.log(sorter.collection);
