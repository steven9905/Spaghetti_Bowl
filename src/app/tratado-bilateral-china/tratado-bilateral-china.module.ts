import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralChinaPage } from './tratado-bilateral-china.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralChinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralChinaPage]
})
export class TratadoBilateralChinaPageModule {}
