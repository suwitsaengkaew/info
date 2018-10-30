import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { CurrenciesModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  title = 'Currency Register';
  @ViewChild('curr') curr: ElementRef;
  currArray: CurrenciesModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetCurrency()
      .subscribe(
        (res) => {
          if (res.json() === null) {
            this.currArray.push({ curr: 'THB' });
          } else {
            this.currArray = res.json();
          }
        },
        (error) => console.log('Error initial data!! -> ' + error)
      );
  }

  Add() {
    const currency: string = this.curr.nativeElement.value;
    if ( currency.trim() !== '') {
      const checkDuplicate = this.currArray.indexOf({ curr: currency});
      if (checkDuplicate !== -1) {
        console.log('Item is duplicate!!');
      } else {
        this.currArray.push({ curr: this.curr.nativeElement.value });
        this.curr.nativeElement.value = '';
        this.adminService.OnSaveCurrency(this.currArray);
      }
    } else {
      this.curr.nativeElement.value = '';
    }

    // if (this.currArrayLen !== 0) {
    //   const checkCurrDup = this.currArray.indexOf({ curr: curr });
    //   if (checkCurrDup !== -1) {
    //     console.log('Item is duplicate!');
    //   } else {
    //     console.log(checkCurrDup);
    //     this.currArray.push({ curr: curr });
    //     this.adminService.OnSaveCurrency(this.currArray);
    //     this.curr.nativeElement.value = '';
    //   }
    // } else {
    //   this.currArray.push({ curr: 'test' });
    //   this.adminService.OnSaveCurrency(this.currArray);
    //   this.curr.nativeElement.value = '';
    // }
  }
}
