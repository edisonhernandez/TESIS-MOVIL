import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilFundacionPage } from './perfil-fundacion.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilFundacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilFundacionPage]
})
export class PerfilFundacionPageModule {}
