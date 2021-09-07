interface Sortable{
    length: number;
    swap(i: number, j: number): void;
    compare(leftIndex: number, rightIndex: number): boolean;
}