import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TLCColombiaEcuadorEUPeruPage } from './tlc-colombia-ecuador-eu-peru.page';

const routes: Routes = [
  {
    path: '',
    component: TLCColombiaEcuadorEUPeruPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TLCColombiaEcuadorEUPeruPage]
})
export class TLCColombiaEcuadorEUPeruPageModule {}
