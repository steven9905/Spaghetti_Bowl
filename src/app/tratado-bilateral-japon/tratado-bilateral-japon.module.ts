import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralJaponPage } from './tratado-bilateral-japon.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralJaponPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralJaponPage]
})
export class TratadoBilateralJaponPageModule {}
