class StringCollection implements Collection{
    length: number;

    constructor(public data: string) {
        this.length = this.data.length;
    }

    compare(i: number, j: number): boolean {
        return false;
    }

    swap(i: number, j: number): void {
    }

}