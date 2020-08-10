import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TLCColombiaEstadoUnidosDeAmericaPage } from './tlc-colombia-estado-unidos-de-america.page';

const routes: Routes = [
  {
    path: '',
    component: TLCColombiaEstadoUnidosDeAmericaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TLCColombiaEstadoUnidosDeAmericaPage]
})
export class TLCColombiaEstadoUnidosDeAmericaPageModule {}
