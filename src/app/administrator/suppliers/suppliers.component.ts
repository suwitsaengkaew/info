import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { UnitsModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  title = 'Supplier Register';
  serviceIsValid = false;
  checkdup = false;
  @ViewChild('sup') sup: ElementRef;
  supArray: UnitsModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetUnit(1)
      .toPromise()
      .then(
        (res: UnitsModel[]) => {
          console.log(res);
          this.supArray = res;
        }
      )
      .catch(
        (error: Response) => {
          console.log('Error initial data!! -> ' + error);
          this.serviceIsValid = true;
        }
      );
  }

  Add() {
    const arrlen = this.supArray.length;
    const sup: string = this.sup.nativeElement.value;
    if (sup.trim() !== '') {
      if (arrlen === 0) {
        this.addfuction(sup);
        this.sup.nativeElement.value = '';
      } else {
        let checkDuplicate: number;
        this.supArray.forEach((checkdup) => {
          checkDuplicate = checkdup.UNIT_NAME.indexOf(sup);
        });
        if (checkDuplicate !== -1) {
          console.log('Item is duplicate!!');
          this.checkdup = true;
        } else {
          this.addfuction(sup);
          this.sup.nativeElement.value = '';
          this.serviceIsValid = false;
          this.checkdup = false;
        }
      }
    } else {
      this.sup.nativeElement.value = '';
    }
  }

  private addfuction(sup: string) {
    this.adminService.OnPostUnit({ STD_ID: 1, UNIT_NAME: sup })
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.supArray.push({ STD_ID: 1, UNIT_NAME: sup });
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
    const _sup = this.supArray[index].UNIT_NAME;
    this.adminService.OnDelUnit(_sup)
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.supArray.splice(index, 1);
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
        }
      );
  }
}
