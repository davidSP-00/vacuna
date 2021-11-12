import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunacionFormPageRoutingModule } from './vacunacion-form-routing.module';

import { VacunacionFormPage } from './vacunacion-form.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    VacunacionFormPageRoutingModule
  ],
  declarations: [VacunacionFormPage]
})
export class VacunacionFormPageModule {}
