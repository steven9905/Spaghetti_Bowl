import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoParcialArgentinaPage } from './acuerdo-parcial-argentina.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoParcialArgentinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoParcialArgentinaPage]
})
export class AcuerdoParcialArgentinaPageModule {}
