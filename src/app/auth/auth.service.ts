import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: String;

    constructor(
        private router: Router
    ) {}
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/mainpage']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                );
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    logoutUser() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                );
    }

    isAuthenticated() {
        return this.token != null;
    }

}
