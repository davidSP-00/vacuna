import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public appPages = [
    { title: 'Inicio', url: '/main/menu', icon: 'home' },
    { title: 'Lista de Padres y/o Apoderados', url: '/main/pacientes', icon: 'people' },
    { title: 'Agenda', url: '/main/agenda', icon: 'calendar' },
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
