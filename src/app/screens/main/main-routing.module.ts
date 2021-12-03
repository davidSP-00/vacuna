import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainGuard } from 'src/app/guards/main.guard';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',

    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainPage,
    canActivate: [MainGuard],
    children: [
      {
        path: 'paciente-form',
        loadChildren: () => import('../paciente-form/paciente-form.module').then(m => m.PacienteFormPageModule)
      },

      {
        path: 'pacientes',
        loadChildren: () => import('../pacientes/pacientes.module').then(m => m.PacientesPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'esquema-vacuna',
        loadChildren: () => import('../esquema-vacuna/esquema-vacuna.module').then(m => m.EsquemaVacunaPageModule)
      },
      {
        path: 'vacunacion-form',
        loadChildren: () => import('../vacunacion-form/vacunacion-form.module').then(m => m.VacunacionFormPageModule)
      },
      {
        path: 'pacientes-no-habilitados',
        loadChildren: () => import('../pacientes-no-habilitados/pacientes-no-habilitados.module').then(m => m.PacientesNoHabilitadosPageModule)
      },
      {
        path: 'hijo-form',
        loadChildren: () => import('../hijo-form/hijo-form.module').then(m => m.HijoFormPageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('../mapa/mapa.module').then(m => m.MapaPageModule)
      },
      {
        path: 'medicos',
        loadChildren: () => import('../medicos/medicos.module').then(m => m.MedicosPageModule)
      }, {
        path: 'medico-form',
        loadChildren: () => import('../medico-form/medico-form.module').then( m => m.MedicoFormPageModule)
      },{
        path: 'reporte-vacunacion',
        loadChildren: () => import('../reporte-vacunacion/reporte-vacunacion.module').then( m => m.ReporteVacunacionPageModule)
      },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
