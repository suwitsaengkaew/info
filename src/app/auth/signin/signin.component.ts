import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticatesModel } from '../../master/model/model';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const authenticationUser = this.authService.getAuthentication();
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.signinUser(email, password);
    for (const user of authenticationUser) {
      if ((email === user.user) && (password === user.password)) {
        this.router.navigate(['home']);
      }
    }
  }

  onGetAuthenUser() {
    console.log(this.authService.getAuthentication());
  }

}
