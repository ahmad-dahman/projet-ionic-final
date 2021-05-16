import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { __await } from 'tslib';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private alertCtrl: AlertController, private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open();
  }
  
  async onToggleLights() {
    let alert =  this.alertCtrl.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      message: 'Cette action allumera ou éteindra toutes les lumières de la maison !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    (await alert).present();
  }


}
