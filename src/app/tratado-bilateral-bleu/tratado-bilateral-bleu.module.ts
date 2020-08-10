import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralBleuPage } from './tratado-bilateral-bleu.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralBleuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralBleuPage]
})
export class TratadoBilateralBleuPageModule {}
