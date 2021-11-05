import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemaVacunaPage } from './esquema-vacuna.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemaVacunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemaVacunaPageRoutingModule {}
