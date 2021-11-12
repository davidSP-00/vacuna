import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HijoFormPageRoutingModule } from './hijo-form-routing.module';

import { HijoFormPage } from './hijo-form.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    HijoFormPageRoutingModule
  ],
  declarations: [HijoFormPage]
})
export class HijoFormPageModule {}
