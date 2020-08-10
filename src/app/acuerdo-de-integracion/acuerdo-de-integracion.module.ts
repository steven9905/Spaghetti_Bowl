import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoDeIntegracionPage } from './acuerdo-de-integracion.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoDeIntegracionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoDeIntegracionPage]
})
export class AcuerdoDeIntegracionPageModule {}
