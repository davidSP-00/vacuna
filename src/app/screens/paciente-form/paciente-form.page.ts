import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComboService } from 'src/app/services/combo.service';
import { MatStepper } from '@angular/material/stepper';
import { ApoderadoService } from 'src/app/services/apoderado.service';
import { HijoService } from 'src/app/services/hijo.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.page.html',
  styleUrls: ['./paciente-form.page.scss'],
})
export class PacienteFormPage implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  firstForm:FormGroup;
  secondForm:FormGroup;
editable:boolean=true;
  comboTiposTrabajo:any[];
  comboTiposPoblacion:any[];
  comboNivelesSocioeconomico:any[];
  comboNivelesEducacion:any[];
  comboEstadosCivil:any[];
  comboSexo:any[]=[
    {valor:'M' ,descripcion:'Masculino'},
    {valor:'F' ,descripcion:'Femenino'}
  ]
  
  constructor(private comboService:ComboService,private apoderadoService:ApoderadoService,
    private hijoService:HijoService,private navCtrl:NavController,private router:Router) { }

  ngOnInit() {
    this.firstForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      nombres:new FormControl('',Validators.required),
      apellidos:new FormControl('',Validators.required),
      sexo:new FormControl('',Validators.required),
      celular:new FormControl('',Validators.required),
      correo:new FormControl('',Validators.required),
      edad:new FormControl('',Validators.required),
      estadoCivil:new FormControl('',Validators.required),
      nivelEducacion:new FormControl('',Validators.required),
      tipoTrabajo:new FormControl('',Validators.required),
      nivelSocioEconomico:new FormControl('',Validators.required),
      tipoPoblacion:new FormControl('',Validators.required),
      numeroHijos:new FormControl('',Validators.required),
      /* familiar:new FormControl('',Validators.required), */
      

    })
    this.secondForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      nombres:new FormControl('',Validators.required),
      apellidos:new FormControl('',Validators.required),
      edad:new FormControl('',Validators.required),
      sexo:new FormControl('',Validators.required),
      dniPadre:new FormControl('',Validators.required),
  
    })
    this.obtenerCombos();
  }
  firstFormSubmit(){
    this.firstForm.markAllAsTouched();
   
    if(this.firstForm.valid){
      this.apoderadoService.saveApoderado(this.firstForm.value).subscribe(res=>{
        console.log(res);
        this.editable=false;
        this.myStepper.next();
      },err=>{
        alert('Error al guardar');
      });

  
    }
  }
  secondFormSubmit(){
    this.secondForm.markAllAsTouched();
    this.secondForm.get('dniPadre').setValue(this.firstForm.value.dni);
    if(this.secondForm.valid){
      this.hijoService.saveHijo(this.secondForm.value).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('main/pacientes');
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
