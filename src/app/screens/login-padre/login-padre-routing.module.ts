import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPadrePage } from './login-padre.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPadrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPadrePageRoutingModule {}
