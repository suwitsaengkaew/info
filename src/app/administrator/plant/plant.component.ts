import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { PlantModel } from '../../master/model/pr.model';

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
  plantArray: PlantModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetPlant()
      .toPromise()
      .then(
        (res: Response) => this.plantArray = res.json()
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
          checkDuplicate = checkdup.plantName.indexOf(plant);
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
    this.adminService.OnSavePlant([{ plantName: plant }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.plantArray.push({ plantName: plant });
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
    const _plant = this.plantArray[index].plantName;
    this.adminService.OnDelPlant([{ plantName: _plant }])
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
