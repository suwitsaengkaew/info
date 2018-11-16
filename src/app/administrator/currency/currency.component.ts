import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { CurrenciesModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  title = 'Currency Register';
  serviceIsValid = false;
  checkdup = false;
  @ViewChild('curr') curr: ElementRef;
  currArray: CurrenciesModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetCurrency()
      .toPromise()
      .then(
        (res: Response) => this.currArray = res.json()
      )
      .catch(
        (error: Response) => {
          console.log('Error initial data!! -> ' + error);
          this.serviceIsValid = true;
        }
      );
  }

  Add() {
    const arrlen = this.currArray.length;
    const curr: string = this.curr.nativeElement.value;
    if (curr.trim() !== '') {
      if (arrlen === 0) {
        this.addfuction(curr);
        this.curr.nativeElement.value = '';
      } else {
        let checkDuplicate: number;
        this.currArray.forEach((checkdup) => {
          checkDuplicate = checkdup.curr.indexOf(curr);
        });
        if (checkDuplicate !== -1) {
          console.log('Item is duplicate!!');
          this.checkdup = true;
        } else {
          this.addfuction(curr);
          this.curr.nativeElement.value = '';
          this.serviceIsValid = false;
          this.checkdup = false;
        }
      }
    } else {
      this.curr.nativeElement.value = '';
    }
  }

  private addfuction(curr: string) {
    this.adminService.OnSaveCurrency([{ curr: curr }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.currArray.push({ curr: curr });
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          this.serviceIsValid = !this.serviceIsValid;
        }
      );
  }

  deleteitem(index: number) {
    const _curr = this.currArray[index].curr;
    this.adminService.OnDelCurrency([{ curr: _curr }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.currArray.splice(index, 1);
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
        }
      );
  }
}
