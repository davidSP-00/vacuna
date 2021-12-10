import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { VacunacionDTO } from 'src/app/models/vacunacionDTO';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { EstadoVacunacionService } from 'src/app/services/estado-vacunacion.service';
import { LocalService } from 'src/app/services/local.service';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-vacunacion-form',
  templateUrl: './vacunacion-form.page.html',
  styleUrls: ['./vacunacion-form.page.scss'],
})
export class VacunacionFormPage implements OnInit {
  vacunacionForm:FormGroup;
  vacunaDTO:VacunacionDTO=new VacunacionDTO();
  comboUbicacion:any[]=[];
  comboNivelRiesgo:any[]=[];
  constructor(
    private route: ActivatedRoute,
    private localService:LocalService,
    private navCtrl:NavController,private estadoVacunacionService:EstadoVacunacionService,
    private comboService:ComboService,
    private ubicacionService:UbicacionService) { }

  ngOnInit() {
    this.vacunacionForm=new FormGroup({
      idVacunacion:new  FormControl('',Validators.required),
      lote:new  FormControl('',Validators.required),
      dni:new  FormControl('',Validators.required),
      vacuna:new  FormControl('',Validators.required),
      fechaCita:new  FormControl('',Validators.required),
      lugar:new  FormControl('',Validators.required),
      idUbicacionCita:new  FormControl('',Validators.required),
      dniVacunador:new  FormControl('',Validators.required),
      reaccion:new FormControl('',Validators.required),
      nivelRiesgo:new FormControl('',Validators.required),
      
    })
    this.route.queryParams.subscribe(params => {
      this.vacunaDTO.idVacuna=params["idVacuna"];
      this.vacunaDTO.idVacunacion=params["idVacunacion"];
      this.vacunaDTO.dniVacunador=this.localService.obtenerDatosSesion().dni;
      /* this.vacunaDTO.fechaCita=params["fechaCita"] as string; */
      /* this.vacunaDTO.idVacunacion=params["lugar"]; */
      this.vacunaDTO.dni=params["dni"];
      /* this.vacunaDTO.reaccion=params["reaccion"]; */
      this.vacunaDTO.dni
      console.log(params["idVacunacion"]);
      console.log(this.vacunaDTO);
      this.vacunacionForm.reset(this.vacunaDTO);
      });
      this.obtenerCombo()
  }
onSubmit(){
  this.vacunaDTO.idUbicacion=this.vacunacionForm.get('lugar').value;
  this.vacunaDTO.idUbicacionCita=this.vacunacionForm.get('idUbicacionCita').value;
  this.vacunaDTO.fechaCita=moment(this.vacunacionForm.get('fechaCita').value,'YYYY-MM-DD').unix().toString();
  this.vacunaDTO.reaccion=this.vacunacionForm.get('reaccion').value;
  this.vacunaDTO.lote=this.vacunacionForm.get('lote').value;
  this.vacunaDTO.nivelRiesgo=this.vacunacionForm.get('nivelRiesgo').value;
  this.estadoVacunacionService.registrarVacunacion(this.vacunaDTO).subscribe(
    (data)=>{
      console.log(data);
      this.navCtrl.navigateForward('/main/pacientes');
    }
  );
  console.log(this.vacunaDTO);
}
obtenerCombo(){
  this.ubicacionService.obtenerUbicaciones().subscribe(res=>{
  console.log(res);
  this.comboUbicacion=res;

  });
  this.comboService.nivelesRiesgo().subscribe(res=>{
    console.log(res);
    this.comboNivelRiesgo=res;

    });
}
}
