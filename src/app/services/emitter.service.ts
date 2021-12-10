import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {


   menu=new EventEmitter();
  constructor() { 
  }
}
