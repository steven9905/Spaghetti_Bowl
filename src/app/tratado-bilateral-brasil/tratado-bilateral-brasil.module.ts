import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralBrasilPage } from './tratado-bilateral-brasil.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralBrasilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralBrasilPage]
})
export class TratadoBilateralBrasilPageModule {}
