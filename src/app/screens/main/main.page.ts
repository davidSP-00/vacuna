import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { EmitterService } from 'src/app/services/emitter.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  rol:string;
  public appPages = [];
  constructor(private navCtrl:NavController,private localService:LocalService,private emitter:EmitterService) { }

  ngOnInit() {
  
  }
cerrarSesion(){
 this.localService.limpiarSesion();
}

ionViewWillEnter(){
  this.emitter.menu.emit("emitiendo");
  this.appPages= [
    { title: 'Inicio', url: '/main/menu', icon: 'home' ,tipo:'X'},
    { title: 'Lista de Padres y/o Apoderados', url: '/main/pacientes', icon: 'people', tipo:'ROLE_MEDICO' },
    { title: 'Apoderados no habilitados', url: '/main/pacientes-no-habilitados', icon: 'people', tipo:'ROLE_MEDICO'  },
    { title: 'Agenda', url: '/main/reporte-vacunacion', icon: 'calendar',tipo:'ROLE_MEDICO' },
    { title: 'Esquema Vacunación', url: '/main/esquema-vacuna', icon: 'calendar', tipo:'ROLE_USER'  },
    { title: 'Informacion Vacunas', url: '/main/informacion-vacuna', icon: 'clipboard', tipo:'ROLE_USER'  },
    { title: 'Centros de vacunación', url: '/main/mapa', icon: 'map', tipo:'ROLE_USER'  },
    { title: 'Medicos', url: '/main/medicos', icon: 'people', tipo:'ROLE_ADMIN'  },
    { title: 'Notificaciones', url: '/main/notificacion', icon: 'notifications', tipo:'ROLE_ADMIN'  }
  ];

  this.rol=this.localService.obtenerRol();
     
  this.appPages=this.appPages.filter(item=>{
    if(item.tipo==this.rol || item.tipo=='X'){
      return item;
    }
  });
}
}
