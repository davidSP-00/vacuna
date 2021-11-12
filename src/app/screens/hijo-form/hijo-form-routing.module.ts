import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HijoFormPage } from './hijo-form.page';

const routes: Routes = [
  {
    path: '',
    component: HijoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HijoFormPageRoutingModule {}
