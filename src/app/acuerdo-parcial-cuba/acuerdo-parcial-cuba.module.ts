import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoParcialCubaPage } from './acuerdo-parcial-cuba.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoParcialCubaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoParcialCubaPage]
})
export class AcuerdoParcialCubaPageModule {}
