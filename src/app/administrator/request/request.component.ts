import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { RequestbyModel } from '../../master/model/pr.model';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  title = 'RequestBy Register';
  serviceIsValid = false;
  checkdup = false;
  @ViewChild('req') req: ElementRef;
  reqArray: RequestbyModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetRequest()
      .toPromise()
      .then(
        (res: Response) => this.reqArray = res.json()
      )
      .catch(
        (error: Response) => {
          console.log('Error initial data!! -> ' + error);
          this.serviceIsValid = true;
        }
      );
  }

  Add() {
    const arrlen = this.reqArray.length;
    const req: string = this.req.nativeElement.value;
    if (req.trim() !== '') {
      if (arrlen === 0) {
        this.addfuction(req);
        this.req.nativeElement.value = '';
      } else {
        let checkDuplicate: number;
        this.reqArray.forEach((checkdup) => {
          checkDuplicate = checkdup.requestName.indexOf(req);
        });
        if (checkDuplicate !== -1) {
          console.log('Item is duplicate!!');
          this.checkdup = true;
        } else {
          this.addfuction(req);
          this.req.nativeElement.value = '';
          this.serviceIsValid = false;
          this.checkdup = false;
        }
      }
    } else {
      this.req.nativeElement.value = '';
    }
  }

  private addfuction(req: string) {
    this.adminService.OnSaveRequest([{ requestName: req }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.reqArray.push({ requestName: req });
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
    const _req = this.reqArray[index].requestName;
    this.adminService.OnDelRequest([{ requestName: _req }])
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.reqArray.splice(index, 1);
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
        }
      );
  }
}
