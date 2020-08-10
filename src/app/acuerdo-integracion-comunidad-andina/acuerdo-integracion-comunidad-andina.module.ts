import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcuerdoIntegracionComunidadAndinaPage } from './acuerdo-integracion-comunidad-andina.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoIntegracionComunidadAndinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcuerdoIntegracionComunidadAndinaPage]
})
export class AcuerdoIntegracionComunidadAndinaPageModule {}
