import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { UnitsModel } from '../../master/model/pr.model';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  title = 'Unit Register';
  @ViewChild('unit') unit: ElementRef;
  unitArray: UnitsModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetUnit()
      .subscribe(
        (res) => {
          if (res.json() === null) {
            this.unitArray.push({ unit: 'SET' });
            this.adminService.OnSaveUnit(this.unitArray);
          } else {
            this.unitArray = res.json();
          }
        },
        (error) => console.log('Error initial data!! -> ' + error)
      );
  }

  Add() {
    const unit: string = this.unit.nativeElement.value;
    if ( unit.trim() !== '') {
      const checkDuplicate = this.unitArray.indexOf({ unit: unit});
      if (checkDuplicate !== -1) {
        console.log('Item is duplicate!!');
      } else {
        this.unitArray.push({ unit: this.unit.nativeElement.value });
        this.unit.nativeElement.value = '';
        this.adminService.OnSaveUnit(this.unitArray);
      }
    } else {
      this.unit.nativeElement.value = '';
    }
  }

  deleteitem(index: number) {
    this.unitArray.splice(index, 1);
    this.adminService.OnSaveUnit(this.unitArray);
  }
}
