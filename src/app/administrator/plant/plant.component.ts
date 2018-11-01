import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { PlantModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  title = 'Plant Register';
  @ViewChild('plant') plant: ElementRef;
  plantArray: PlantModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetPlant()
      .subscribe(
        (res) => {
          if (res.json() === null) {
            this.plantArray.push({ plantName : 'TBS' });
            this.adminService.OnSavePlant(this.plantArray);
          } else {
            this.plantArray = res.json();
          }
        },
        (error) => console.log('Error initial data!! -> ' + error)
      );
  }

  Add() {
    const plant: string = this.plant.nativeElement.value;
    if (plant.trim() !== '') {
      const checkDuplicate = this.plantArray.indexOf({ plantName: plant });
      if (checkDuplicate !== -1) {
        console.log('Item is duplicate!!');
      } else {
        this.plantArray.push({ plantName: this.plant.nativeElement.value });
        this.plant.nativeElement.value = '';
        this.adminService.OnSavePlant(this.plantArray);
      }
    } else {
      this.plant.nativeElement.value = '';
    }
  }

  deleteitem(index: number) {
    this.plantArray.splice(index, 1);
    this.adminService.OnSavePlant(this.plantArray);
  }
}
