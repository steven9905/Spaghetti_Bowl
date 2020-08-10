import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoCooperacionUruguayPage } from './acuerdo-cooperacion-uruguay.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoCooperacionUruguayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoCooperacionUruguayPage]
})
export class AcuerdoCooperacionUruguayPageModule {}
