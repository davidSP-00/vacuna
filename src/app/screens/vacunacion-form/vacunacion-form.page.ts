import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { VacunacionDTO } from 'src/app/models/vacunacionDTO';
import { EstadoVacunacionService } from 'src/app/services/estado-vacunacion.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-vacunacion-form',
  templateUrl: './vacunacion-form.page.html',
  styleUrls: ['./vacunacion-form.page.scss'],
})
export class VacunacionFormPage implements OnInit {
  vacunacionForm:FormGroup;
  vacunaDTO:VacunacionDTO=new VacunacionDTO();
  constructor(
    private route: ActivatedRoute,private localService:LocalService,private estadoVacunacionService:EstadoVacunacionService) { }

  ngOnInit() {
    this.vacunacionForm=new FormGroup({
      idVacunacion:new  FormControl('',Validators.required),
      lote:new  FormControl('',Validators.required),
      dni:new  FormControl('',Validators.required),
      vacuna:new  FormControl('',Validators.required),
      fechaCita:new  FormControl('',Validators.required),
      lugar:new  FormControl('',Validators.required),
      dniVacunador:new  FormControl('',Validators.required),
      reaccion:new FormControl('',Validators.required),
      
    })
    this.route.queryParams.subscribe(params => {
      
      this.vacunaDTO.vacuna=params["idVacuna"];
      this.vacunaDTO.dniVacunador=this.localService.obtenerDatosSesion().dni;
      this.vacunaDTO.fechaCita=params["fechaCita"] as string;
      this.vacunaDTO.lugar=params["lugar"];
      this.vacunaDTO.dni=params["dni"];
      this.vacunaDTO.reaccion=params["reaccion"];
      this.vacunaDTO.dni
      console.log(params["idVacunacion"]);
      console.log(this.vacunaDTO);
      this.vacunacionForm.reset(this.vacunaDTO);
      });
    
  }
onSubmit(){
  this.vacunaDTO=this.vacunacionForm.value;
  this.vacunaDTO.fechaCita=moment(this.vacunaDTO.fechaCita,'YYYY-MM-DD').unix().toString();
  this.estadoVacunacionService.registrarVacunacion(this.vacunaDTO).subscribe(
    (data)=>{
      console.log(data);
    }
  );
  console.log(this.vacunaDTO);
}
}
