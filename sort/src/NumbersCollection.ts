export class NumbersCollection {
	data: number[];
	constructor(data: number[]) {
		this.data = data;
	}

    get length(): number {
        return this.data.length;
    }

	compare(leftHand: number, rightHand: number): boolean {
		return this.data[leftHand] > this.data[rightHand];
	}

    swap(leftHand: number, rightHand: number): void {
        const leftHandValue = this.data[leftHand];
        this.data[leftHand] = this.data[rightHand];
        this.data[rightHand] = leftHandValue;
    }
}
