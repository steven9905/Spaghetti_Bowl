import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoParcialBrasilPage } from './acuerdo-parcial-brasil.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoParcialBrasilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoParcialBrasilPage]
})
export class AcuerdoParcialBrasilPageModule {}
