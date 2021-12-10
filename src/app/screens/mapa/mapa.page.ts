import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/models/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  opened=false;
  map: any;
  lat=-12.047148801041523 ;
  lng=-77.04532980248231;
  ubicaciones:Ubicacion[];
  constructor(private ubicacionService:UbicacionService) { }

  ngOnInit() {


    this.ubicacionService.obtenerUbicaciones().subscribe((resp:Ubicacion[])=>{
      console.log(resp);
      this.ubicaciones=resp;
     } );
  }
  mapReady(event: any) {
    this.map = event;
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('Settings'));

}
focus(ubicacion:Ubicacion){
  console.log(ubicacion);
  this.lat=Number(ubicacion.latitud ) ;
  this.lng=Number(ubicacion.longitud );
}
}
