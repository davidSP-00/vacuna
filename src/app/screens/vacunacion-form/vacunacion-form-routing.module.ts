import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunacionFormPage } from './vacunacion-form.page';

const routes: Routes = [
  {
    path: '',
    component: VacunacionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunacionFormPageRoutingModule {}
