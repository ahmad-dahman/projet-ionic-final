import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public navCtrl: NavController, private menu: MenuController){}
  
  NavigateToAppareils(){
    this.navCtrl.navigateForward("/appareils");
  }

  openMenu() {
    this.menu.open();
  }

}
