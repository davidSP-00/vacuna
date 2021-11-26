import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPadrePageRoutingModule } from './login-padre-routing.module';

import { LoginPadrePage } from './login-padre.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    LoginPadrePageRoutingModule
  ],
  declarations: [LoginPadrePage]
})
export class LoginPadrePageModule {}
