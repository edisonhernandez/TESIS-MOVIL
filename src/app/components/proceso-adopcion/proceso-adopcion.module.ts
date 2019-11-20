import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcesoAdopcionPage } from './proceso-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesoAdopcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProcesoAdopcionPage]
})
export class ProcesoAdopcionPageModule {}
