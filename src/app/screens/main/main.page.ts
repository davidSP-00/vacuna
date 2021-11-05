import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  usuario:Usuario;
  public appPages = [
    { title: 'Inicio', url: '/main/menu', icon: 'home' ,tipo:'X'},
    { title: 'Lista de Padres y/o Apoderados', url: '/main/pacientes', icon: 'people', tipo:'M' },
    { title: 'Agenda', url: '/main/agenda', icon: 'calendar',tipo:'M' },
    { title: 'Esquema Vacunación', url: '/main/esquema-vacuna', icon: 'calendar', tipo:'P'  },
    { title: 'Informacion Vacunas', url: '/main/informacion-vacuna', icon: 'clipboard', tipo:'P'  },
  ];
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
     this.usuario=JSON.parse(localStorage.getItem('usuario')) as Usuario;
  console.log(this.usuario);
  this.appPages=this.appPages.filter(item=>{
    if(item.tipo==this.usuario.tipo || item.tipo=='X'){
      return item;
    }
  });
  }
cerrarSesion(){
  localStorage.removeItem('usuario');

}
}
