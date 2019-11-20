import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule,MatButtonModule } from '@angular/material'

import { IonicModule } from '@ionic/angular';
import { MomentModule } from 'ngx-moment';

import { PerfilMascotaPage } from './perfil-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilMascotaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MomentModule
  ],
  declarations: [PerfilMascotaPage]
})
export class PerfilMascotaPageModule {}
