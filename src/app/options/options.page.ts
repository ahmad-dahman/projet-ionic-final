import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open();
  }

}
