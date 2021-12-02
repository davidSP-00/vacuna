import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VacunacionDTO } from '../models/vacunacionDTO';

@Injectable({
  providedIn: 'root'
})
export class EstadoVacunacionService {
  ruta: string = environment.ruta+'vacunas/';
  constructor(private http:HttpClient) { }

  getEstadoVacunacion(dniHijo:string){
    return this.http.get(this.ruta + 'estadoVacunacion/'+dniHijo);
  }
  

  registrarVacunacion(vacunacion:VacunacionDTO){
return this.http.post(this.ruta + 'vacunacion', vacunacion);
  }
  obtenerVacunas(){
return this.http.get(this.ruta + 'vacunas');
  }
  vacunacionPorFechas(fechInicio:number,fechFin:number,idVacuna:number){
    return this.http.get(this.ruta +  `vacunacion/${fechInicio}/${fechFin}/${idVacuna}`);
      }
}
