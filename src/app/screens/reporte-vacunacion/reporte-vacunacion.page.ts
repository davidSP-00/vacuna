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
   { name: 'Nombre',prop:'nombres',width:250 },
   { name: 'Edad',prop:'fechaNacimiento',width:250 },
   { name: 'Ubicacion',prop:'idUbicacion',width:300 },];
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
    var m1 = moment();
    var m2 = moment('4/5/2014','M/D/YYYY');

    var years = m1.diff(m2,'year');
    m2.add(years,'years');
    
    var months = m1.diff(m2,'months');
    m2.add(months,'months');
    var days  = m1.diff(m2,'days');
    
    console.log('years',years);
    console.log('months',months);
    console.log('years',days);

    
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

      data=data.map(vacuna=>{
       vacuna.idUbicacion=this.ubicaciones.find(u=>u.id==vacuna.idUbicacion).descripcion;
       vacuna.nombres=vacuna.apellidos+vacuna.nombres;


       var m1 = moment();
       var m2 = moment.unix(vacuna.fechaNacimiento as number);
   
       var years = m1.diff(m2,'year');
       m2.add(years,'years');
       
       var months = m1.diff(m2,'months');
       m2.add(months,'months');
       var days  = m1.diff(m2,'days');
       
       vacuna.fechaNacimiento=years+' año(s) '+months+' mes(es) '+days+' dia(s)';
       return vacuna;
      })
      this.rows=data;

      
    
  
this.rows=[...this.rows];


    
    })}

  }

}
