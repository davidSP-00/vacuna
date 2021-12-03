import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { VacunaDTO } from 'src/app/models/vacunaDTO';
import { EstadoVacunacionService } from 'src/app/services/estado-vacunacion.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-reporte-vacunacion',
  templateUrl: './reporte-vacunacion.page.html',
  styleUrls: ['./reporte-vacunacion.page.scss'],
})
export class ReporteVacunacionPage implements OnInit {
  rows:any[] = [
  ];
  columns = [{ prop: 'vacuna',name:'Vacuna',width:200},
   { name: 'Fecha Cita',prop:'fechaCita' }, 
   { name: 'DNI',prop:'dni' },
   { name: 'Nombre',prop:'nombres' },
   { name: 'Edad',prop:'fechaNacimiento' }];
  constructor(private estadoVacunacionService:EstadoVacunacionService,private ubicacionService:UbicacionService ) { }

  reporteForm:FormGroup;

  vacunas:any[]=[];
  ubicaciones:any[]=[];

  ngOnInit() {

    this.reporteForm=new FormGroup({
      fechaIni:new  FormControl('',Validators.required),
      fechaFin:new FormControl('',Validators.required),
      idVacuna:new FormControl(0),
      idUbicacion:new FormControl(0),
    })

    this.estadoVacunacionService.obtenerVacunas().subscribe((data:any[])=>{

      data=data.map(vacuna=>
        {vacuna.descripcion=vacuna.nombreVacuna
          return vacuna;
        });

        data.splice(0,0,{id:0,descripcion:'Todas'});

      this.vacunas=data;


    });

    this.ubicacionService.obtenerUbicaciones().subscribe(data=>{
    this.ubicaciones=data;
    
    data.splice(0,0,{id:0,descripcion:'Todas'});
    console.log(data);
    },()=>{
      console.log('error');
    });



    
  }
  buscar(){
    if(this.reporteForm.valid){
    console.log(this.reporteForm.value);
    this.estadoVacunacionService.vacunacionPorFechas(
      moment(this.reporteForm.get('fechaIni').value,'YYYY-MM-DD').unix(),
      moment(this.reporteForm.get('fechaFin').value,'YYYY-MM-DD').unix(),
      this.reporteForm.get('idVacuna').value,
      this.reporteForm.get('idUbicacion').value,
    ).subscribe((data:any[])=>{
      this.rows=data;
this.rows=[...this.rows];
    const columnas=[]
    columnas.push({name:'',prop:'nombre'});
    
    })}

  }

}
