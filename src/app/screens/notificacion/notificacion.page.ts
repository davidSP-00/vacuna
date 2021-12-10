import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.page.html',
  styleUrls: ['./notificacion.page.scss'],
})
export class NotificacionPage implements OnInit {

  notificacionForm:FormGroup;

  comboFrecuencia:any[]=[
    {valor:'Q' ,descripcion:'Quincenal'},
    {valor:'S' ,descripcion:'Semanal'},
    {valor:'I' ,descripcion:'Interdiario'},
    {valor:'D' ,descripcion:'Diario'},
  ]
  constructor(private alertController:AlertController,private comboService:ComboService) { }

  ngOnInit() {
    this.obtenerRiesgos();
    this.notificacionForm=new FormGroup({
      mensaje:new  FormControl('La siguiente vacuna de su hijo con DNI: ${dni_hijo} sera el dia ${dia}.\nPor favor acercarse al centro de vacunación mas cercano.',Validators.required),
      frecuencia:new FormControl('Q',Validators.required),
      

    })

    
  }


  obtenerRiesgos(){
    this.comboService.nivelesRiesgo().subscribe(async( data)=>{
      let buttons=[]
      for(let i=0;i<data.length;i++){
      
        let text=data[i].descripcion;
        buttons.push({
          text:text,
          handler:()=>{
      
        
          }
        })

      }
      const alert = await this.alertController.create({
        header: 'Seleccione un nivel de riesgo',
        buttons:buttons
    });
    await alert.present().then(
        
      );
    });
  }
  onSubmit(){
    if(this.notificacionForm.valid){
    alert('Guardado exitoso')

    }else{
      alert('Llene todos los campos')
    }
  }
}
