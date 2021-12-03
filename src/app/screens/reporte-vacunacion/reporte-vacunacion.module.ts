import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteVacunacionPageRoutingModule } from './reporte-vacunacion-routing.module';

import { ReporteVacunacionPage } from './reporte-vacunacion.page';
import { SharedModule } from 'src/app/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    ReporteVacunacionPageRoutingModule
  ],
  declarations: [ReporteVacunacionPage]
})
export class ReporteVacunacionPageModule {}
