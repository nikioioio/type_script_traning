import {readFileSync} from "fs";
import {MatchResult} from '../MatchResult'



export abstract class CsvFileReader<T> {

    data: T[] = [];

    abstract mapRow(row: string[]): T;

    constructor(public filename: string) {}

    read(): void {

        this.data = readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow);
    }

}




// export class CsvFileReader {
//
//     data: MatchData[] = [];
//
//     constructor(public filename: string) {
//     }
//
//     read(): void {
//
//         this.data = readFileSync(this.filename, {
//             encoding: 'utf-8',
//         })
//             .split('\n')
//             .map((row: string): string[] => {
//                 return row.split(',');
//             })
//             .map(this.mapRow);
//     }
//
//     mapRow(row: string[]): MatchData {
//         return [
//             dateStringToDate(row[0]),
//             row[1],
//             row[2],
//             parseInt(row[3]),
//             parseInt(row[4]),
//             row[5] as MatchResult,
//             row[6],
//         ]
//
//     }
// }