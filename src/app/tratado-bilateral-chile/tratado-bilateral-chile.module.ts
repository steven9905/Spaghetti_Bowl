import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralChilePage } from './tratado-bilateral-chile.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralChilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralChilePage]
})
export class TratadoBilateralChilePageModule {}
