import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoLibreComercioPage } from './tratado-libre-comercio.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoLibreComercioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoLibreComercioPage]
})
export class TratadoLibreComercioPageModule {}
