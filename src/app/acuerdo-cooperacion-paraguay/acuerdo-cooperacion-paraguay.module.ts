import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoCooperacionParaguayPage } from './acuerdo-cooperacion-paraguay.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoCooperacionParaguayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoCooperacionParaguayPage]
})
export class AcuerdoCooperacionParaguayPageModule {}
