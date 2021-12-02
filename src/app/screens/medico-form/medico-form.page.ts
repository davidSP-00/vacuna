import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Medico } from 'src/app/models/medico';
import { ApoderadoService } from 'src/app/services/apoderado.service';
import { ComboService } from 'src/app/services/combo.service';
import * as moment from 'moment';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.page.html',
  styleUrls: ['./medico-form.page.scss'],
})
export class MedicoFormPage implements OnInit {
  medicoForm:FormGroup;



  comboTiposTrabajo:any[];
  comboTiposPoblacion:any[];
  comboNivelesSocioeconomico:any[];
  comboNivelesEducacion:any[];
  comboEstadosCivil:any[];
  comboSexo:any[]=[
    {valor:'M' ,descripcion:'Masculino'},
    {valor:'F' ,descripcion:'Femenino'}
  ]
  constructor(private comboService:ComboService,private apoderadoService:ApoderadoService,private navCtrl:NavController) { }

  ngOnInit() {
    this.medicoForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      nombres:new FormControl('',Validators.required),
      apellidos:new FormControl('',Validators.required),
      sexo:new FormControl('',Validators.required),
      celular:new FormControl('',Validators.required),
      correo:new FormControl('',Validators.required),
      fechaNacimiento:new FormControl('',Validators.required),
      estadoCivil:new FormControl('',Validators.required),
      nivelEducacion:new FormControl('',Validators.required),
      tipoTrabajo:new FormControl('',Validators.required),
      nivelSocioEconomico:new FormControl('',Validators.required),
      tipoPoblacion:new FormControl('',Validators.required),
     /*  numeroHijos:new FormControl('',Validators.required), */
      /* familiar:new FormControl('',Validators.required), */
      

    })
    this.obtenerCombos();
  }

  firstFormSubmit(){
    this.medicoForm.markAllAsTouched();
    if(this.medicoForm.valid){
      let medico=this.medicoForm.value as Medico;
      medico.habilitado=false;
      medico.baja=false;
      medico.roles=["medico"];
      medico.fechaNacimiento=moment(this.medicoForm.get('fechaNacimiento').value,'YYYY-MM-DD').unix().toString();
      
      this.apoderadoService.saveApoderado(medico).subscribe(res=>{
        alert('Registro exitoso');
      this.navCtrl.navigateForward('/main/medicos');
      },err=>{
        alert('Error al guardar');
      });

  
    }
  }

  obtenerCombos(){
    this.comboService.estadosCivil().subscribe(res=>{
      this.comboEstadosCivil=res;
    });
    this.comboService.nivelesEducacion().subscribe(res=>{
      this.comboNivelesEducacion=res;
    });
    this.comboService.nivelesSocioeconomico().subscribe(res=>{
      this.comboNivelesSocioeconomico=res;
    });
    this.comboService.tiposTrabajo().subscribe(res=>{
      this.comboTiposTrabajo=res;
    });
    this.comboService.tiposPoblacion().subscribe(res=>{
      this.comboTiposPoblacion=res;
    });
  }
}
