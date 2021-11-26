import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 /*  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, */
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./screens/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'login-padre',
    loadChildren: () => import('./screens/login-padre/login-padre.module').then( m => m.LoginPadrePageModule)
  },
  {path: '**', redirectTo: 'login', pathMatch: 'full'},  {
    path: 'pacientes-no-habilitados',
    loadChildren: () => import('./screens/pacientes-no-habilitados/pacientes-no-habilitados.module').then( m => m.PacientesNoHabilitadosPageModule)
  },

  



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
