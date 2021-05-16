import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAppareilPage } from './update-appareil.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAppareilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule, ReactiveFormsModule],
})
export class UpdateAppareilPageRoutingModule {}
