import { Component } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { TabsPage } from './tabs/tabs.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage:any = TabsPage;
  isAuth=false;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, private content: NavController, 
    private menu: MenuController, private router: Router) {      
      platform.ready().then(() => {
      var firebaseConfig = {
        apiKey: "AIzaSyBy7wfe-nOa_-dxIHQkSm3jZXCMEnzdCeU",
        authDomain: "mon-projet-ionic-d85c3.firebaseapp.com",
        projectId: "mon-projet-ionic-d85c3",
        storageBucket: "mon-projet-ionic-d85c3.appspot.com",
        messagingSenderId: "436738243663",
        appId: "1:436738243663:web:3a1237248b49ff3852be3a",
        measurementId: "G-ZFZ902J39M"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      firebase.auth().onAuthStateChanged(
        (user) => {
          console.log(user)
          if (user) {
            this.isAuth = true;            
            //this.router.navigate(['auth', {mode: 'connect'}]);
          } else {
            this.isAuth = false;
            this.router.navigate(['auth', {mode: 'connect'}]);
          }
        }
      );
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  onDisconnect() {
    firebase.auth().signOut();
    this.isAuth=false;
    this.menu.close();
  }

  onNavigate(pagehome: any) {
    this.router.navigate(["/"+pagehome])
    this.menu.close();
  }
  onAuth(pagehome: any,mode:any) {
    this.router.navigate(["/"+pagehome,{mode:mode}])
    this.menu.close();
  }

  openMenu() {
    this.menu.open();
  }
}
