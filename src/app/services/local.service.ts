import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  obtenertoken(){
    return JSON.parse(localStorage.getItem('usuario'))?.token ;
  }
  obtenerDatosSesion(){
    return JSON.parse(localStorage.getItem('usuario')) as Usuario;
  }
  obtenerRol(){
    return localStorage.getItem('rol') ;
  }
  limpiarSesion(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');
  }
}
