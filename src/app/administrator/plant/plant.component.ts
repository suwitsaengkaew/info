import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { UnitsModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  title = 'Plant Register';
  serviceIsValid = false;
  checkdup = false;
  @ViewChild('plant') plant: ElementRef;
  plantArray: UnitsModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetUnit(4)
      .toPromise()
      .then(
        (res: UnitsModel[]) => {
          console.log(res);
          this.plantArray = res;
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
    const arrlen = this.plantArray.length;
    const plant: string = this.plant.nativeElement.value;
    if (plant.trim() !== '') {
      if (arrlen === 0) {
        this.addfuction(plant);
        this.plant.nativeElement.value = '';
      } else {
        let checkDuplicate: number;
        this.plantArray.forEach((checkdup) => {
          checkDuplicate = checkdup.UNIT_NAME.indexOf(plant);
        });
        if (checkDuplicate !== -1) {
          console.log('Item is duplicate!!');
          this.checkdup = true;
        } else {
          this.addfuction(plant);
          this.plant.nativeElement.value = '';
          this.serviceIsValid = false;
          this.checkdup = false;
        }
      }
    } else {
      this.plant.nativeElement.value = '';
    }
  }

  private addfuction(plant: string) {
    this.adminService.OnPostUnit({ STD_ID: 4, UNIT_NAME: plant })
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.plantArray.push({ STD_ID: 4, UNIT_NAME: plant });
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
    const _plant = this.plantArray[index].UNIT_NAME;
    this.adminService.OnDelUnit(_plant)
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.plantArray.splice(index, 1);
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
        }
      );
  }
}
