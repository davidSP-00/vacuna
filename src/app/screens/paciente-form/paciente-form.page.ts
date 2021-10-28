import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.page.html',
  styleUrls: ['./paciente-form.page.scss'],
})
export class PacienteFormPage implements OnInit {
  firstForm:FormGroup;
  secondForm:FormGroup;
  estadosCiviles=[
    {
      id:1,
      descripcion:'Soltero(a)'
    },{
      id:2,
      descripcion:'Casado(a)'
    },{
      id:3,
      descripcion:'Divorciado(a)'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.firstForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      nombres:new FormControl('',Validators.required),
      apellidos:new FormControl('',Validators.required),
      celular:new FormControl('',Validators.required),
      edad:new FormControl('',Validators.required),
      estadoCivil:new FormControl('',Validators.required),
      nivelEducacion:new FormControl('',Validators.required),
      ocupacion:new FormControl('',Validators.required),
      nivelIngresos:new FormControl('',Validators.required),
      tipoResidencia:new FormControl('',Validators.required),
      numeroHijos:new FormControl('',Validators.required),
      familiar:new FormControl('',Validators.required),
      

    })
    this.secondForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      nombres:new FormControl('',Validators.required),
      apellidos:new FormControl('',Validators.required),
      nombreMadre:new FormControl('',Validators.required),
      nombrePadre:new FormControl('',Validators.required),
      vacuna:new FormControl('',Validators.required),
   
    })
  }
  firstFormSubmit(){
    this.firstForm.markAllAsTouched();
    console.log('ss')
  }
  secondFormSubmit(){
    this.secondForm.markAllAsTouched();
    console.log('ss')
  }
}
