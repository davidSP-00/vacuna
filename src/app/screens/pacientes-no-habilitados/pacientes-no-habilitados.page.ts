import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apoderado } from 'src/app/models/apoderado';
import { ApoderadoService } from 'src/app/services/apoderado.service';

@Component({
  selector: 'app-pacientes-no-habilitados',
  templateUrl: './pacientes-no-habilitados.page.html',
  styleUrls: ['./pacientes-no-habilitados.page.scss'],
})
export class PacientesNoHabilitadosPage implements OnInit {
  apoderados:Apoderado[];
  apoderadosFilter:Apoderado[];
  constructor(private apoderadoService:ApoderadoService,
    private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apoderadoService.getApoderadosPorEstado(false).subscribe(
      (res:Apoderado[]) => {
        this.apoderadosFilter=res;
        this.apoderados=res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  habilitar(apoderado:Apoderado){
    apoderado.habilitado=true;
    apoderado.roles=["user"];
    this.apoderadoService.saveApoderado(apoderado).subscribe(
      res=>{
        alert("Se habilito el apoderado");
        this.ionViewWillEnter();
      });

  }
  
    filterList($event){
  console.log($event.srcElement.value);
  this.apoderadosFilter=this.apoderados.filter(apoderado=>{
    return apoderado.dni.includes($event.srcElement.value)
  });
    }
}
