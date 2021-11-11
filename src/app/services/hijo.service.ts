import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hijo } from '../models/hijo';

@Injectable({
  providedIn: 'root'
})
export class HijoService {
  ruta: string = environment.ruta+'vacunas/';
  constructor(private http:HttpClient) { }

  getHijos(){
    return this.http.get(this.ruta + 'hijos');
  }
  saveHijo(hijo:Hijo){
    return this.http.post(this.ruta + 'hijo', hijo);
  }

  getHijosDePadre(dniPadre:string){
    return this.http.get(this.ruta + 'hijo/' + dniPadre);
  }

}
