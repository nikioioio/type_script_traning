export class NumberCollection implements Collection {

    length: number;

    constructor(public data: number[]) {
        this.length = this.data.length;
    }

    swap(i: number, j: number): void {
        const leftHand = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = leftHand;
    }

    compare(i: number, j: number): boolean {
        if (this.data[i] > this.data[j]) {
            return true;
        }
        return false;
    }


}