import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Apoderado } from '../models/apoderado';

@Injectable({
  providedIn: 'root'
})
export class ApoderadoService {
  ruta: string = environment.ruta;

  constructor(private http: HttpClient) { }


  getApoderados() {
    return this.http.get(this.ruta+'apoderados');
  }
  saveApoderado(apoderado:Apoderado) {
    return this.http.post(this.ruta+'apoderado', apoderado);
  }

}
