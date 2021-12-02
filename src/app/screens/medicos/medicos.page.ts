import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
})
export class MedicosPage implements OnInit {
  medicos: Medico[];
  medicosFilter: Medico[];

  constructor(private medicoService: MedicoService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.medicoService.getMedicos().subscribe((res: Medico[]) => {
      this.medicosFilter = res;
      this.medicos = res;
      console.log(res);

    }, err => {
      console.log(err);
    });
  }
  filterList($event) {
    console.log($event.srcElement.value);
    this.medicosFilter = this.medicos.filter(medico => {
      return medico.dni.includes($event.srcElement.value)
    });
  }

}
