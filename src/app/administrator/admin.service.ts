import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UnitsModel,
    PrTypeModel,
    RequestbyModel
 } from '../master/model/pr.model';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/Operator/map';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class AdminService {
    constructor(private http: HttpClient) {}

    /* Unit Section */
    OnDelUnit(unit: string) {
        return this.http.delete('http://intra.ytmt.co.th:4000/unitstd/' + unit, );
    }

    OnPostUnit(unit: UnitsModel) {
        const jsontext = JSON.stringify(unit);
        console.log(jsontext);
        return this.http.post('http://intra.ytmt.co.th:4000/unitstd', jsontext, httpOptions);
    }

    OnGetUnit(stdId: number) {
        return this.http.get('http://intra.ytmt.co.th:4000/unitstd/' + stdId);
    }
    /* Unit Section */
}
