import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Lista de Padres y/o Apoderados', url: '/pacientes', icon: 'people' },
    { title: 'Agenda', url: '/folder/Agenda', icon: 'calendar' },
   
  ];
  constructor() {}
}
