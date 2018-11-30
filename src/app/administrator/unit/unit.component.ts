import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { UnitsModel } from '../../master/model/pr.model';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  title = 'Unit Register';
  errormsg: string;
  checkdb = false;
  serviceIsValid = false;
  checkdup = false;
  @ViewChild('unit') unit: ElementRef;
  unitArray: UnitsModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetUnit(0)
      .toPromise()
      .then(
        (res: UnitsModel[]) => {
          console.log(res);
          this.unitArray = res;
        }
      )
      .catch(
        (error) => {
          console.log('Error initial data!! -> ' + error);
          this.serviceIsValid = true;
        }
      );
  }

  Add() {
    const arrlen = this.unitArray.length;
    const unit: string = this.unit.nativeElement.value;
    if (unit.trim() !== '') {
      if (arrlen === 0) {
        this.addfuction(unit);
        this.unit.nativeElement.value = '';
      } else {
        let checkDuplicate: number;
        this.unitArray.forEach((checkdup) => {
          checkDuplicate = checkdup.UNIT_NAME.indexOf(unit);
        });
        if (checkDuplicate !== -1) {
          console.log('Item is duplicate!!');
          this.checkdup = true;
        } else {
          this.addfuction(unit);
          this.unit.nativeElement.value = '';
          this.serviceIsValid = false;
          this.checkdup = false;
        }
      }
    } else {
      this.unit.nativeElement.value = '';
    }
  }

  private addfuction(unit: string) {
    this.adminService.OnPostUnit({ STD_ID: 0, UNIT_NAME: unit })
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.unitArray.push({ STD_ID: 0, UNIT_NAME: unit });
      },
      (error) => {
        console.log(error);
      }
    )
    .catch(
      (error) => {
        console.log(error);
        this.serviceIsValid = !this.serviceIsValid;
      }
    );
  }

  deleteitem(index: number) {
    const _unit = this.unitArray[index].UNIT_NAME;
    console.log(_unit);
    this.adminService.OnDelUnit(_unit)
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.unitArray.splice(index, 1);
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
        }
      );
  }

  clear() {
    this.checkdb = false;
    this.serviceIsValid = false;
    this.checkdup = false;
  }
}
