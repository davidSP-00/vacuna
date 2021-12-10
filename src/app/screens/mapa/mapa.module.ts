import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaPageRoutingModule } from './mapa-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MapaPage } from './mapa.page';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from 'src/app/components/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    IonicModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLW1lKWJH5_dX6FOib9X_P8Wm2nnqA3qw'
    }),
    MapaPageRoutingModule
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
