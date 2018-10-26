import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.forminit();
  }

  onSignin() {
    const userid = this.signinForm.value['inputEmail'];
    const userpass = this.signinForm.value['inputPassword'];
    this.authService.signinUser(userid, userpass);
    // if (this.authService) {
    //   this.router.navigate(['/mainpage']);
    // }
  }

  private forminit() {
    const userid = '';
    const userpass = '';
    this.signinForm = new FormGroup({
      'inputEmail': new FormControl(userid, Validators.required),
      'inputPassword': new FormControl(userpass, Validators.required)
    });
  }

}
