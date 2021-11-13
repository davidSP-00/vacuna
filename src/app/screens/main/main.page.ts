import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  rol:string;
  public appPages = [
    { title: 'Inicio', url: '/main/menu', icon: 'home' ,tipo:'X'},
    { title: 'Lista de Padres y/o Apoderados', url: '/main/pacientes', icon: 'people', tipo:'ROLE_MEDICO' },
    { title: 'Agenda', url: '/main/agenda', icon: 'calendar',tipo:'ROLE_MEDICO' },
    { title: 'Esquema Vacunación', url: '/main/esquema-vacuna', icon: 'calendar', tipo:'ROLE_USER'  },
    { title: 'Informacion Vacunas', url: '/main/informacion-vacuna', icon: 'clipboard', tipo:'ROLE_USER'  },
  ];
  constructor(private navCtrl:NavController,private localService:LocalService) { }

  ngOnInit() {
  
  }
cerrarSesion(){
 this.localService.limpiarSesion();
}

ionViewWillEnter(){
  this.appPages= [
    { title: 'Inicio', url: '/main/menu', icon: 'home' ,tipo:'X'},
    { title: 'Lista de Padres y/o Apoderados', url: '/main/pacientes', icon: 'people', tipo:'ROLE_MEDICO' },
    { title: 'Agenda', url: '/main/agenda', icon: 'calendar',tipo:'ROLE_MEDICO' },
    { title: 'Esquema Vacunación', url: '/main/esquema-vacuna', icon: 'calendar', tipo:'ROLE_USER'  },
    { title: 'Informacion Vacunas', url: '/main/informacion-vacuna', icon: 'clipboard', tipo:'ROLE_USER'  },
  ];

  this.rol=this.localService.obtenerRol();
     
  this.appPages=this.appPages.filter(item=>{
    if(item.tipo==this.rol || item.tipo=='X'){
      return item;
    }
  });
}
}
