import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoParcialPage } from './acuerdo-parcial.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoParcialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoParcialPage]
})
export class AcuerdoParcialPageModule {}
