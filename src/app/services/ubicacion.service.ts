import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  ruta:string=environment.ruta+'vacunas/ubicaciones'

  constructor(private http:HttpClient) { }

  obtenerUbicaciones():Observable<any>{

    return this.http.get(this.ruta);
  }
}