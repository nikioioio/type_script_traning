interface Collection{
    length: number;
    data: number[] | string;
    swap(i: number, j: number): void;
    compare(i: number, j: number): boolean;
}