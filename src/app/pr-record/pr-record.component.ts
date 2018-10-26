import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pr-record',
  templateUrl: './pr-record.component.html',
  styleUrls: ['./pr-record.component.css']
})
export class PrRecordComponent implements OnInit {

  constructor() { }
  prrecordForm: FormGroup;

  ngOnInit() {
    this.onInitForm();
  }

  private onInitForm() {
    const pr_type = '';
    const pr_plant = '';
    const pr_profitCenter = '';
    const pr_requestby = '';
    const pr_no = '';
    const pr_supplier = '';
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
      new FormGroup ({
        'pr_desc': new FormControl(null, Validators.required),
        'pr_remark': new FormControl(null),
        'pr_qty': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'pr_unit': new FormControl(null, Validators.required),
        'pr_price': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'pr_curr': new FormControl(null, Validators.required),
      })
    );
  }

}
