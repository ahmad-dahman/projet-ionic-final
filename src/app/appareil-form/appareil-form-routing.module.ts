import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppareilFormPage } from './appareil-form.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AppareilFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule],
})
export class AppareilFormPageRoutingModule {}
