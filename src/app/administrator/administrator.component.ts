import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  prtype = false;
  prplant = false;
  prrequestby = false;
  prsuppliers = false;
  prunit = false;
  prcurrency = false;

  constructor() { }

  ngOnInit() {
  }

  onSelectRegisterItems(key: number) {
    switch (key) {
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
