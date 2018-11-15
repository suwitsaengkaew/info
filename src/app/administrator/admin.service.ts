import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {
    CurrenciesModel,
    PlantModel,
    SuppliersModel,
    UnitsModel,
    PrTypeModel,
    RequestbyModel
 } from '../master/model/pr.model';

@Injectable()
export class AdminService {
    constructor(private http: Http) {}

    OnSaveCurrency(curr: CurrenciesModel[]) {
        const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://yoko-dev-6f6a4.firebaseio.com/currency.json', curr, {headers : _headers})
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    OnGetCurrency() {
        return this.http.get('https://yoko-dev-6f6a4.firebaseio.com/currency.json');
    }

    OnSaveSuppliers(suppliers: SuppliersModel[]) {
        const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://yoko-dev-6f6a4.firebaseio.com/suppliers.json', suppliers, {headers : _headers} )
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    OnGetSuppliers() {
        return this.http.get('https://yoko-dev-6f6a4.firebaseio.com/suppliers.json');
    }

    OnSavePlant(plants: PlantModel[]) {
        const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://yoko-dev-6f6a4.firebaseio.com/plants.json', plants, {headers : _headers} )
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    OnGetPlant() {
        return this.http.get('https://yoko-dev-6f6a4.firebaseio.com/plants.json');
    }

    /* Unit Section */
    OnDelUnit(unit: UnitsModel[]) {
        return this.http.put('http://info.ytmt.co.th/pr/delpr_stunit', JSON.stringify(unit).toString());
    }

    OnSaveUnit(unit: UnitsModel[]) {
        return this.http.put('http://info.ytmt.co.th/pr/putpr_stunit', JSON.stringify(unit).toString());
    }

    OnGetUnit() {
        return this.http.get('http://info.ytmt.co.th/pr/getpr_stunit');
    }
    /* Unit Section */

    OnSavePrType(prtype: PrTypeModel[]) {
        // const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://yoko-dev-6f6a4.firebaseio.com/pr.json', prtype)
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    OnGetPrType() {
        return this.http.get('https://yoko-dev-6f6a4.firebaseio.com/pr.json');
    }

    OnSaveRequest(req: RequestbyModel[]) {
        const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://yoko-dev-6f6a4.firebaseio.com/requestby.json', req, {headers : _headers} )
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    OnGetRequest() {
        return this.http.get('https://yoko-dev-6f6a4.firebaseio.com/requestby.json');
    }
}
