import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralSingapurPage } from './tratado-bilateral-singapur.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralSingapurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralSingapurPage]
})
export class TratadoBilateralSingapurPageModule {}
