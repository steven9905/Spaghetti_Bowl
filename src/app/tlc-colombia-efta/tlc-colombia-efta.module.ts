import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TLCColombiaEFTAPage } from './tlc-colombia-efta.page';

const routes: Routes = [
  {
    path: '',
    component: TLCColombiaEFTAPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TLCColombiaEFTAPage]
})
export class TLCColombiaEFTAPageModule {}
