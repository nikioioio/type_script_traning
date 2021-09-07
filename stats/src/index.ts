import {CsvFileReader} from "./CsvFileReader";

const scvFile = new CsvFileReader('105 football.csv');
scvFile.read();
const matches = scvFile.data;

//Enum - enumeration
enum MatchResult {
    Homewin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}


let manUnitedWins  = 0;

for (let match of matches){
    if (match[1] === 'Man United' && match[5] === MatchResult.Homewin){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

console.log(`Man united won ${manUnitedWins} times`);

