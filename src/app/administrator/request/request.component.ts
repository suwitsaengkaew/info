import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { RequestbyModel } from '../../master/model/pr.model';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  title = 'RequestBy Register';
  @ViewChild('req') req: ElementRef;
  reqArray: RequestbyModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetRequest()
      .subscribe(
        (res) => {
          if (res.json() === null) {
            this.reqArray.push({ requestName : 'Suwit Saengkaew' });
            this.adminService.OnSaveRequest(this.reqArray);
          } else {
            this.reqArray = res.json();
          }
        },
        (error) => console.log('Error initial data!! -> ' + error)
      );
  }

  Add() {
    const req: string = this.req.nativeElement.value;
    if (req.trim() !== '') {
      const checkDuplicate = this.reqArray.indexOf({ requestName: req });
      if (checkDuplicate !== -1) {
        console.log('Item is duplicate!!');
      } else {
        this.reqArray.push({ requestName: this.req.nativeElement.value });
        this.req.nativeElement.value = '';
        this.adminService.OnSaveRequest(this.reqArray);
      }
    } else {
      this.req.nativeElement.value = '';
    }
  }

  deleteitem(index: number) {
    this.reqArray.splice(index, 1);
    this.adminService.OnSaveRequest(this.reqArray);
  }

}
