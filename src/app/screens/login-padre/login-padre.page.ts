import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { LoginPadreService } from 'src/app/services/login-padre.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login-padre',
  templateUrl: './login-padre.page.html',
  styleUrls: ['./login-padre.page.scss'],
})
export class LoginPadrePage implements OnInit {
  loginForm:FormGroup;
  constructor(private navController:NavController,private loginService:LoginPadreService) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      fechaNacimiento:new FormControl('',Validators.required),
      

    })
  }
  onSubmit(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){
      let usuario=new Usuario();
      usuario.dni=this.loginForm.get('dni').value;
      usuario.fechaNacimiento=moment(this.loginForm.get('fechaNacimiento').value,'YYYY-MM-DD').unix().toString();
      this.loginService.login(usuario).subscribe(async res=>{
        
  
        localStorage.setItem('usuario',JSON.stringify(res));
        localStorage.setItem('rol','ROLE_USER');
            
      
  
        this.navController.navigateForward('/main/menu');
  
      })
      }

    }
  ionViewWillEnter(){

    this.loginForm.reset();
      }
}
