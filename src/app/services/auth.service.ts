import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  constructor(private menuCtrl: MenuController) {
    firebase.auth().onAuthStateChanged((user) => {
      
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
   }

   signUpUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signOut() {
    firebase.auth().signOut();
  }
  

}
