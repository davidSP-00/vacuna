import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/components/shared.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUWtfuGL-G8X9jxXavDKqB-TMqu9HyAoI'
    }),
    LoginPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
