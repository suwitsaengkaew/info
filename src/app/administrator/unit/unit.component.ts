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
      .subscribe(
        (res) => {
          if (res.json().length === 0) {
            // this.unitArray.push();
            this.adminService.OnSaveUnit([{ unit: 'SET' }])
            .toPromise()
            .then(
              (response: Response) => {
                this.unitArray.push({ unit: 'SET' });
              }
            )
            .catch(
              (error: Response) => {
                console.log(error);
                this.serviceIsValid = !this.serviceIsValid;
              }
            );
          } else {
            this.unitArray = res.json();
          }
        },
        (error) => console.log('Error initial data!! -> ' + error)
      );
  }

  Add() {

    
    console.log(this.unitArray.length);
    const unit: string = this.unit.nativeElement.value;
    if ( unit.trim() !== '') {
      let checkDuplicate: number;
      this.unitArray.forEach( (checkdup) => {
        checkDuplicate = checkdup.unit.indexOf(unit);
      });
      // console.log(checkDuplicate);
      if (checkDuplicate !== -1) {
        console.log('Item is duplicate!!');
        this.checkdup = true;
      } else {
        this.adminService.OnSaveUnit([{ unit: this.unit.nativeElement.value }])
        .toPromise()
        .then(
          (response: Response) => {
            console.log(response);
            this.unitArray.push({ unit: this.unit.nativeElement.value });
            this.unit.nativeElement.value = '';
            this.serviceIsValid = false;
            this.checkdup = false;
          }
        )
        .catch(
          (error: Response) => {
            console.log(error);
            this.serviceIsValid = true;
          }
        );
      }
    } else {
      this.unit.nativeElement.value = '';
    }
  }

  deleteitem(index: number) {
    const _unit = this.unitArray[index].unit;
    this.adminService.OnDelUnit([{ unit: _unit}])
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
    // this.unitArray.splice(index, 1);
    // this.adminService.OnSaveUnit(this.unitArray);
  }
}
