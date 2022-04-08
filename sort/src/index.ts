import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const charactersCollection = new CharactersCollection(
	"Xaayzhvhgvfxkngzafsghkmjoihbkkjhbfxab"
);
const Numbers = new NumbersCollection([10, 3, -5, 0]);
const linkedList = new LinkedList();

linkedList.add(400);
linkedList.add(575);
linkedList.add(66);
const sorter = new Sorter(linkedList);
sorter.sort();


linkedList.print();

console.log(charactersCollection.data);
