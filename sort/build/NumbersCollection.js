"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftHand, rightHand) {
        return this.data[leftHand] > this.data[rightHand];
    }
    swap(leftHand, rightHand) {
        const leftHandValue = this.data[leftHand];
        this.data[leftHand] = this.data[rightHand];
        this.data[rightHand] = leftHandValue;
    }
}
exports.NumbersCollection = NumbersCollection;
