import {dateStringToDate} from "./util";
import { MatchResult } from './MatchResult'
import {MatchReader} from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";

//Createan object that implemetns the DataReader interface and put him into object MatchReader (constructor input object DataReader))
const scvFile = new MatchReader(new CsvFileReader('105 football.csv'));
scvFile.load();

//MatchReader.matches
const matches = scvFile.matches



console.log(matches[0][0])






