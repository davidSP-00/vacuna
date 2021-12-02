import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  ruta: string = environment.ruta+'vacunas/';

  constructor(private http: HttpClient) { }


  getMedicos() {
    return this.http.get(this.ruta+'medicos');
  }
  saveMedico(medico:Medico) {
    return this.http.post(this.ruta+'medico', medico);
  }

}
