import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
usuario:Usuario;
  items=[
    {
      routerLink:'/main/pacientes',
      icon:'person-outline',
      tipo:'M',
      titulo:'Padres y/o Apoderados',
      descripcion:'Ver registrados y agregar nuevos'
    },
    {
      routerLink:'/main/agenda',
      icon:'calendar-outline',
      tipo:'M',
      titulo:'Agenda de vacunación',
      descripcion:'Ver la agenda por dia y mensual'
    },
    {
      routerLink:'/main/esquema-vacuna',
      icon:'calendar-outline',
      tipo:'P',
      titulo:'Esquema de vacunación',
      descripcion:'Ver la agenda por dia y mensual'
    },
    {
      routerLink:'/main/informacion-vacuna',
      icon:'clipboard-outline',
      tipo:'P',
      titulo:'Información de las vacunas',
      descripcion:'Conoce más de las vacunas'
    }
  ]

  constructor() { }

  ngOnInit() {

    this.usuario=JSON.parse(localStorage.getItem('usuario')) as Usuario;
    console.log(this.usuario);
    this.items=this.items.filter(item=>{
      if(item.tipo==this.usuario.tipo){
        return item;
      }
    });
  }
}
