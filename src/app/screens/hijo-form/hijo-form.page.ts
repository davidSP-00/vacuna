import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hijo } from 'src/app/models/hijo';
import * as moment from 'moment';
import { HijoService } from 'src/app/services/hijo.service';
import { NavController } from '@ionic/angular';
import { ComboService } from 'src/app/services/combo.service';
@Component({
  selector: 'app-hijo-form',
  templateUrl: './hijo-form.page.html',
  styleUrls: ['./hijo-form.page.scss'],
})
export class HijoFormPage implements OnInit {
  hijoForm:FormGroup;
  comboSexo:any[]=[
    {valor:'M' ,descripcion:'Masculino'},
    {valor:'F' ,descripcion:'Femenino'}
  ]
  comboNivelRiesgo:any[]=[];
  constructor(private route: ActivatedRoute,private navCtrl:NavController,private hijoService:HijoService,
    private comboService:ComboService) { }

  ngOnInit() {
    this.hijoForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      nombres:new FormControl('',Validators.required),
      apellidos:new FormControl('',Validators.required),
      fechaNacimiento:new FormControl('',Validators.required),
      sexo:new FormControl('',Validators.required),
      dniPadre:new FormControl('',Validators.required),
      nivelRiesgo:new FormControl('',Validators.required),
  
    })
    this.route.queryParams.subscribe(params => {
      if(params['dniPadre']){
this.hijoForm.controls['dniPadre'].setValue(params['dniPadre']);
      }else{
  this.navCtrl.navigateForward('/login');
      }
      });
  
      this.obtenerCombo()

    
  }

  onSubmit(){
    console.log(this.hijoForm.value);

    this.hijoForm.markAllAsTouched();
    if(this.hijoForm.valid){
      
      let hijo=this.hijoForm.value as Hijo;
      hijo.fechaNacimiento=moment(this.hijoForm.get('fechaNacimiento').value,'YYYY-MM-DD').unix().toString();
      this.hijoService.saveHijo(hijo).subscribe(res=>{
        console.log(res);
        this.navCtrl.navigateForward('main/pacientes');
      },err=>{
        alert('Error al guardar');
      });
    }
  }

  obtenerCombo(){
    this.comboService.nivelesRiesgo().subscribe(res=>{
    console.log(res);
    this.comboNivelRiesgo=res;

    });
  }
}
