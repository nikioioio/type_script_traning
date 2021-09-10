import { MatchData } from './MatchData'
import { WinsAnanlysis } from "./WinsAnanlysis";
import { HtmpReport } from "./reportTargets/HtmpReport";

export interface Analyzer{
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}


export class Summary{

    static getReportAnalysisWithHtmlReport(team: string){
        return new Summary(new WinsAnanlysis(team), new HtmpReport())
    }

    constructor(public analyzer: Analyzer,
                public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void{
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report)
    }


}