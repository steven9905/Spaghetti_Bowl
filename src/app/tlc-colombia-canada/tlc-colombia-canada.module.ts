import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TLCColombiaCanadaPage } from './tlc-colombia-canada.page';

const routes: Routes = [
  {
    path: '',
    component: TLCColombiaCanadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TLCColombiaCanadaPage]
})
export class TLCColombiaCanadaPageModule { }
