import { Component,  OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
rol:string;
  items=[
    {
      routerLink:'/main/pacientes',
      icon:'person-outline',
      tipo:'ROLE_MEDICO',
      titulo:'Padres y/o Apoderados',
      descripcion:'Ver registrados y agregar nuevos'
    },
    {
      routerLink:'/main/agenda',
      icon:'calendar-outline',
      tipo:'ROLE_MEDICO',
      titulo:'Agenda de vacunación',
      descripcion:'Ver la agenda por dia y mensual'
    },
    {
      routerLink:'/main/esquema-vacuna',
      icon:'calendar-outline',
      tipo:'ROLE_USER',
      titulo:'Esquema de vacunación',
      descripcion:'Ver la agenda por dia y mensual'
    },
    {
      routerLink:'/main/informacion-vacuna',
      icon:'clipboard-outline',
      tipo:'ROLE_USER',
      titulo:'Información de las vacunas',
      descripcion:'Conoce más de las vacunas'
    }
  ]

  constructor(private localService:LocalService) { }

  ngOnInit() {

    this.rol=this.localService.obtenerRol();
    

        this.items=this.items.filter(item=>{
          if(item.tipo==this.rol){
            return item;
          }
        });
      
    
    
  }
  
  ionViewDidLeave(){
    console.log('sd')
    
  }
}
