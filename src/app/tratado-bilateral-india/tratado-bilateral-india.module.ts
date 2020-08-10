import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralIndiaPage } from './tratado-bilateral-india.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralIndiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralIndiaPage]
})
export class TratadoBilateralIndiaPageModule {}
