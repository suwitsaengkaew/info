import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { UnitsModel } from '../../master/model/pr.model';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  title = 'Unit Register';
  serviceIsValid = false;
  checkdup = false;
  @ViewChild('unit') unit: ElementRef;
  unitArray: UnitsModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetUnit()
      .toPromise()
      .then(
        (res: Response) => this.unitArray = res.json()
      )
      .catch(
        (error: Response) => {
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
          checkDuplicate = checkdup.unit.indexOf(unit);
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
    this.adminService.OnSaveUnit([{ unit: unit }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.unitArray.push({ unit: unit });
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
    const _unit = this.unitArray[index].unit;
    this.adminService.OnDelUnit([{ unit: _unit }])
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
}
