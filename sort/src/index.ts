import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const charactersCollection = new CharactersCollection(
	"Xaayzhvhgvfxkngzafsghkmjoihbkkjhbfxab"
);
const linkedList = new LinkedList();
const Numbers = new NumbersCollection([10, 3, -5, 0]);
Numbers.sort();
charactersCollection.sort();
console.log(Numbers.data);
console.log(charactersCollection.data);

linkedList.add(400);
linkedList.add(575);
linkedList.add(66);

linkedList.sort();

linkedList.print();
