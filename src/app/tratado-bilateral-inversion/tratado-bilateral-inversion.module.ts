import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralInversionPage } from './tratado-bilateral-inversion.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralInversionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralInversionPage]
})
export class TratadoBilateralInversionPageModule {}
