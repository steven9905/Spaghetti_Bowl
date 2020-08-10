import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoParcialParaguayPage } from './acuerdo-parcial-paraguay.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoParcialParaguayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoParcialParaguayPage]
})
export class AcuerdoParcialParaguayPageModule {}
