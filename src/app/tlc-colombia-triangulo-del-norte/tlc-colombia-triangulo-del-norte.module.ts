import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TLCColombiaTrianguloDelNortePage } from './tlc-colombia-triangulo-del-norte.page';

const routes: Routes = [
  {
    path: '',
    component: TLCColombiaTrianguloDelNortePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TLCColombiaTrianguloDelNortePage]
})
export class TLCColombiaTrianguloDelNortePageModule {}
