import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCP3fBbnL4-2w5m3eSucnsNrko6Otb70_U',
      authDomain: 'xhe-gsuite.firebaseapp.com',
    });
  }
}
