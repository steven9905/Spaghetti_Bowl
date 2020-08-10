import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoCooperacionArgentinaPage } from './acuerdo-cooperacion-argentina.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoCooperacionArgentinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoCooperacionArgentinaPage]
})
export class AcuerdoCooperacionArgentinaPageModule {}
