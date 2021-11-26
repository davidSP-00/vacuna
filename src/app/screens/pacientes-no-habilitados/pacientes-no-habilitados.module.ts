import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesNoHabilitadosPageRoutingModule } from './pacientes-no-habilitados-routing.module';

import { PacientesNoHabilitadosPage } from './pacientes-no-habilitados.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    PacientesNoHabilitadosPageRoutingModule
  ],
  declarations: [PacientesNoHabilitadosPage]
})
export class PacientesNoHabilitadosPageModule {}
