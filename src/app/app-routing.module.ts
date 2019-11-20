import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
 { path: 'inicio', loadChildren: './components/inicio/inicio.module#InicioPageModule' },
  { path: 'login', loadChildren: './components/login/login.module#LoginPageModule' },
  { path: 'registro-final', loadChildren: './components/registro-final/registro-final.module#RegistroFinalPageModule' },
  { path: 'registro-proceso/:user/:pass', loadChildren: './components/registro-proceso/registro-proceso.module#RegistroProcesoPageModule' },
  { path: 'registro', loadChildren: './components/registro/registro.module#RegistroPageModule' },
  { path: 'perfil-mascota/:id', loadChildren: './components/perfil-mascota/perfil-mascota.module#PerfilMascotaPageModule' },
  { path: 'fundaciones', loadChildren: './components/fundacion/fundaciones/fundaciones.module#FundacionesPageModule' },
  { path: 'perfil-fundacion/:id', loadChildren: './components/perfil-fundacion/perfil-fundacion.module#PerfilFundacionPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
