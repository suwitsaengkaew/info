import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PrinputdataModel } from '../master/model/pr.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class PrRecordService {
    constructor(private http: HttpClient) {}

    OnGetUnit(stdId: number) {
        return this.http.get('http://intra.ytmt.co.th:4000/unitstd/' + stdId);
    }

    OnPostPrRecord(pr_input: PrinputdataModel) {
        const jsontext = JSON.stringify(pr_input);
        console.log(jsontext);
        return this.http.post('', jsontext, httpOptions);
    }

}
