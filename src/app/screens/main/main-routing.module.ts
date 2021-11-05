import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainGuard } from 'src/app/guards/main.guard';

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
    canActivate:[MainGuard],
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
       },
       {
        path: 'esquema-vacuna',
        loadChildren: () => import('../esquema-vacuna/esquema-vacuna.module').then( m => m.EsquemaVacunaPageModule)
      }
    ]
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
