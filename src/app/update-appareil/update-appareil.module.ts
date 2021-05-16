import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAppareilPageRoutingModule } from './update-appareil-routing.module';

import { UpdateAppareilPage } from './update-appareil.page';
import { FooterPage } from '../footer/footer.page';
import { TabsPage } from '../tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAppareilPageRoutingModule
  ],
  declarations: [UpdateAppareilPage,FooterPage,TabsPage]
})
export class UpdateAppareilPageModule {}
