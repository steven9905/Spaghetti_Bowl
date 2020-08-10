import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralReinoUnidoPage } from './tratado-bilateral-reino-unido.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralReinoUnidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralReinoUnidoPage]
})
export class TratadoBilateralReinoUnidoPageModule {}
