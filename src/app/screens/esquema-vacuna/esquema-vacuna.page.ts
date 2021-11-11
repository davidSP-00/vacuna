import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EstadoVacunacion } from 'src/app/models/estadoVacunacion';
import { Hijo } from 'src/app/models/hijo';
import { EstadoVacunacionService } from 'src/app/services/estado-vacunacion.service';
import { HijoService } from 'src/app/services/hijo.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-esquema-vacuna',
  templateUrl: './esquema-vacuna.page.html',
  styleUrls: ['./esquema-vacuna.page.scss'],
})
export class EsquemaVacunaPage implements OnInit {
  estadoVacunacion:EstadoVacunacion;

  constructor(private estadoVacunacionService:EstadoVacunacionService,
    private localService:LocalService,
    private hijoService:HijoService,private alertController:AlertController) { }

  ngOnInit() {

    this.hijoService.getHijosDePadre(this.localService.obtenerDatosSesion().dni).subscribe( async(data:Hijo[])=>{
      console.log(data);

      let buttons=[]
      for(let i=0;i<data.length;i++){
      
        let text=data[i].nombres+" "+data[i].apellidos+'('+data[i].dni+')';
        buttons.push({
          text:text,
          handler:()=>{
            
      this.estadoVacunacionService.getEstadoVacunacion(data[i].dni).subscribe((data:EstadoVacunacion)=>{
     console.log(data);
      this.estadoVacunacion=data;
      });
          }
        })

      }
      const alert = await this.alertController.create({
        header: 'Seleccione un hijo',
        buttons:buttons
    });
    await alert.present().then(
        
      );
  });
   

    
  }


}
