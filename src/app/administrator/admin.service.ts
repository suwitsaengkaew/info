import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
    CurrenciesModel,
    PlantModel,
    SuppliersModel,
    UnitsModel,
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

    /* Currency Section */
    OnSaveCurrency(curr: CurrenciesModel[]) {
        return this.http.put('https://info.ytmt.co.th/pr/putpr_stcurrency', JSON.stringify(curr).toString());
    }

    OnDelCurrency(curr: CurrenciesModel[]) {
        return this.http.put('https://info.ytmt.co.th/pr/delpr_stcurrency', JSON.stringify(curr).toString());
    }

    OnGetCurrency() {
        return this.http.get('https://info.ytmt.co.th/pr/getpr_stcurrency');
    }
    /* Currency Section */

    /* Suppliers Section */
    OnSaveSuppliers(suppliers: SuppliersModel[]) {
        return this.http.put('https://info.ytmt.co.th/pr/putpr_stsuppliers', JSON.stringify(suppliers).toString());
    }

    OnDelSuppliers(suppliers: SuppliersModel[]) {
        return this.http.put('https://info.ytmt.co.th/pr/delpr_stsuppliers', JSON.stringify(suppliers).toString());
    }

    OnGetSuppliers() {
        return this.http.get('https://info.ytmt.co.th/pr/getpr_stsuppliers');
    }
    /* Suppliers Section */

    /* Plant Section */
    OnSavePlant(plants: PlantModel[]) {
        return this.http.put('https://info.ytmt.co.th/pr/putpr_stplant', JSON.stringify(plants).toString());
    }

    OnDelPlant(plants: PlantModel[]) {
        return this.http.put('https://info.ytmt.co.th/pr/delpr_stplant', JSON.stringify(plants).toString());
    }

    OnGetPlant() {
        return this.http.get('https://info.ytmt.co.th/pr/getpr_stplant');
    }
    /* Plant Section */

    /* Unit Section */
    OnDelUnit(unit: UnitsModel[]) {
        return this.http.put('http://info.ytmt.co.th/pr/delpr_stunit', JSON.stringify(unit).toString());
    }

    OnSaveUnit(unit: UnitsModel) {
        const jsontext = JSON.stringify(unit);
        return this.http.put('http://info.ytmt.co.th/pr/putpr_stunit', jsontext);
    }

    OnPostUnit(unit: UnitsModel) {
        const jsontext = JSON.stringify(unit);
        console.log(jsontext);
        return this.http.post('http://info.ytmt.co.th/pr/postpr_stunit', jsontext);
    }

    OnGetUnit() {
        return this.http.get('http://intra.ytmt.co.th:4000/pr/getpr_stunit');
    }
    /* Unit Section */

    /* Type Section */
    OnSavePrType(prtype: PrTypeModel[]) {
        return this.http.put('http://info.ytmt.co.th/pr/putpr_sttype', JSON.stringify(prtype).toString());
    }

    OnDelPrType(prtype: PrTypeModel[]) {
        return this.http.put('http://info.ytmt.co.th/pr/delpr_sttype', JSON.stringify(prtype).toString());
    }

    OnGetPrType() {
        return this.http.get('http://info.ytmt.co.th/pr/getpr_sttype');
    }
    /* Type Section */

    /* Type Request */
    OnSaveRequest(req: RequestbyModel[]) {
        return this.http.put('http://info.ytmt.co.th/pr/putpr_streq', JSON.stringify(req).toString());
    }

    OnDelRequest(req: RequestbyModel[]) {
        return this.http.put('http://info.ytmt.co.th/pr/delpr_streq', JSON.stringify(req).toString());
    }

    OnGetRequest() {
        return this.http.get('http://info.ytmt.co.th/pr/getpr_streq');
    }
    /* Type Request */

    // private handleError(error: HttpErrorResponse) {
    //     if (error.error instanceof ErrorEvent) {
    //       // A client-side or network error occurred. Handle it accordingly.
    //       console.error('An error occurred:', error.error.message);
    //     } else {
    //       // The backend returned an unsuccessful response code.
    //       // The response body may contain clues as to what went wrong,
    //       console.error(
    //         `Backend returned code ${error.status}, ` +
    //         `body was: ${error.error}`);
    //     }
    //     // return an observable with a user-facing error message
    //     return throwError(
    //       'Something bad happened; please try again later.');
    //   };
}
