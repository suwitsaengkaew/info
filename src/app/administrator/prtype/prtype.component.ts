import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { PrTypeModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-prtype',
  templateUrl: './prtype.component.html',
  styleUrls: ['./prtype.component.css']
})
export class PrtypeComponent implements OnInit {
  title = 'PR Type Register';
  @ViewChild('pr') pr: ElementRef;
  prTypeArray: PrTypeModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetPrType()
      .subscribe(
        (res) => {
          if (res.json() === null) {
            this.prTypeArray.push({ prtype : 'Investment' });
            this.adminService.OnSavePrType(this.prTypeArray);
          } else {
            this.prTypeArray = res.json();
          }
        },
        (error) => console.log('Error initial data!! -> ' + error)
      );
  }

  Add() {
    const pr: string = this.pr.nativeElement.value;
    if (pr.trim() !== '') {
      const checkDuplicate = this.prTypeArray.indexOf({ prtype: pr });
      if (checkDuplicate !== -1) {
        console.log('Item is duplicate!!');
      } else {
        this.prTypeArray.push({ prtype: this.pr.nativeElement.value });
        this.pr.nativeElement.value = '';
        this.adminService.OnSavePrType(this.prTypeArray);
      }
    } else {
      this.pr.nativeElement.value = '';
    }
  }

  deleteitem(index: number) {
    this.prTypeArray.splice(index, 1);
    this.adminService.OnSavePrType(this.prTypeArray);
  }
}
