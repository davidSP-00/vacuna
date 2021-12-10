import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { EstadoVacunacion } from 'src/app/models/estadoVacunacion';
import { GrupoVacunaDTO } from 'src/app/models/grupoVacunaDTO';
import { Hijo } from 'src/app/models/hijo';
import { VacunaDTO } from 'src/app/models/vacunaDTO';
import { EstadoVacunacionService } from 'src/app/services/estado-vacunacion.service';
import { HijoService } from 'src/app/services/hijo.service';
import { LocalService } from 'src/app/services/local.service';
import * as moment from 'moment';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-esquema-vacuna',
  templateUrl: './esquema-vacuna.page.html',
  styleUrls: ['./esquema-vacuna.page.scss'],
})
export class EsquemaVacunaPage implements OnInit {

  rol:string='padre';
  estadoVacunacion:EstadoVacunacion;

  constructor(private estadoVacunacionService:EstadoVacunacionService,
    private localService:LocalService,
    private hijoService:HijoService,private alertController:AlertController,
    private route: ActivatedRoute,private navCtrl:NavController) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
    if(params['dniPadre']){
      this.obtenerPacientesMedico(params['dniPadre']);
    }else{
this.obtenerHijosDePadre()

    }
    });

   
   

    
  }
  obtenerPacientesMedico(dniPadre:string){
    this.rol='medico';
    this.hijoService.getHijosDePadre(dniPadre).subscribe( async(data:Hijo[])=>{
      console.log(data);

      let buttons=[]
      for(let i=0;i<data.length;i++){
      
        let text=data[i].nombres+" "+data[i].apellidos+'('+data[i].dni+')';
        buttons.push({
          text:text,
          handler:()=>{
            
      this.estadoVacunacionService.getEstadoVacunacion(data[i].dni).subscribe((data:EstadoVacunacion)=>{
    
      this.estadoVacunacion=data;
      });
          }
        })

      }
      const alert = await this.alertController.create({
        backdropDismiss:false,
        keyboardClose:false,
        header: 'Seleccione un paciente',
        buttons:buttons
    });
    await alert.present().then(
        
      );
  });
  }

  obtenerHijosDePadre(){
    this.hijoService.getHijosDePadre(this.localService.obtenerDatosSesion().dni).subscribe( async(data:Hijo[])=>{
      console.log(data);

      let buttons=[]
      for(let i=0;i<data.length;i++){
      
        let text=data[i].nombres+" "+data[i].apellidos+'('+data[i].dni+')';
        buttons.push({
          text:text,
          handler:()=>{
            
      this.estadoVacunacionService.getEstadoVacunacion(data[i].dni).subscribe((data:EstadoVacunacion)=>{
    
      this.estadoVacunacion=data;
      });
          }
        })

      }
      const alert = await this.alertController.create({
        backdropDismiss:false,
        keyboardClose:false,
        header: 'Seleccione un hijo',
        buttons:buttons
    });
    await alert.present().then(
        
      );
  });
  }

validarCheck(grupoVacunaDTO :GrupoVacunaDTO){

  return !grupoVacunaDTO.vacunaDTO.some(vacunaDTO=>vacunaDTO.aplicado==false);
}
obtenerMeses(){
  if(this.estadoVacunacion){
    
    var m1 = moment();
    var m2 = moment.unix(parseInt(this.estadoVacunacion.fechaNacimiento));

    var years = m1.diff(m2,'year');
    m2.add(years,'years');
    
    var months = m1.diff(m2,'months');
    m2.add(months,'months');
    var days  = m1.diff(m2,'days');
    
     return years+' año(s) '+months+' mes(es) '+days+' dia(s)';
  }
}
aplicarVacuna(vacunaDTO:VacunaDTO){

  if(this.rol!='padre'){

  if(vacunaDTO.aplicado){
    console.log('no hacer nada');

  }else{
    this.navCtrl.navigateForward('main/vacunacion-form',
    {queryParams:{...vacunaDTO,...{dni:this.estadoVacunacion.dni}}});
  }
  }

}

async informacionVacunacion(descripcion:string){
  const alert = await this.alertController.create({
  
    message:descripcion
    
});
await alert.present().then(
    
  );
}


}
