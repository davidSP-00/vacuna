import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemaVacunaPageRoutingModule } from './esquema-vacuna-routing.module';

import { EsquemaVacunaPage } from './esquema-vacuna.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EsquemaVacunaPageRoutingModule
  ],
  declarations: [EsquemaVacunaPage]
})
export class EsquemaVacunaPageModule {}
