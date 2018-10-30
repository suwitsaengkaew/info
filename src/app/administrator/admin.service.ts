import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { CurrenciesModel } from '../master/model/pr.model';

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

    OnSaveSuppliers(suppliers) {
        const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://yoko-dev-6f6a4.firebaseio.com/suppliers.json', suppliers, {headers : _headers} )
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    OngetCostCenter() {
        return this.http.get('https://yoko-dev-6f6a4.firebaseio.com/costcenter.json');
    }
}
