import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Apoderado } from 'src/app/models/apoderado';
import { ApoderadoService } from 'src/app/services/apoderado.service';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm:FormGroup;



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
    this.registerForm=new FormGroup({
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
      nivelSocioeconomico:new FormControl('',Validators.required),
      tipoPoblacion:new FormControl('',Validators.required),
     /*  numeroHijos:new FormControl('',Validators.required), */
      /* familiar:new FormControl('',Validators.required), */
      

    })
    this.obtenerCombos();
  }
  firstFormSubmit(){
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid){
      let apoderado=this.registerForm.value as Apoderado;
      apoderado.habilitado=false;
      apoderado.baja=false;
      apoderado.roles=["user"];
      apoderado.fechaNacimiento=moment(this.registerForm.get('fechaNacimiento').value,'YYYY-MM-DD').unix().toString();
      
      this.apoderadoService.saveApoderado(apoderado).subscribe(res=>{
        alert('Registro exitoso');
      this.navCtrl.navigateForward('/login-padre');
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
