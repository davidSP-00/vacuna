import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteFormPage } from './paciente-form.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteFormPageRoutingModule {}
