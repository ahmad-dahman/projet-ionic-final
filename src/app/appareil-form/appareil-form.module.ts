import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppareilFormPageRoutingModule } from './appareil-form-routing.module';

import { AppareilFormPage } from './appareil-form.page';
import { FooterPage } from '../footer/footer.page';
import { TabsPage } from '../tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppareilFormPageRoutingModule
  ],
  declarations: [AppareilFormPage,FooterPage,TabsPage]
})
export class AppareilFormPageModule {}
