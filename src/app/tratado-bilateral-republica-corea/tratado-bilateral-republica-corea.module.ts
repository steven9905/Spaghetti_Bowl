import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratadoBilateralRepublicaCoreaPage } from './tratado-bilateral-republica-corea.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoBilateralRepublicaCoreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratadoBilateralRepublicaCoreaPage]
})
export class TratadoBilateralRepublicaCoreaPageModule {}
