import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  initAuthListener() {
    this.auth.authState.subscribe(fUser =>{});
  }

  createUser(name: string, email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
            .then(fbUser => {
              const userId = fbUser?.user?.uid ?? '';
              const newUser = new User(userId, name, email);
              return this.firestore.doc(`${userId}/user`).set({...newUser});
            });

  }

  logInUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logOutUser() {
      return this.auth.signOut();
  }

  isAuth() {
      return this.auth.authState.pipe(
        map(fbUser => {
          return fbUser != null;
        })
      );
  }

}
