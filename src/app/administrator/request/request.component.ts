import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';
import { UnitsModel } from '../../master/model/pr.model';
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
  unitArray: UnitsModel[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.OnGetUnit(2)
      .toPromise()
      .then(
        (res: UnitsModel[]) => {
          console.log(res);
          this.unitArray = res;
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
    const arrlen = this.unitArray.length;
    const req: string = this.req.nativeElement.value;
    if (req.trim() !== '') {
      if (arrlen === 0) {
        this.addfuction(req);
        this.req.nativeElement.value = '';
      } else {
        let checkDuplicate: number;
        this.unitArray.forEach((checkdup) => {
          checkDuplicate = checkdup.UNIT_NAME.indexOf(req);
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
    this.adminService.OnPostUnit({ STD_ID: 2, UNIT_NAME: req })
      .toPromise()
      .then(
        (response: Response) => {
          console.log(response);
          this.unitArray.push({ STD_ID: 2, UNIT_NAME: req });
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
    const _req = this.unitArray[index].UNIT_NAME;
    this.adminService.OnDelUnit(_req)
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
