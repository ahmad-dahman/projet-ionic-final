import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppareilsPageRoutingModule } from './appareils-routing.module';

import { AppareilsPage } from './appareils.page';
import { FooterPage } from '../footer/footer.page';
import { TabsPage } from '../tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppareilsPageRoutingModule
  ],
  declarations: [AppareilsPage, FooterPage,TabsPage]
})
export class AppareilsPageModule {}
