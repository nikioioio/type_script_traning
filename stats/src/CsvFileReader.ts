import {readFileSync} from "fs";
import { MatchResult } from './MatchResult'



export class CsvFileReader {

    data: string[][] = [];

    constructor(public filename: string) {}

    read(): void {

        this.data = readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
    }
}