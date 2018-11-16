import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  optionArray = [
    { id: 0, optionname: 'Please select!!' },
    { id: 1, optionname: 'PR TYPE' },
    { id: 2, optionname: 'PR Plant' },
    { id: 3, optionname: 'PR RequestBy' },
    { id: 4, optionname: 'PR Supplier' },
    { id: 5, optionname: 'PR Unit' },
    { id: 6, optionname: 'PR Currency' },
  ];

  prtype = false;
  prplant = false;
  prrequestby = false;
  prsuppliers = false;
  prunit = false;
  prcurrency = false;

  constructor() { }

  ngOnInit() {
  }

  onSelectRegisterItems(key) {
    const _key = +key; // or const _key = parseInt(key, 0);
    this.prtype = false;
    this.prplant = false;
    this.prrequestby = false;
    this.prsuppliers = false;
    this.prunit = false;
    this.prcurrency = false;

    switch (_key) {
      case 1:
        this.prtype = !this.prtype;
        break;
      case 2:
        this.prplant = !this.prplant;
        break;
      case 3:
        this.prrequestby = !this.prrequestby;
        break;
      case 4:
        this.prsuppliers = !this.prsuppliers;
        break;
      case 5:
        this.prunit = !this.prunit;
        break;
      case 6:
        this.prcurrency = !this.prcurrency;
        break;
    }
  }
}
