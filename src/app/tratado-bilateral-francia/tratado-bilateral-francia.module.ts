import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralFranciaPage } from './tratado-bilateral-francia.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralFranciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralFranciaPage]
})
export class TratadoBilateralFranciaPageModule {}
