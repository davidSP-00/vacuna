import { Component,  Input,  OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { EmitterService } from 'src/app/services/emitter.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
rol:string;
  items=[];

  constructor(private localService:LocalService,private emitter:EmitterService) { }

  ngOnInit() {
    
    this.ionViewWillEnter()
    this.emitter.menu.subscribe(()=>{
      this.ionViewWillEnter();
    })
    
  }
  
  ionViewWillEnter(){
    this.items=[
      {
        routerLink:'/main/pacientes',
        icon:'person-outline',
        tipo:'ROLE_MEDICO',
        titulo:'Padres y/o Apoderados',
        descripcion:'Ver registrados y agregar nuevos'
      },
      {
        routerLink:'/main/reporte-vacunacion',
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
      },
      {
        routerLink:'/main/pacientes-no-habilitados',
        icon:'person-outline',
        tipo:'ROLE_MEDICO',
        titulo:'Apoderados no Habilitados',
        descripcion:'Ver apoderados que no estan habilitados'
      },
      {
        routerLink:'/main/mapa',
        icon:'map',
        tipo:'ROLE_USER',
        titulo:'Centros de Vacunación',
        descripcion:'Conoce la dirección de los centros de vacunación'
      },
      {
        routerLink:'/main/medicos',
        icon:'person-outline',
        tipo:'ROLE_ADMIN',
        titulo:'Medicos',
        descripcion:'Ver o agregar medicos'
      },
      {
        routerLink:'/main/notificacion',
        icon:'notifications',
        tipo:'ROLE_ADMIN',
        titulo:'Notificaciones',
        descripcion:'Mantenimiento de Notificaciones'
      }
    ];

    this.rol=this.localService.obtenerRol();
    

        this.items=this.items.filter(item=>{
          if(item.tipo==this.rol){
            return item;
          }
        });
      
    
      }
}
