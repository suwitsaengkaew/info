// import * as firebase from 'firebase';

// export class AuthService {
//     signinUser(email: string, password: string) {
//         firebase.auth().signInWithEmailAndPassword(email, password)
//         .then(
//             response => console.log(response)
//         )
//         .catch(
//             error => console.log(error)
//         );
//     }
// }

import { Authenticates } from '../master/data/data.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor() {}

    getAuthentication() {
        const authenUser = Authenticates;
        return authenUser;
    }
}
