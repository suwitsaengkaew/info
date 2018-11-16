import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { PrTypeModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-prtype',
  templateUrl: './prtype.component.html',
  styleUrls: ['./prtype.component.css']
})
export class PrtypeComponent implements OnInit {
  title = 'PR Type Register';
  serviceIsValid = false;
  checkdup = false;
  @ViewChild('pr') pr: ElementRef;
  prTypeArray: PrTypeModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetPrType()
      .toPromise()
      .then(
        (res: Response) => this.prTypeArray = res.json()
      )
      .catch(
        (error: Response) => {
          console.log('Error initial data!! -> ' + error);
          this.serviceIsValid = true;
        }
      );
  }

  Add() {
    const arrlen = this.prTypeArray.length;
    const pr: string = this.pr.nativeElement.value;
    if (pr.trim() !== '') {
      if (arrlen === 0) {
        this.addfuction(pr);
        this.pr.nativeElement.value = '';
      } else {
        let checkDuplicate: number;
        this.prTypeArray.forEach((checkdup) => {
          checkDuplicate = checkdup.prtype.indexOf(pr);
        });
        if (checkDuplicate !== -1) {
          console.log('Item is duplicate!!');
          this.checkdup = true;
        } else {
          this.addfuction(pr);
          this.pr.nativeElement.value = '';
          this.serviceIsValid = false;
          this.checkdup = false;
        }
      }
    } else {
      this.pr.nativeElement.value = '';
    }
  }

  private addfuction(pr: string) {
    this.adminService.OnSavePrType([{ prtype: pr }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.prTypeArray.push({ prtype: pr });
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
    const _pr = this.prTypeArray[index].prtype;
    this.adminService.OnDelPrType([{ prtype: _pr }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.prTypeArray.splice(index, 1);
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
        }
      );
  }
}
