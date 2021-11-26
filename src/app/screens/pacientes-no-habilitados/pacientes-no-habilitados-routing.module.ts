import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesNoHabilitadosPage } from './pacientes-no-habilitados.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesNoHabilitadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesNoHabilitadosPageRoutingModule {}
