import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralTurquiaPage } from './tratado-bilateral-turquia.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralTurquiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralTurquiaPage]
})
export class TratadoBilateralTurquiaPageModule {}
