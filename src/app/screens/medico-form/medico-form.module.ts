import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoFormPageRoutingModule } from './medico-form-routing.module';

import { MedicoFormPage } from './medico-form.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    MedicoFormPageRoutingModule
  ],
  declarations: [MedicoFormPage]
})
export class MedicoFormPageModule {}
