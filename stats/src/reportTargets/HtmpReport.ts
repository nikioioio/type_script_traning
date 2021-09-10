import {OutputTarget} from "../Summary";
import * as fs  from 'fs'

export class HtmpReport implements OutputTarget {
    print(report: string): void {
        const textHtml = `
        <div>
            <hi>Analysis input</hi>
            <div>${report}</div>
        </div>
        `;
        fs.writeFileSync('report.html', textHtml)
    }


}