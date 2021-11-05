import { Component, OnInit } from '@angular/core';
import { Apoderado } from 'src/app/models/apoderado';
import { ApoderadoService } from 'src/app/services/apoderado.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {
  apoderados:Apoderado[];
  constructor(private apoderadoService:ApoderadoService) { }

  ngOnInit() {

    this.apoderadoService.getApoderados().subscribe(
      (res:Apoderado[]) => {
        this.apoderados=res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

  }

}
