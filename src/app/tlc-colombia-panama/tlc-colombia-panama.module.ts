import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TLCColombiaPanamaPage } from './tlc-colombia-panama.page';

const routes: Routes = [
  {
    path: '',
    component: TLCColombiaPanamaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TLCColombiaPanamaPage]
})
export class TLCColombiaPanamaPageModule {}
