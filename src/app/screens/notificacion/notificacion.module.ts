import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionPageRoutingModule } from './notificacion-routing.module';

import { NotificacionPage } from './notificacion.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    NotificacionPageRoutingModule
  ],
  declarations: [NotificacionPage]
})
export class NotificacionPageModule {}
