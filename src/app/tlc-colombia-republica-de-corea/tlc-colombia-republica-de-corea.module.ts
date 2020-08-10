import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TLCColombiaRepublicaDeCoreaPage } from './tlc-colombia-republica-de-corea.page';

const routes: Routes = [
  {
    path: '',
    component: TLCColombiaRepublicaDeCoreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TLCColombiaRepublicaDeCoreaPage]
})
export class TLCColombiaRepublicaDeCoreaPageModule {}
