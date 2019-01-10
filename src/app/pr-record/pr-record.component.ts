import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PrRecordService } from './pr-record.service';
import { UnitsModel } from '../master/model/pr.model';

@Component({
  selector: 'app-pr-record',
  templateUrl: './pr-record.component.html',
  styleUrls: ['./pr-record.component.css']
})
export class PrRecordComponent implements OnInit {

  constructor(private prRecordService: PrRecordService) { }
  prrecordForm: FormGroup;

  Units: UnitsModel[] = [{STD_ID: 0, UNIT_NAME: 'Please select'}];
  Suppliers: UnitsModel[] = [{STD_ID: 0, UNIT_NAME: 'Please select'}];
  Requests: UnitsModel[] = [{STD_ID: 0, UNIT_NAME: 'Please select'}];
  PrTypes: UnitsModel[] = [{STD_ID: 0, UNIT_NAME: 'Please select'}];
  Plants: UnitsModel[] = [{STD_ID: 0, UNIT_NAME: 'Please select'}];
  Currencies: UnitsModel[] = [{STD_ID: 0, UNIT_NAME: 'Please select'}];

  ngOnInit() {
    this.onInitForm();
    this.onInitData();
  }

  private onInitData() {
    this.prRecordService.OnGetUnit()
      .toPromise()
      .then(
        (res: UnitsModel[]) => {
          res.filter((r) => {
            switch (r.STD_ID) {
              case 0:
                this.Units.push(r);
                break;
              case 1:
                this.Suppliers.push(r);
                break;
              case 2:
                this.Requests.push(r);
                break;
              case 3:
                this.PrTypes.push(r);
                break;
              case 4:
                this.Plants.push(r);
                break;
              case 5:
                this.Currencies.push(r);
                break;
            }
          });
        })
      .catch(
        (error) => {
          console.log('Error initial data!! -> ' + JSON.stringify(error));
        }
      );

  }
  private onInitForm() {

    const pr_type = 'Please select';
    const pr_plant = 'Please select';
    const pr_profitCenter = 'Please select';
    const pr_requestby = 'Please select';
    const pr_no = '';
    const pr_supplier = 'Please select';
    const pr_date = '';
    const pr_invno = '';
    const pr_duedate = '';
    const pr_detail = new FormArray([]);

    this.prrecordForm = new FormGroup({
      'pr_type': new FormControl(pr_type, Validators.required),
      'pr_plant': new FormControl(pr_plant, Validators.required),
      'pr_profitCenter': new FormControl(pr_profitCenter, Validators.required),
      'pr_requestby': new FormControl(pr_requestby, Validators.required),
      'pr_no': new FormControl(pr_no, Validators.required),
      'pr_supplier': new FormControl(pr_supplier, Validators.required),
      'pr_date': new FormControl(pr_date, Validators.required),
      'pr_invno': new FormControl(pr_invno, Validators.required),
      'pr_duedate': new FormControl(pr_duedate, Validators.required),
      'pr_detail': pr_detail
    });
  }

  onSubmitpr() {

  }

  addDetail() {
    (<FormArray>this.prrecordForm.get('pr_detail')).push(
      new FormGroup({
        'pr_desc': new FormControl(null, Validators.required),
        'pr_remark': new FormControl(null),
        'pr_qty': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'pr_unit': new FormControl(null, Validators.required),
        'pr_price': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'pr_curr': new FormControl(null, Validators.required),
      })
    );
  }

  minusDetail(index: number) {
    (<FormArray>this.prrecordForm.get('pr_detail')).removeAt(index);
  }

  clearform() {
    this.onInitForm();
  }
}
