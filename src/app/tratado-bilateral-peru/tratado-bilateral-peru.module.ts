import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralPeruPage } from './tratado-bilateral-peru.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralPeruPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralPeruPage]
})
export class TratadoBilateralPeruPageModule {}
