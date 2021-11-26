import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaPageRoutingModule } from './mapa-routing.module';

import { MapaPage } from './mapa.page';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLW1lKWJH5_dX6FOib9X_P8Wm2nnqA3qw'
    }),
    MapaPageRoutingModule
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
