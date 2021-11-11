import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoVacunacionService {
  ruta: string = environment.ruta+'vacunas/';
  constructor(private http:HttpClient) { }

  getEstadoVacunacion(dniHijo:string){
    return this.http.get(this.ruta + 'estadoVacunacion/'+dniHijo);
  }
  

}
