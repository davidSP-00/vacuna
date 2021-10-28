import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteFormPageRoutingModule } from './paciente-form-routing.module';

import { PacienteFormPage } from './paciente-form.page';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteFormPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatStepperModule,
  ],
  declarations: [PacienteFormPage]
})
export class PacienteFormPageModule {}
