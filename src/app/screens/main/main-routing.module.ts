import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    
    redirectTo:'menu',
    pathMatch:'full'
  },
  {
    path: '',
    component: MainPage,
    children:[
     {
       path:'paciente-form', 
       loadChildren: () => import('../paciente-form/paciente-form.module').then( m => m.PacienteFormPageModule)
      },
      
       {
         path: 'pacientes',
         loadChildren: () => import('../pacientes/pacientes.module').then( m => m.PacientesPageModule)
       },
       {
         path: 'menu',
         loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
       }
    ]
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
