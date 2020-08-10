import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralCubaPage } from './tratado-bilateral-cuba.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralCubaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralCubaPage]
})
export class TratadoBilateralCubaPageModule {}
