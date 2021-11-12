import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apoderado } from 'src/app/models/apoderado';
import { ApoderadoService } from 'src/app/services/apoderado.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {
  apoderados:Apoderado[];
  apoderadosFilter:Apoderado[];
  constructor(private apoderadoService:ApoderadoService,
    private router:Router) { }

  ngOnInit() {


  }
registrarVacuna(dniPadre:string){
this.router.navigate(['main/esquema-vacuna'],
{queryParams:{
  dniPadre:dniPadre
}}
);
}
ionViewWillEnter(){
  this.apoderadoService.getApoderados().subscribe(
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
registrarHijo(dniPadre:string){
  this.router.navigate(['main/hijo-form'],
  {queryParams:{
    dniPadre:dniPadre
  }}
  );
  }

  filterList($event){
console.log($event.srcElement.value);
this.apoderadosFilter=this.apoderados.filter(apoderado=>{
  return apoderado.dni.includes($event.srcElement.value)
});
  }
}
