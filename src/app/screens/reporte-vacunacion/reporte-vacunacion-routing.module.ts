import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteVacunacionPage } from './reporte-vacunacion.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteVacunacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteVacunacionPageRoutingModule {}
