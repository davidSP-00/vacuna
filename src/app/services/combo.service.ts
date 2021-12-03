import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  ruta: string = environment.ruta+'combos/'

  constructor(private http: HttpClient) { }

  estadosCivil(): Observable<any> {
    return this.http.get(this.ruta + 'estadosCivil');
  }
  nivelesEducacion(): Observable<any> {
    return this.http.get(this.ruta + 'nivelesEducacion');
  }
  nivelesSocioeconomico(): Observable<any> {
    return this.http.get(this.ruta + 'nivelesSocioeconomico');
  }
  tiposPoblacion(): Observable<any> {
    return this.http.get(this.ruta + 'tiposPoblacion');
  }
  tiposTrabajo(): Observable<any> {
    return this.http.get(this.ruta + 'tiposTrabajo');
  }
  nivelesRiesgo(): Observable<any> {
    return this.http.get(this.ruta + 'nivelesRiesgo');
  }

}
