import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { SuppliersModel } from '../../master/model/pr.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  title = 'Supplier Register';
  @ViewChild('sup') sup: ElementRef;
  supArray: SuppliersModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetSuppliers()
      .subscribe(
        (res) => {
          if (res.json() === null) {
            this.supArray.push({ sp: 'Fujitsu Thailand' });
            this.adminService.OnSaveSuppliers(this.supArray);
          } else {
            this.supArray = res.json();
          }
        },
        (error) => console.log('Error initial data!! -> ' + error)
      );
  }

  Add() {
    const sup: string = this.sup.nativeElement.value;
    if ( sup.trim() !== '') {
      const checkDuplicate = this.supArray.indexOf({ sp: sup});
      if (checkDuplicate !== -1) {
        console.log('Item is duplicate!!');
      } else {
        this.supArray.push({ sp: this.sup.nativeElement.value });
        this.sup.nativeElement.value = '';
        this.adminService.OnSaveSuppliers(this.supArray);
      }
    } else {
      this.sup.nativeElement.value = '';
    }
  }

  deleteitem(index: number) {
    this.supArray.splice(index, 1);
    this.adminService.OnSaveSuppliers(this.supArray);
  }
}

